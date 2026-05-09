import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const USERS = [
  { id: "1", name: "Alice", role: "Designer" },
  { id: "2", name: "Joe", role: "Developer" },
  { id: "3", name: "Harry", role: "Manager" },
  { id: "4", name: "John", role: "Developer" },
  { id: "5", name: "Max", role: "Designer" },
];

const FlatListComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FlatList Component</Text>

      <FlatList
        data={USERS}
        /*
          keyExtractor:
          Extracts unique key for each item
        */
        keyExtractor={(item) => item.id}
        /*
          renderItem:
          Defines how each item looks
        */
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.role}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FlatListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: "center",
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
