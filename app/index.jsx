// import { useState } from "react";
// import { Text, View, TextInput, Button } from "react-native";

// export default function Index() {
//   const [text, setText] = useState("");
//   const [response, setResponse] = useState("");

//   const submit = async (question:string) => {
//     try {
//       const res = await fetch("http://192.168.9.25:8000/generate_response", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ text: question }),
//       });
//       const data = await res.json();
//       if (data) {
//         setResponse(data.response);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <View>
//         {response ? (
//           <View style={{ marginTop: 20 }}>
//             <Text>Response: {response}</Text>
//           </View>
//         ) : null}
//       </View>
//       <View
//         style={{
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//           width: "100%",
//           flexDirection: "row",
//         }}>
//         <TextInput
//           value={text}
//           style={{
//             width: "70%",
//             height: 40,
//             borderColor: "gray",
//             borderWidth: 1,
//             marginRight: 10,
//           }}
//           onChange={(e) => setText(e.nativeEvent.text)}
//         />
//         <Button title="Submit" onPress={() => submit(text)} />
//       </View>
      
//     </View>
//   );
// }


// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// export default function Index() {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.header}>어디가 아픈거지?</Text>
//       <Text style={styles.subHeader}>어느 병원에 가야할까?</Text>
//       <Text style={styles.mainText}>AI 의사에게 먼저</Text>
//       <Text style={styles.mainText}>진료를 받아보세요!</Text>
//       <Image source={require('../assets/images/bot.png')} style={styles.image} />
//       <Text style={styles.footerText}>
//         증상을 말하면, 간단한 진료와 방문하셔야할 병원을 안내해드려요!
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 5,
//     margin: 20
//   },
//   header: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5
//   },
//   subHeader: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 15
//   },
//   mainText: {
//     fontSize: 16,
//     marginBottom: 5
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginVertical: 15
//   },
//   footerText: {
//     fontSize: 14,
//     color: '#333',
//     textAlign: 'center'
//   }
// });

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/images/logo.png';
import { useFonts } from "expo-font";

export default function Index() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    NanumSquareEB: require("../assets/fonts/NanumSquareEB.otf"),
    NanumSquareB: require("../assets/fonts/NanumSquareB.otf"),
    NanumSquareR: require("../assets/fonts/NanumSquareR.otf"),
  });
  
  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>의사소통</Text> */}
      <View style={styles.card}>
        <Text style={styles.header}>어디가 아픈거지?</Text>
        <Text style={styles.subHeader}>어느 병원에 가야할까?</Text>
        {/* <Image source={Logo} style={{ width: 140, height: 140, marginTop: 70, marginBottom: 20 }} /> */}
        <Image source={require('../assets/images/logo_ani.gif')} style={{ width: 140, height: 140,  marginTop: 10, marginBottom: 8 }} />
        <Text style={styles.mainText}>AI 의사에게 먼저</Text>
        <Text style={styles.mainText}>진료를 받아보세요!</Text>
        <Text style={styles.footerText}>
          증상을 말하면, 간단한 진료와 방문하셔야할 병원을 안내해드려요!
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chatting')}>
          <Text style={styles.buttonText}>진단 받아보기 →</Text>
        </TouchableOpacity>
      </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 26,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    margin: 20,
    height: 600,
  },
  video: {
    width: 300,
    height: 300,
  },
  header: {
    fontSize: 24,
    fontFamily: 'NanumSquareEB',
    marginBottom: 0,
    marginTop: 60
  },
  subHeader: {
    fontSize: 24,
    fontFamily: 'NanumSquareEB',
    marginBottom: 10
  },
  mainText: {
    fontSize: 18,
    fontFamily: 'NanumSquareB',
    marginBottom: 1
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 15
  },
  footerText: {
    fontSize: 14,
    color: '#028CFD',
    fontFamily: 'NanumSquareB',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  button: {
    borderWidth: 3,
    backgroundColor: '#f00A0E9',
    borderColor: '#00A0E9',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'NanumSquareB',
  },
});
