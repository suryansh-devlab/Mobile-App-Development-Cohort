import {
  Text,
  KeyboardAvoidingView,
  Platform,
  View,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";

export default function KeyboardAvoiding() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ flex: 1, justifyContent: "flex-end", padding: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 24 }}>
          Login
        </Text>
        <TextInput
          placeholder="Email"
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
            padding: 14,
            marginBottom: 12,
            fontSize: 16,
          }}
        />
        <TextInput
          placeholder="Password"
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
            padding: 14,
            marginBottom: 12,
            fontSize: 16,
          }}
        />
        <Pressable
          style={{
            backgroundColor: "#007BFF",
            padding: 14,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Sign In</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
