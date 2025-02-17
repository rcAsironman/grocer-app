// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   Platform,
//   Alert,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons } from '@expo/vector-icons';
// import { useStore } from '../../store/useStore';

// export default function CartScreen() {
//   const { cartItems, removeFromCart, updateQuantity, clearCart } = useStore();
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   const total = cartItems.reduce(
//     (sum, item) => sum + item.product.price * item.quantity,
//     0
//   );

//   const handlePlaceOrder = () => {
//     if (cartItems.length === 0) {
//       Alert.alert('Cart Empty', 'Please add items to your cart before checking out.');
//       return;
//     }

//     setOrderPlaced(true);
//     clearCart();

//     setTimeout(() => {
//       setOrderPlaced(false);
//     }, 3000);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         <Text style={styles.title}>Shopping Cart</Text>
//         {orderPlaced ? (
//           <View style={styles.successContainer}>
//             <Ionicons name="checkmark-circle" size={64} color="#4BB543" />
//             <Text style={styles.successText}>Order Placed Successfully!</Text>
//             <Text style={styles.successSubtext}>
//               Thank you for your purchase. Your order is being processed.
//             </Text>
//           </View>
//         ) : (
//           <>
//             <ScrollView style={styles.cartList}>
//               {cartItems.map((item) => (
//                 <View key={item.product.id} style={styles.cartItem}>
//                   <Image
//                     source={{ uri: item.product.image }}
//                     style={styles.productImage}
//                   />
//                   <View style={styles.productInfo}>
//                     <Text style={styles.productName}>{item.product.name}</Text>
//                     <Text style={styles.productPrice}>
//                       ${item.product.price.toFixed(2)}
//                     </Text>
//                     <View style={styles.quantityContainer}>
//                       <TouchableOpacity
//                         style={styles.quantityButton}
//                         onPress={() =>
//                           updateQuantity(
//                             item.product.id,
//                             Math.max(0, item.quantity - 1)
//                           )
//                         }>
//                         <Ionicons name="remove" size={20} color="#4361ee" />
//                       </TouchableOpacity>
//                       <Text style={styles.quantity}>{item.quantity}</Text>
//                       <TouchableOpacity
//                         style={styles.quantityButton}
//                         onPress={() =>
//                           updateQuantity(item.product.id, item.quantity + 1)
//                         }>
//                         <Ionicons name="add" size={20} color="#4361ee" />
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                   <View style={styles.itemTotal}>
//                     <Text style={styles.itemTotalText}>
//                       ${(item.product.price * item.quantity).toFixed(2)}
//                     </Text>
//                     <TouchableOpacity
//                       onPress={() => removeFromCart(item.product.id)}
//                       style={styles.removeButton}>
//                       <Ionicons name="trash" size={20} color="#ff4444" />
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               ))}
//             </ScrollView>
//             <View style={styles.footer}>
//               <View style={styles.totalContainer}>
//                 <Text style={styles.totalLabel}>Total:</Text>
//                 <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
//               </View>
//               <TouchableOpacity
//                 style={styles.checkoutButton}
//                 onPress={handlePlaceOrder}>
//                 <Text style={styles.checkoutButtonText}>Place Order</Text>
//                 <Ionicons name="arrow-forward" size={20} color="#fff" />
//               </TouchableOpacity>
//             </View>
//           </>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   content: {
//     flex: 1,
//     ...Platform.select({
//       web: {
//         maxWidth: 1200,
//         alignSelf: 'center',
//         width: '100%',
//       },
//     }),
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     marginHorizontal: 16,
//     marginVertical: 20,
//     color: '#1a1a1a',
//   },
//   cartList: {
//     flex: 1,
//   },
//   cartItem: {
//     flexDirection: 'row',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   productImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//   },
//   productInfo: {
//     flex: 1,
//     marginLeft: 16,
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
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     alignSelf: 'flex-start',
//     borderRadius: 8,
//     padding: 4,
//   },
//   quantityButton: {
//     padding: 8,
//   },
//   quantity: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginHorizontal: 16,
//     color: '#1a1a1a',
//   },
//   itemTotal: {
//     alignItems: 'flex-end',
//     justifyContent: 'space-between',
//     paddingLeft: 16,
//   },
//   itemTotalText: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#1a1a1a',
//   },
//   removeButton: {
//     padding: 8,
//   },
//   footer: {
//     padding: 16,
//     borderTopWidth: 1,
//     borderTopColor: '#f0f0f0',
//   },
//   totalContainer: {
//     flexDirection: 'row',
//     justifyContent: ' space-between',
//     marginBottom: 16,
//   },
//   totalLabel: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#1a1a1a',
//   },
//   totalAmount: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#4361ee',
//   },
//   checkoutButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#4361ee',
//     paddingVertical: 16,
//     borderRadius: 8,
//     gap: 8,
//   },
//   checkoutButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   successContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   successText: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#4BB543',
//     marginTop: 16,
//     marginBottom: 8,
//   },
//   successSubtext: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//   },
// });

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useStore } from '../../store/useStore';

export default function CartScreen() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useStore();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      Alert.alert('Cart Empty', 'Please add items to your cart before checking out.');
      return;
    }

    setOrderPlaced(true);
    clearCart();

    setTimeout(() => {
      setOrderPlaced(false);
    }, 3000);
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId); // Remove the item from cart when quantity is 0 or less
    } else {
      updateQuantity(productId, newQuantity); // Update the quantity if greater than 0
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Shopping Cart</Text>
        {orderPlaced ? (
          <View style={styles.successContainer}>
            <Ionicons name="checkmark-circle" size={64} color="#4BB543" />
            <Text style={styles.successText}>Order Placed Successfully!</Text>
            <Text style={styles.successSubtext}>
              Thank you for your purchase. Your order is being processed.
            </Text>
          </View>
        ) : (
          <>
            <ScrollView style={styles.cartList}>
              {cartItems.map((item) => (
                <View key={item.product.id} style={styles.cartItem}>
                  <Image
                    source={{ uri: item.product.image }}
                    style={styles.productImage}
                  />
                  <View style={styles.productInfo}>
                    <Text style={styles.productName}>{item.product.name}</Text>
                    <Text style={styles.productPrice}>
                      ${item.product.price.toFixed(2)}
                    </Text>
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() =>
                          handleQuantityChange(
                            item.product.id,
                            Math.max(0, item.quantity - 1)
                          )
                        }>
                        <Ionicons name="remove" size={20} color="#4361ee" />
                      </TouchableOpacity>
                      <Text style={styles.quantity}>{item.quantity}</Text>
                      <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() =>
                          handleQuantityChange(item.product.id, item.quantity + 1)
                        }>
                        <Ionicons name="add" size={20} color="#4361ee" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.itemTotal}>
                    <Text style={styles.itemTotalText}>
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </Text>
                    <TouchableOpacity
                      onPress={() => removeFromCart(item.product.id)}
                      style={styles.removeButton}>
                      <Ionicons name="trash" size={20} color="#ff4444" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
            <View style={styles.footer}>
              <View style={styles.totalContainer}>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
              </View>
              <TouchableOpacity
                style={styles.checkoutButton}
                onPress={handlePlaceOrder}>
                <Text style={styles.checkoutButtonText}>Place Order</Text>
                <Ionicons name="arrow-forward" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  cartList: {
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#4361ee',
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    padding: 5,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  itemTotal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTotalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  removeButton: {
    padding: 5,
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4361ee',
  },
  checkoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#4361ee',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10,
  },
  successContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  successText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4BB543',
    marginTop: 10,
  },
  successSubtext: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
});
