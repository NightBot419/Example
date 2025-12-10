import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useCart } from '@/context/CartContext';
import clientData from '@/assets/data/client.json';

const PaymentScreen = () => {
  const router = useRouter();
  const { items, increaseQuantity, decreaseQuantity, clearCart } = useCart();
  const client = clientData[0]; // Using the first client for now
  const shippingFee = 10000; // Example shipping fee

  const totalPrice = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const total = totalPrice + shippingFee;

  const handleCheckout = () => {
    clearCart();
    router.push('/(tabs)/payment-success');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Thanh toán</Text>
        <View style={{ width: 24 }} />
      </View>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Khách hàng</Text>
          <View style={styles.customerInfo}>
            <Text style={styles.customerName}>{client.name}</Text>
            <Text style={styles.customerAddress}>{client.address}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Ionicons name="create-outline" size={16} color="black" />
                <Text style={styles.buttonText}>Edit Address</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Ionicons name="document-text-outline" size={16} color="black" />
                <Text style={styles.buttonText}>Add Note</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          {items.map(item => (
            <View key={item.id} style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemSubtitle}>Deep Foam</Text>
              </View>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                  <Ionicons name="remove-circle-outline" size={24} color="gray" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                  <Ionicons name="add-circle" size={24} color="#8B4513" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.discountContainer}>
            <Ionicons name="pricetag-outline" size={20} color="#8B4513" />
            <Text style={styles.discountText}>Mã giảm giá</Text>
            <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Chi tiết thanh toán</Text>
          <View style={styles.paymentDetails}>
            <View style={styles.detailRow}>
              <Text>Giá</Text>
              <Text>{totalPrice.toLocaleString('en-US')}đ</Text>
            </View>
            <View style={styles.detailRow}>
              <Text>Phí vận chuyển</Text>
              <Text>{shippingFee.toLocaleString('en-US')}đ</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.totalText}>Tổng</Text>
              <Text style={styles.totalText}>{total.toLocaleString('en-US')}đ</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.paymentMethodContainer}>
            <Ionicons name="wallet-outline" size={20} color="#8B4513" />
            <Text style={styles.paymentMethodText}>Ví thành viên</Text>
            <Ionicons name="chevron-down" size={20} color="gray" />
        </TouchableOpacity>

      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    section: {
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    customerInfo: {},
    customerName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    customerAddress: {
        color: 'gray',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    buttonText: {
        marginLeft: 5,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    itemImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    itemDetails: {
        flex: 1,
        marginLeft: 10,
    },
    itemName: {
        fontWeight: 'bold',
    },
    itemSubtitle: {
        color: 'gray',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityText: {
        marginHorizontal: 10,
        fontSize: 16,
    },
    discountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    discountText: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16
    },
    paymentDetails: {},
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    totalText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    paymentMethodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'space-between'
    },
    paymentMethodText: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16
    },
    footer: {
        padding: 20,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#f0f0f0',
    },
    checkoutButton: {
        backgroundColor: '#8B4513',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PaymentScreen;