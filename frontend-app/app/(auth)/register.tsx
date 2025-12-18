
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert, // Keep Alert for success message
} from "react-native";
import { useAuth } from "@/context/AuthContext";

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Error states
  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);


  const { onRegister } = useAuth();

  const clearErrors = () => {
    setFirstNameError(null);
    setLastNameError(null);
    setEmailError(null);
    setPasswordError(null);
    setConfirmPasswordError(null);
    setGeneralError(null);
  }

  // Clear errors on input change
  useEffect(() => { clearErrors() }, [firstName, lastName, email, password, confirmPassword]);


  const handleRegister = async () => {
    clearErrors();

    // --- Client-side validation ---
    let hasError = false;
    // Name checks
    if (!lastName) { setLastNameError("Họ không được để trống."); hasError = true; }
    if (!firstName) { setFirstNameError("Tên không được để trống."); hasError = true; }

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email không được để trống.");
      hasError = true;
    } else if (!emailRegex.test(email)) {
      setEmailError("Email không đúng định dạng.");
      hasError = true;
    }
    
    // Password complexity check
    if (!password) {
      setPasswordError("Mật khẩu không được để trống.");
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError("Mật khẩu phải có ít nhất 8 ký tự.");
      hasError = true;
    }

    // Password confirmation check
    if (password !== confirmPassword) {
      setConfirmPasswordError("Mật khẩu xác nhận không khớp.");
      hasError = true;
    }

    if (hasError) return;
    // --- End of client-side validation ---


    setLoading(true);
    const result = await onRegister(firstName, lastName, email, password, confirmPassword);
    setLoading(false);

    if (result && result.error) {
      if (result.errors) {
        if (result.errors.first_name) setFirstNameError(result.errors.first_name[0]);
        if (result.errors.last_name) setLastNameError(result.errors.last_name[0]);
        if (result.errors.email) setEmailError(result.errors.email[0]); // e.g., "The email has already been taken."
        if (result.errors.password) setPasswordError(result.errors.password[0]);
      } else {
        setGeneralError(result.msg)
      }
    } else {
      Alert.alert(
        "Thành công",
        "Tài khoản đã được tạo thành công! Vui lòng đăng nhập.",
        [
          {
            text: "OK",
            onPress: () => router.back(),
          },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#8B4513" />
        </View>
      )}
      <Text style={styles.titleText}>Đăng Ký</Text>

      <View style={[styles.inputContainer, lastNameError && styles.inputErrorBorder]}>
        <Ionicons
          name="person-outline"
          size={24}
          color="gray"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Họ"
          placeholderTextColor="#666"
          value={lastName}
          onChangeText={setLastName}
          autoCapitalize="words"
        />
      </View>
      {lastNameError && <Text style={styles.errorText}>{lastNameError}</Text>}

      <View style={[styles.inputContainer, firstNameError && styles.inputErrorBorder]}>
        <Ionicons
          name="person-outline"
          size={24}
          color="gray"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Tên"
          placeholderTextColor="#666"
          value={firstName}
          onChangeText={setFirstName}
          autoCapitalize="words"
        />
      </View>
      {firstNameError && <Text style={styles.errorText}>{firstNameError}</Text>}


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

      <View style={[styles.inputContainer, confirmPasswordError && styles.inputErrorBorder]}>
        <Ionicons
          name="lock-closed-outline"
          size={24}
          color="gray"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Xác nhận mật khẩu"
          placeholderTextColor="#666"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!isConfirmPasswordVisible}
        />
        <TouchableOpacity
          onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
        >
          <Ionicons
            name={isConfirmPasswordVisible ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      {confirmPasswordError && <Text style={styles.errorText}>{confirmPasswordError}</Text>}
      
      {generalError && <Text style={[styles.errorText, { alignSelf: 'center', marginTop: 10 }]}>{generalError}</Text>}

      <TouchableOpacity style={styles.createButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Tạo Tài Khoản</Text>
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
      titleText: {
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
      createButton: {
        backgroundColor: "#8B4513",
        paddingVertical: 15,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
        marginTop: 20,
      },
      buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      },
});

export default RegisterScreen;
