// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   TextInput,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { products } from '../data/products';
// import { useStore } from '../store/useStore';
// import ProductModal from './ProductModal';
// import type { Product } from '../store/useStore'; // Ensure Product type is imported

// const { width } = Dimensions.get('window');
// const COLUMN_COUNT = width < 768 ? 2 : 3;
// const ITEM_WIDTH = (width - 48) / COLUMN_COUNT;

// export default function ProductList() {
//   const { selectedCategory, addToCart, updateQuantity, cartItems } = useStore();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

//   const filteredProducts = products.filter(
//     (product) =>
//       product.category === selectedCategory &&
//       product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const isProductInCart = (productId: string) => {
//     const product = cartItems.find(item => item.product.id === productId);
//     return product ? product.quantity : 0;
//   };

//   const renderProduct = ({ item }: { item: Product }) => {
//     const quantityInCart = isProductInCart(item.id);

//     return (
//       <View style={styles.productItem}>
//         <Image source={{ uri: item.image }} style={styles.productImage} />
//         <View style={styles.productInfo}>
//           <Text style={styles.productName}>{item.name}</Text>
//           <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
//           <View style={styles.buttonContainer}>
//             {quantityInCart === 0 ? (
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => addToCart(item)}>
//                 <Ionicons name="cart" size={16} color="#fff" />
//                 <Text style={styles.buttonText}>Add</Text>
//               </TouchableOpacity>
//             ) : (
//               <View style={styles.quantityContainer}>
//                 <TouchableOpacity
//                   onPress={() => updateQuantity(item.id, quantityInCart - 1)}>
//                   <Ionicons name="remove-circle" size={20} color="#4361ee" />
//                 </TouchableOpacity>
//                 <Text style={styles.quantityText}>{quantityInCart}</Text>
//                 <TouchableOpacity
//                   onPress={() => updateQuantity(item.id, quantityInCart + 1)}>
//                   <Ionicons name="add-circle" size={20} color="#4361ee" />
//                 </TouchableOpacity>
//               </View>
//             )}
//             <TouchableOpacity
//               style={[styles.button, styles.viewButton]}
//               onPress={() => setSelectedProduct(item)}>
//               <Text style={[styles.buttonText, styles.viewButtonText]}>View</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.searchContainer}>
//         <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search products..."
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//       </View>
//       <FlatList
//         data={filteredProducts}
//         renderItem={renderProduct}
//         keyExtractor={(item) => item.id}
//         numColumns={COLUMN_COUNT}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//       />
//       <ProductModal
//         product={selectedProduct}
//         visible={!!selectedProduct}
//         onClose={() => setSelectedProduct(null)}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     margin: 16,
//     paddingHorizontal: 12,
//     borderRadius: 8,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     paddingVertical: 12,
//     fontSize: 16,
//   },
//   list: {
//     padding: 16,
//   },
//   productItem: {
//     width: ITEM_WIDTH,
//     marginBottom: 16,
//     marginHorizontal: 8,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     overflow: 'hidden',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   productImage: {
//     width: '100%',
//     height: ITEM_WIDTH,
//   },
//   productInfo: {
//     padding: 12,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 4,
//     color: '#1a1a1a',
//   },
//   productPrice: {
//     fontSize: 14,
//     color: '#4361ee',
//     fontWeight: '700',
//     marginBottom: 8,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
//   button: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#4361ee',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     gap: 4,
//   },
//   viewButton: {
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#4361ee',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   viewButtonText: {
//     color: '#4361ee',
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   quantityText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#4361ee',
//   },
// });


import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { products } from '../data/products';
import { useStore } from '../store/useStore';
import ProductModal from './ProductModal';
import type { Product } from '../store/useStore';

const { width } = Dimensions.get('window');
const COLUMN_COUNT = width < 768 ? 2 : 3;
const ITEM_WIDTH = (width - 48) / COLUMN_COUNT;

export default function ProductList() {
  const { selectedCategory, addToCart, updateQuantity, cartItems } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter(
    (product) => {
      // Check if the product matches the search query (search globally)
  const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());

  // If search query exists, ignore the selected category and just search globally
  if (searchQuery) {
    return matchesSearch;
  }

  // If no search query, filter based on selected category
  return selectedCategory === 'All' || product.category === selectedCategory;}
  );

  const isProductInCart = (productId: string) => {
    const product = cartItems.find(item => item.product.id === productId);
    return product ? product.quantity : 0;
  };

  const renderProduct = ({ item }: { item: Product }) => {
    const quantityInCart = isProductInCart(item.id);

    return (
      <View style={styles.productItem}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
          <View style={styles.buttonContainer}>
            {quantityInCart === 0 ? (
              <TouchableOpacity
                style={styles.button}
                onPress={() => addToCart(item)}>
                <Ionicons name="cart" size={16} color="#fff" />
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  onPress={() => updateQuantity(item.id, quantityInCart - 1)}>
                  <Ionicons name="remove-circle" size={20} color="#4361ee" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantityInCart}</Text>
                <TouchableOpacity
                  onPress={() => updateQuantity(item.id, quantityInCart + 1)}>
                  <Ionicons name="add-circle" size={20} color="#4361ee" />
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity
              style={[styles.button, styles.viewButton]}
              onPress={() => setSelectedProduct(item)}>
              <Text style={[styles.buttonText, styles.viewButtonText]}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Items</Text>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={COLUMN_COUNT}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
      <ProductModal
        product={selectedProduct}
        visible={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    color: '#1a1a1a',
    paddingLeft: 16,
    marginTop:20
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    margin: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  list: {
    padding: 16,
  },
  productItem: {
    width: ITEM_WIDTH,
    marginBottom: 16,
    marginHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: '100%',
    height: ITEM_WIDTH,
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#1a1a1a',
  },
  productPrice: {
    fontSize: 14,
    color: '#4361ee',
    fontWeight: '700',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4361ee',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    gap: 4,
  },
  viewButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#4361ee',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  viewButtonText: {
    color: '#4361ee',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4361ee',
  },
});
