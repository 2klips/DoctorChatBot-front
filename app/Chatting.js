// import React, { useState } from 'react';
// import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

// const Chatting = () => {
//   const [messages, setMessages] = useState([
//     { id: '1', sender: 'bot', text: '안녕하세요! 어디가 불편하신가요?' },
//     // { id: '1', sender: 'bot', text: '헬로 챗봇 월드' },
//     // { id: '2', sender: 'user', text: '간이 아파' },
//     // { id: '3', sender: 'bot', text: '우루사' },
//     // { id: '4', sender: 'user', text: 'ㅋㅋㅋㅋㅋㅋㅋ' },
//     // { id: '5', sender: 'bot', text: '지금부터 채팅 시작' }
//   ]);
//   const [input, setInput] = useState('');

//   const sendMessage = async () => {
//     if (input.trim()) {
//       const newMessage = { id: (messages.length + 1).toString(), sender: 'user', text: input };
//       setMessages([...messages, newMessage]);
//       setInput('');
//       try {
//         const res = await fetch("http://192.168.9.25:8000/generate_response", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ text: input }),
//         });
//         const data = await res.json();
//         console.log('Response from server:', data); // 서버 응답 로그
//         if (data && data.response) {
//           setMessages((prevMessages) => [
//             ...prevMessages,
//             { id: (prevMessages.length + 1).toString(), sender: 'bot', text: data.response },
//           ]);
//         } else {
//           console.error('No response field in data:', data);
//         }
//       } catch (error) {
//         console.error('Error while fetching response:', error);
//       }
//     }
//   };

//   const resetMessages = () => {
//     setMessages([{ id: '1', sender: 'bot', text: '안녕하세요! 어디가 불편하신가요?' }]);
//   };

//   const renderItem = ({ item }) => (
//     <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessageContainer : styles.botMessageContainer]}>
//       {item.sender === 'bot' && <Image source={require('../assets/images/bot.png')} style={styles.avatar} />}
//       <View style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>
//         <Text style={item.sender === 'user' ? styles.userText : styles.botText}>{item.text}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={messages}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         style={styles.chatContainer}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           value={input}
//           onChangeText={setInput}
//           placeholder="메시지를 입력해주세요"
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
//           <Text style={styles.sendButtonText}>보내기</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity style={styles.resetButton} onPress={resetMessages}>
//           <Text style={styles.resetButtonText}>초기화</Text>
//         </TouchableOpacity>
//     </View>
//   );
// };


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Chatting = () => {
  const [messages, setMessages] = useState([
    { id: '1', sender: 'bot', text: '안녕하세요! 어디가 불편하신가요?', animated: true },
    { id: '2', sender: 'bot', text: '으아아아아아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅁㄴㅇㅁㄴㅇㅁㅇㅁㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㅁㄴㅇㄴㅁㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅈㅁ덜호저ㅑㄷㄹ햐ㅕㅁㅈㄷㅎ려ㅑㅇㅁㅎㄴ러ㅏㅁㅈㄷ혀럄ㅇㅎ넗ㅁㅈ뎌ㅑㅀㅁㅇ널햗멿먀녀ㅣㄹ혀ㅑㄴㄷㅎ랴ㅕㅣㄴㄷㅎ랴ㅕㅁㄶ랴ㅕㄶ랴ㅕㄴㄷㅎ려ㅑㄴㅁㅎ댜ㅕ하기싫어 하기싫어어어어어어ㅓ어어엉ㅏㅏㅏㅏ', animated: true },
    { id: '3', sender: 'user', text: '으아아아아아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅁㄴㅇㅁㄴㅇㅁㅇㅁㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㅁㄴㅇㄴㅁㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅈㅁ덜호저ㅑㄷㄹ햐ㅕㅁㅈㄷㅎ려ㅑㅇㅁㅎㄴ러ㅏㅁㅈㄷ혀럄ㅇㅎ넗ㅁㅈ뎌ㅑㅀㅁㅇ널햗멿먀녀ㅣㄹ혀ㅑㄴㄷㅎ랴ㅕㅣㄴㄷㅎ랴ㅕㅁㄶ랴ㅕㄶ랴ㅕㄴㄷㅎ려ㅑㄴㅁㅎ댜ㅕ하기싫어 하기싫어어어어어어ㅓ어어엉ㅏㅏㅏㅏ', animated: true },

  ]);
  const [input, setInput] = useState('');
  const [displayMessages, setDisplayMessages] = useState([...messages]);


  const sendMessage = async () => {
    if (input.trim()) {
      const newMessage = { id: (messages.length + 1).toString(), sender: 'user', text: input, animated: false };
      setMessages([...messages, newMessage]);
      setInput('');
      try {
        const res = await fetch("http://192.168.9.25:8000/generate_response", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: input }),
        });
        const data = await res.json();
        if (data && data.response) {
          setMessages(prev => [...prev, { id: (prev.length + 1).toString(), sender: 'bot', text: data.response, animated: false }]);
        }
      } catch (error) {
        console.error('Error while fetching response:', error);
      }
    }
  };

  useEffect(() => {
    messages.forEach((msg) => {
      if (!msg.animated) {
        let currentText = '';
        msg.text.split('').forEach((char, index) => {
          setTimeout(() => {
            currentText += char;
            setDisplayMessages(prevDisplayMessages => {
              const index = prevDisplayMessages.findIndex(m => m.id === msg.id);
              if (index !== -1) {
                return prevDisplayMessages.map(m => m.id === msg.id ? {...m, text: currentText} : m);
              } else {
                return [...prevDisplayMessages, {...msg, text: currentText}];
              }
            });
          }, 50 * index);
        });
        setMessages(prevMessages =>
          prevMessages.map(m => (m.id === msg.id ? { ...m, animated: true } : m))
        );
      }
    });
  }, [messages]);

  

  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessageContainer : styles.botMessageContainer]}>
      {item.sender === 'bot' && <Image source={require('../assets/images/bot.png')} style={styles.avatar} />}
      <View style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>
        <Text style={item.sender === 'user' ? styles.userText : styles.botText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMessages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.chatContainer}
      />
      <TouchableOpacity style={styles.resetButton} onPress={() => {
        setMessages([{ id: '1', sender: 'bot', text: '안녕하세요! 어디가 불편하신가요?', animated: true }]);
        setDisplayMessages([{ id: '1', sender: 'bot', text: '안녕하세요! 어디가 불편하신가요?', animated: true }]);
      }}>
          <Text style={styles.resetButtonText}>초기화</Text>
        </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="메시지를 입력해주세요"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>보내기</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  chatContainer: {
    flex: 1,
    marginTop: 60,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 10,
    height: 80,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#028CFD', // 입력창 테두리 색 변경
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 14,
    marginRight: 10,
    fontFamily: 'NanumSquareR',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  userMessageContainer: {
    justifyContent: 'flex-end',
  },
  botMessageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  userMessage: {
    backgroundColor: '#A3D8FF', // 하늘색
    borderRadius: 20,
    padding: 18,
    marginVertical: 5,
    maxWidth: '70%',
    marginLeft: 10,
  },
  botMessage: {
    backgroundColor: '#EDEDED', // 회색
    borderRadius: 20,
    padding: 18,
    marginVertical: 5,
    maxWidth: '70%',
    marginRight: 10,
    marginLeft: 12,
  },
  userText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'NanumSquareEB',
  },
  botText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'NanumSquareEB',
  },
  sendButton: {
    backgroundColor: '#028CFD', // 보내기 버튼 색상 변경
    padding: 10,
    borderRadius: 10,
    height: 44,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'NanumSquareB',
  }
});

export default Chatting;
