
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { useAuth } from "@/context/AuthContext";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const { onLogin } = useAuth();

  const clearErrors = () => {
    setEmailError(null);
    setPasswordError(null);
    setGeneralError(null);
  };

  useEffect(() => {
    clearErrors();
  }, [email, password]);

  const handleLogin = async () => {
    clearErrors();

    setLoading(true);
    const result = await onLogin(email, password);
    setLoading(false);

    if (result && result.error) {
      if (result.errors) {
        if (result.errors.email) setEmailError(result.errors.email[0]);
        if (result.errors.password) setPasswordError(result.errors.password[0]);
      } else {
        setGeneralError(result.msg);
      }
    } else {
      // The router redirection is handled by the AuthProvider
    }
  };

  const handleGoToRegister = () => {
    router.push("/(auth)/register");
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#8B4513" />
        </View>
      )}
      <Text style={styles.welcomeText}>Welcome back!</Text>

      <View style={[styles.inputContainer, emailError && styles.inputErrorBorder]}>
        <Ionicons
          name="mail-outline"
          size={24}
          color="gray"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      {emailError && <Text style={styles.errorText}>{emailError}</Text>}

      <View style={[styles.inputContainer, passwordError && styles.inputErrorBorder]}>
        <Ionicons
          name="lock-closed-outline"
          size={24}
          color="gray"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="#666"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Ionicons
            name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

      {generalError && <Text style={[styles.errorText, { alignSelf: 'center', marginBottom: 10 }]}>{generalError}</Text>}

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng Nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={handleGoToRegister}
      >
        <Text style={styles.buttonText}>Đăng Ký</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>Hoặc</Text>
        <View style={styles.orLine} />
      </View>

      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png",
          }}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Đăng nhập với Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
          }}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Đăng nhập với Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#8B4513",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10, // Adjusted for error message spacing
    width: "100%",
    elevation: 2,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333', // Ensure input text is visible
  },
  inputErrorBorder: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
    marginTop: -5,
  },
  loginButton: {
    backgroundColor: "#8B4513",
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 10, // Adjusted due to error message
  },
  registerButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
    color: "gray",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    marginBottom: 15,
    elevation: 2,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LoginScreen;
