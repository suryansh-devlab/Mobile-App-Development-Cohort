import { useState } from "react";
import { ScrollView, Text, View, Button, Switch } from "react-native";

export default function ScrollViewComponent() {
  const items = Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      contentContainerStyle={{
        padding: 16,
        alignItems: "center",
        marginTop: 20,
        marginBottom: 30,
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 15 }}>
        Scroll View Component
      </Text>
      {items.map((item) => (
        <View
          key={item}
          style={{
            backgroundColor: "white",
            padding: 16,
            borderRadius: 10,
            marginBottom: 10,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Text style={{ fontSize: 16 }}>{item}</Text>
        </View>
      ))}

      <Button
        title="Hello I am Button"
        color={"green"}
        onPress={() => alert("Hello JI")}
      />

      <Switch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
        trackColor={{ false: "red", true: "green" }}
        thumbColor={"blue"}
      />
    </ScrollView>
  );
}
