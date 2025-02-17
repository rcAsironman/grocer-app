// import { create } from 'zustand';

// export interface Product {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
//   image: string;
//   category: string;
// }

// export interface CartItem {
//   product: Product;
//   quantity: number;
// }

// interface StoreState {
//   selectedCategory: string;
//   cartItems: CartItem[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (productId: string) => void;
//   updateQuantity: (productId: string, quantity: number) => void;
//   setSelectedCategory: (category: string) => void;
//   clearCart: () => void;
// }

// export const useStore = create<StoreState>((set) => ({
//   selectedCategory: 'Fruits',
//   cartItems: [],
//   addToCart: (product) =>
//     set((state) => {
//       const existingItem = state.cartItems.find(
//         (item) => item.product.id === product.id
//       );

//       if (existingItem) {
//         return {
//           cartItems: state.cartItems.map((item) =>
//             item.product.id === product.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       }

//       return {
//         cartItems: [...state.cartItems, { product, quantity: 1 }],
//       };
//     }),
//   removeFromCart: (productId) =>
//     set((state) => ({
//       cartItems: state.cartItems.filter((item) => item.product.id !== productId),
//     })),
//   updateQuantity: (productId, quantity) =>
//     set((state) => ({
//       cartItems: state.cartItems.map((item) =>
//         item.product.id === productId ? { ...item, quantity } : item
//       ),
//     })),
//   setSelectedCategory: (category) =>
//     set(() => ({
//       selectedCategory: category,
//     })),
//   clearCart: () =>
//     set(() => ({
//       cartItems: [],
//     })),
// }));


import { create } from 'zustand';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreState {
  selectedCategory: string;
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  setSelectedCategory: (category: string) => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  selectedCategory: 'Fruits',
  cartItems: [],
  
  // Add product to cart
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        cartItems: [...state.cartItems, { product, quantity: 1 }],
      };
    }),

  // Remove product from cart by productId
  removeFromCart: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.product.id !== productId),
    })),

  // Update quantity of a product in the cart
  updateQuantity: (productId, quantity) =>
    set((state) => {
      // Remove item from cart if quantity is 0 or below
      if (quantity <= 0) {
        return {
          cartItems: state.cartItems.filter((item) => item.product.id !== productId),
        };
      }

      // Update the quantity of the item in the cart
      return {
        cartItems: state.cartItems.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        ),
      };
    }),

  // Set selected category for product filtering
  setSelectedCategory: (category) =>
    set(() => ({
      selectedCategory: category,
    })),

  // Clear all items from the cart
  clearCart: () =>
    set(() => ({
      cartItems: [],
    })),
}));
