import { useState } from "react";
import { View, Text, Image, TextInput, Pressable } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  return (
    <View>
      {/* ================= TEXT COMPONENT ================= */}

      {/* Basic Text */}
      <Text>Chai Aur Code!</Text>

      {/*
        numberOfLines: Limits the text to a fixed number of lines
      */}
      <Text numberOfLines={2}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus alias
        mollitia?
      </Text>

      {/* ================= IMAGE COMPONENT ================= */}

      {/*
        Remote Image:
        - uri is used for internet/network images
        - width & height are required
      */}
      <Image
        source={{
          uri: "https://imgs.search.brave.com/XYN2-LMs0FxR9UppwyHarX5882-dIW7eJTJ8c_rLscU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvbW9iaWxl/LWFwcC1kZXZlbG9w/bWVudC1pbGx1c3Ry/YXRpb24tc3ZnLWRv/d25sb2FkLXBuZy03/MzE2MjIyLnBuZw",
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />

      {/*
        Local Image:
        - require() is used
        - no uri needed
      */}
      <Image
        source={require("@/assets/images/tabIcons/explore.png")}
        style={{
          width: 80,
          height: 80,
        }}
        /*
          blurRadius: Blurs the image
        */
        blurRadius={2}
      />

      {/* ================= TEXT INPUT ================= */}

      <TextInput
        placeholder="Enter Your Name"
        /*
          value: Current state value
        */
        value={name}
        /*
          onChangeText: Updates state whenever user types
        */
        onChangeText={setName}
        placeholderTextColor="blue"
        style={{
          borderWidth: 1,
          borderColor: "black",
          marginTop: 10,
          fontSize: 20,
        }}
      />

      {/* ================= PRESSABLE COMPONENT ================= */}

      <Pressable
        /*
          style callback:
          Gives access to pressed state
        */
        style={({ pressed }) => ({
          backgroundColor: pressed ? "blue" : "red",
          marginTop: 10,
          padding: 10,
        })}
        /*
          onPress: Runs when button is clicked
        */
        onPress={() => alert("Hello!")}
      >
        {/*
          Conditional Rendering
        */}
        {({ pressed }) =>
          pressed ? <Text>Pressing...</Text> : <Text>Press</Text>
        }
      </Pressable>
    </View>
  );
}
