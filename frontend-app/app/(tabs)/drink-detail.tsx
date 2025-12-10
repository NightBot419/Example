import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import menuData from '@/assets/data/menu.json';
import { useCart } from '@/context/CartContext';
import { Alert } from 'react-native';

const allItems = menuData.flatMap((category) =>
  category.items.map((item) => ({ ...item, category: category.category }))
);

const DrinkDetailScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');

  const item = allItems.find(i => i.id === id);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Item not found</Text>
      </View>
    );
  }
  const handleAddToCart = () => {
    addToCart(item);
    Alert.alert("Added to cart", `${item.name} has been added to your cart.`);
  }

  const handleBuyNow = () => {
    addToCart(item);
    router.push('/(tabs)/cart');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sản phẩm</Text>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Image source={{ uri: "https://images.unsplash.com/photo-1541167760496-1628856ab772" }} style={styles.image} />
        
        <View style={styles.detailsContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemSubtitle}>Ice/Hot</Text>
          
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={20} color="#FFD700" />
            <Text style={styles.ratingText}>4.8 <Text style={styles.reviews}>(230)</Text></Text>
          </View>

          <Text style={styles.descriptionTitle}>Mô tả</Text>
          <Text style={styles.descriptionText}>
            Cappuccino là một loại đồ uống có dung tích khoảng 150 ml (5 oz), gồm 25 ml cà phê espresso và 85 ml sữa tươi... 
            <Text style={styles.readMore}>Đọc thêm</Text>
          </Text>

          <Text style={styles.sizeTitle}>Size</Text>
          <View style={styles.sizeSelector}>
            {['S', 'M', 'L'].map(size => (
              <TouchableOpacity 
                key={size} 
                style={[styles.sizeButton, selectedSize === size && styles.sizeButtonSelected]}
                onPress={() => setSelectedSize(size)}
              >
                <Text style={[styles.sizeText, selectedSize === size && styles.sizeTextSelected]}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.priceText}>{(item.price).toLocaleString('en-US')}đ</Text>
        </View>
        <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
            <Ionicons name="cart-outline" size={24} color="#8B4513" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
          <Text style={styles.buyButtonText}>Mua</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    itemName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    itemSubtitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    ratingText: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    reviews: {
        color: 'gray',
        fontWeight: 'normal',
    },
    descriptionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    descriptionText: {
        color: 'gray',
        lineHeight: 22,
    },
    readMore: {
        color: '#8B4513',
        fontWeight: 'bold',
    },
    sizeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    sizeSelector: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    sizeButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    sizeButtonSelected: {
        backgroundColor: '#f0eade',
        borderColor: '#8B4513',
    },
    sizeText: {
        fontSize: 16,
    },
    sizeTextSelected: {
        color: '#8B4513',
        fontWeight: 'bold'
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderTopWidth: 1,
        borderColor: '#f0f0f0',
        backgroundColor: '#fff',
    },
    priceLabel: {
        color: 'gray',
    },
    priceText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#8B4513'
    },
    cartButton: {
        borderWidth: 1,
        borderColor: '#8B4513',
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 15,
    },
    buyButton: {
        flex: 1,
        backgroundColor: '#8B4513',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
    },
    buyButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default DrinkDetailScreen;