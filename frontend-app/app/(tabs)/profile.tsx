
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const ProfileScreen = () => {
  const handleLogout = () => {
    // Navigate back to the login screen
    router.replace("/(auth)/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cá nhân</Text>

      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Phạm Thị Hồng</Text>
        <Text style={styles.address}>175 Tây Sơn - Đống Đa - Hà Nội</Text>
        <Text style={styles.phone}>458-419-7189</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Chỉnh sửa thông tin</Text>
        <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="pencil" size={24} color="#8B4513" />
        </TouchableOpacity>
        <Text style={styles.fieldLabel}>Email Address</Text>
        <Text style={styles.fieldLabel}>Password</Text>
        <Text style={styles.fieldLabel}>First Name</Text>
        <Text style={styles.fieldLabel}>Last Name</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Đăng Xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  address: {
    fontSize: 16,
    color: "gray",
  },
  phone: {
    fontSize: 16,
    color: "gray",
  },
  formContainer: {
    backgroundColor: "#f0eade",
    borderRadius: 20,
    padding: 30,
    width: "90%",
    position: "relative",
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8B4513",
    marginBottom: 20,
  },
  editIcon: {
      position: 'absolute',
      top: 30,
      right: 30,
  },
  fieldLabel: {
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 15
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: "#8B4513",
    paddingVertical: 15,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  logoutButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
