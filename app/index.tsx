import { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

export default function Index() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const submit = async (question:string) => {
    try {
      const res = await fetch("http://192.168.0.214:8000/generate_response", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: question }),
      });
      const data = await res.json();
      if (data) {
        setResponse(data.response);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        {response ? (
          <View style={{ marginTop: 20 }}>
            <Text>Response: {response}</Text>
          </View>
        ) : null}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "row",
        }}>
        <TextInput
          value={text}
          style={{
            width: "70%",
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginRight: 10,
          }}
          onChange={(e) => setText(e.nativeEvent.text)}
        />
        <Button title="Submit" onPress={() => submit(text)} />
      </View>
      
    </View>
  );
}
