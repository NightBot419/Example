import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const PaymentSuccessScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        // source={require('@/assets/images/SuccesPay.PNG')} 
        source={{
          uri: "https://elements-resized.envatousercontent.com/elements-cover-images/d5df9be8-0235-478f-b9ef-360a73f9e708?w=2038&cf_fit=scale-down&q=85&format=auto&s=3d289dc9dcdd3eda7c4804fa65fdd1c4f02c3e0f32ca14a43ccef5172a67a425",
        }}
        style={styles.image}
      />
      <Text style={styles.text}>Thanh toán thành công!</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/')}>
        <Text style={styles.buttonText}>Quay lại trang chủ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#C6A586',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentSuccessScreen;