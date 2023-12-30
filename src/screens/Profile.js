import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

const Profile = ({ Ach nauval azizi, image, THE POWER OF DOA }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={image} />
        <Text style={styles.profileName}>{ach nauval azizi}</Text>
        <Text style={styles.profileBio}>{THE POWER OF DOA}</Text>
      </View>
    </View>
  );
};

const Profile = ({ Abd haris, image, DOA IBU }) => {
    return (
      <View style={styles.container}>
        <Image style={styles.profileImage} source={image} />
          <Text style={styles.profileName}>{Abd haris}</Text>
          <Text style={styles.profileBio}>{DOA IBU}</Text>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileBio: {
    fontSize: 16,
  },
});

export default Profile;