// 채팅 페이지 
// // Chatting.js
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

// const Chatting = () => {
//   const [messages, setMessages] = useState([
//     { id: '1', sender: 'bot', text: '오... 제가 무슨 말을 하려는지 이해하지 못해요. 죄송해요..!' },
//     { id: '2', sender: 'user', text: '연봉이 궁금해' },
//     { id: '3', sender: 'bot', text: '안녕하세요. 반가워요!' },
//     { id: '4', sender: 'user', text: 'ㄱㅇㅇㅎㅎ' },
//     { id: '5', sender: 'bot', text: '게임을 좋아하지만, 어떻게 해야 하는지 모르겠어요!' }
//   ]);
//   const [input, setInput] = useState('');

//   const sendMessage = () => {
//     if (input.trim()) {
//       setMessages([...messages, { id: (messages.length + 1).toString(), sender: 'user', text: input }]);
//       setInput('');
//     }
//   };

//   const renderItem = ({ item }) => (
//     <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessageContainer : styles.botMessageContainer]}>
//       {item.sender === 'bot' && <Image source={require('../../assets/images/bot.png')} style={styles.avatar} />}
//       <View style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>
//         <Text style={item.sender === 'user' ? styles.userText : styles.botText}>{item.text}</Text>
//       </View>
//       {/* 챗봇 이미지 제거 */}
//       {/* {item.sender === 'user' && <Image source={require('../../assets/images/user.png')} style={styles.avatar} />} */}
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
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#f5f5f5'
//   },
//   chatContainer: {
//     flex: 1,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//     padding: 5
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderColor: '#028CFD', // 입력창 테두리 색 변경
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginRight: 10
//   },
//   messageContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   userMessageContainer: {
//     justifyContent: 'flex-end',
//   },
//   botMessageContainer: {
//     justifyContent: 'flex-start',
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   userMessage: {
//     backgroundColor: '#A3D8FF', // 하늘색
//     borderRadius: 20,
//     padding: 10,
//     marginVertical: 5,
//     maxWidth: '70%',
//     marginLeft: 10,
//   },
//   botMessage: {
//     backgroundColor: '#EDEDED', // 회색
//     borderRadius: 20,
//     padding: 10,
//     marginVertical: 5,
//     maxWidth: '70%',
//     marginRight: 10,
//   },
//   userText: {
//     color: '#000',
//   },
//   botText: {
//     color: '#000',
//   },
//   sendButton: {
//     backgroundColor: '#028CFD', // 보내기 버튼 색상 변경
//     padding: 10,
//     borderRadius: 10,
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   }
// });

// export default Chatting;

import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Chatting = () => {
  const [messages, setMessages] = useState([
    { id: '1', sender: 'bot', text: '안녕하세요! 어디가 불편하신가요?' },
    // { id: '1', sender: 'bot', text: '헬로 챗봇 월드' },
    { id: '2', sender: 'user', text: '간이 아파' },
    // { id: '3', sender: 'bot', text: '우루사' },
    // { id: '4', sender: 'user', text: 'ㅋㅋㅋㅋㅋㅋㅋ' },
    // { id: '5', sender: 'bot', text: '지금부터 채팅 시작' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim()) {
      const newMessage = { id: (messages.length + 1).toString(), sender: 'user', text: input };
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
        console.log('Response from server:', data); // 서버 응답 로그
        if (data && data.response) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { id: (prevMessages.length + 1).toString(), sender: 'bot', text: data.response },
          ]);
        } else {
          console.error('No response field in data:', data);
        }
      } catch (error) {
        console.error('Error while fetching response:', error);
      }
    }
  };

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
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.chatContainer}
      />
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
    marginTop: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 8
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#028CFD', // 입력창 테두리 색 변경
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
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
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userMessage: {
    backgroundColor: '#A3D8FF', // 하늘색
    borderRadius: 20,
    padding: 14,
    marginVertical: 5,
    maxWidth: '70%',
    marginLeft: 10,
  },
  botMessage: {
    backgroundColor: '#EDEDED', // 회색
    borderRadius: 20,
    padding: 14,
    marginVertical: 5,
    maxWidth: '70%',
    marginRight: 10,
    marginLeft: 12,
  },
  userText: {
    color: '#000',
    fontFamily: 'NanumSquareB',
  },
  botText: {
    color: '#000',
    fontFamily: 'NanumSquareB',
  },
  sendButton: {
    backgroundColor: '#028CFD', // 보내기 버튼 색상 변경
    padding: 10,
    borderRadius: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontFamily: 'NanumSquareB',
  }
});

export default Chatting;
