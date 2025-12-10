
import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import menuData from "@/assets/data/menu.json";
import { useCart } from "@/context/CartContext";

// --- Data Processing (Moved outside component) ---
const allItems = menuData.flatMap((category) =>
  category.items.map((item) => ({ ...item, category: category.category }))
);

const itemsWithImages = allItems.map((item) => {
  let image = "https://images.unsplash.com/photo-1541167760496-1628856ab772"; // Default coffee
  if (item.category === "Tea") {
    image = "https://images.unsplash.com/photo-1597318181314-9b6dd321d3b8";
  } else if (item.category === "Juice") {
    image = "https://images.unsplash.com/photo-1600271886742-f049cd451bba";
  } else if (item.category === "Soda") {
    image = "https://images.unsplash.com/photo-1581006852262-5b985CF79543";
  }
  return { ...item, image };
});


const ListHeader = () => (
  <>
    {/* Header */}
    <View style={styles.header}>
      <View>
        <Text style={styles.locationLabel}>Location</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>Bilzen, Tanjungbalai</Text>
          <Ionicons name="chevron-down" size={20} color="white" />
        </View>
      </View>
    </View>

    {/* Search and Filter */}
    <View style={styles.searchContainer}>
      <View style={styles.searchInput}>
        <Ionicons name="search" size={24} color="gray" />
        <TextInput
          placeholder="Search coffee"
          placeholderTextColor="gray"
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity style={styles.filterButton}>
        <Ionicons name="options-outline" size={28} color="white" />
      </TouchableOpacity>
    </View>

    {/* Promo Banner */}
    <View style={styles.promoBanner}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0",
        }}
        style={styles.promoImage}
      />
      <View style={styles.promoTextContainer}>
        <Text style={styles.promoTag}>Promo</Text>
        <Text style={styles.promoTitle}>Buy one get one FREE</Text>
      </View>
    </View>
  </>
);

// --- Main Component ---
const HomeScreen = () => {
    const { addToCart } = useCart();

    const handleAddToCart = (item) => {
        addToCart(item);
        Alert.alert("Added to cart", `${item.name} has been added to your cart.`);
    }

    const renderItem = useCallback(({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.cardImage} />
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.8</Text>
          </View>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardSubtitle}>{item.category}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              {(item.price / 1000).toFixed(3)}
            </Text>
            <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart(item)}>
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      ), [addToCart]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <FlatList
        style={styles.container}
        data={itemsWithImages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
      />
    </>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1c1c1c",
    },
    header: {
      paddingTop: 50,
      paddingHorizontal: 20,
      paddingBottom: 10,
    },
    locationLabel: {
      color: "#aaa",
      fontSize: 14,
    },
    locationContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    locationText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      marginRight: 5,
    },
    searchContainer: {
      flexDirection: "row",
      paddingHorizontal: 20,
      marginBottom: 20,
      alignItems: "center",
    },
    searchInput: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "#333",
      borderRadius: 10,
      padding: 10,
      alignItems: "center",
    },
    textInput: {
      marginLeft: 10,
      color: "white",
      flex: 1,
      fontSize: 16
    },
    filterButton: {
      marginLeft: 15,
      backgroundColor: "#8B4513",
      padding: 10,
      borderRadius: 10,
    },
    promoBanner: {
      marginHorizontal: 20,
      borderRadius: 15,
      overflow: "hidden",
      marginBottom: 20,
      height: 150,
      justifyContent: 'center'
    },
    promoImage: {
      ...StyleSheet.absoluteFillObject,
      width: "100%",
      height: "100%",
    },
    promoTextContainer: {
        paddingVertical: 20,
        paddingLeft: 20,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    promoTag: {
      backgroundColor: '#d9534f',
      color: 'white',
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 5,
      fontSize: 12,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      marginBottom: 8,
    },
    promoTitle: {
      color: "white",
      fontSize: 28,
      fontWeight: "bold",
      maxWidth: '60%'
    },
    grid: {
      paddingHorizontal: 10,
    },
    row: {
      justifyContent: "space-between",
    },
    card: {
      flex: 1,
      backgroundColor: "#333",
      borderRadius: 15,
      padding: 10,
      margin: 10,
      maxWidth: "45%",
    },
    cardImage: {
      width: "100%",
      height: 100,
      borderRadius: 10,
      marginBottom: 10,
    },
    ratingContainer: {
      position: 'absolute',
      top: 15,
      left: 15,
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: 5,
      paddingHorizontal: 5,
      paddingVertical: 2,
      flexDirection: 'row',
      alignItems: 'center'
    },
    ratingText: {
        color: 'white',
        marginLeft: 4,
        fontSize: 12
    },
    cardTitle: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
    cardSubtitle: {
      color: "#aaa",
      fontSize: 14,
      marginBottom: 10,
    },
    priceContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    priceText: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
    },
    addButton: {
      backgroundColor: "#8B4513",
      width: 32,
      height: 32,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  
  export default HomeScreen;
  
