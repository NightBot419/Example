
import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "@/context/CartContext";
import { useRouter } from "expo-router";

const CartScreen = () => {
  const { items, increaseQuantity, decreaseQuantity } = useCart();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const router = useRouter();

  const handleSelectItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const isAllSelected = items.length > 0 && selectedItems.length === items.length;

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((item) => item.id));
    }
  };

  const totalPrice = useMemo(() => {
    return items
      .filter((item) => selectedItems.includes(item.id))
      .reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items, selectedItems]);

  const handleBuy = () => {
    router.push('/(tabs)/payment');
  };


  const renderItem = ({ item }) => {
    const isSelected = selectedItems.includes(item.id);
    return (
        <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => handleSelectItem(item.id)} style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
            {isSelected && <Ionicons name="checkmark" size={18} color="white" />}
        </TouchableOpacity>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemSubtitle}>
                {(item.price).toLocaleString('en-US')}đ
            </Text>
        </View>
        <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
            <Ionicons name="remove-circle-outline" size={28} color="gray" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
            <Ionicons name="add-circle" size={28} color="#8B4513" />
            </TouchableOpacity>
        </View>
        </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Giỏ hàng</Text>
      {items.length === 0 ? (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Your cart is empty.</Text>
        </View>
      ) : (
        <>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
            <View style={styles.footer}>
                <TouchableOpacity onPress={handleSelectAll} style={[styles.checkbox, isAllSelected && styles.checkboxSelected]}>
                    {isAllSelected && <Ionicons name="checkmark" size={18} color="white" />}
                </TouchableOpacity>
                <Text style={styles.selectAllText}>Chọn tất cả</Text>
                <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
                    <Text style={styles.buyButtonText}>
                        {totalPrice > 0 ? `Mua (${(totalPrice).toLocaleString('en-US')}đ)` : 'Mua'}
                    </Text>
                </TouchableOpacity>
            </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyText: {
      fontSize: 18,
      color: 'gray'
  },
  list: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkboxSelected: {
      backgroundColor: '#8B4513',
      borderColor: '#8B4513'
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemSubtitle: {
    fontSize: 16,
    color: "#8B4513",
    fontWeight: '600'
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#f0f0f0",
  },
  selectAllText: {
    flex: 1,
    fontSize: 16,
  },
  buyButton: {
    backgroundColor: "#8B4513",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buyButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CartScreen;
