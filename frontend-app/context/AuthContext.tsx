
import { router, useSegments } from "expo-router";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";

// =================================================================
// IMPORTANT: DEMO-ONLY AUTHENTICATION
// This file simulates user authentication for demo purposes.
// It uses a local JSON file instead of a real backend API.
// DO NOT USE THIS IN A PRODUCTION APPLICATION.
// =================================================================

import usersData from "../assets/data/users.json";

const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState(usersData);
  const [authState, setAuthState] = useState<{
    user: object | null;
    authenticated: boolean | null;
  }>({
    user: null,
    authenticated: false, // Default to not authenticated
  });
  const [loading, setLoading] = useState(false); // Kept for UI consistency
  const segments = useSegments();

  useEffect(() => {
    // This effect handles redirection based on auth state.
    const inAuthGroup = segments[0] === "(auth)";

    if (authState.authenticated && inAuthGroup) {
      router.replace("/(tabs)");
    } else if (!authState.authenticated && !inAuthGroup) {
      router.replace("/(auth)/login");
    }
  }, [authState.authenticated, segments]);


  const register = async (
    first_name: string,
    last_name: string,
    email: string,
    password: string,
  ) => {
    // 1. Check if email already exists
    const existingUser = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (existingUser) {
      return { error: true, errors: { email: ["Email đã được sử dụng."] } };
    }

    // 2. Create new user object
    const newUser = {
      id: (users.length + 2).toString(), // Create a new unique ID
      first_name,
      last_name,
      email,
      password, // In a real app, this should be hashed!
      address: "",
      phone_number: "",
      avatar: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb"
    };

    // 3. Add to the local "database"
    setUsers([...users, newUser]);

    // 4. Return success
    return { success: true };
  };

  const login = async (email, password) => {
    const user = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (user) {
      setAuthState({ user: user, authenticated: true });
      return { success: true };
    } else {
      return { error: true, msg: "Email hoặc mật khẩu không chính xác." };
    }
  };

  const logout = async () => {
    setAuthState({ user: null, authenticated: false });
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
