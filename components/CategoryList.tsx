// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';
// import { categories } from '../data/categories';
// import { useStore } from '../store/useStore';

// const { width } = Dimensions.get('window');
// const ITEM_WIDTH = width < 768 ? width * 0.2 : 100;

// export default function CategoryList() {
//   const { selectedCategory, setSelectedCategory } = useStore();

//   return (
//     <ScrollView
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       style={styles.container}
//       contentContainerStyle={styles.contentContainer}>
//       {categories.map((category) => (
//         <TouchableOpacity
//           key={category.id}
//           onPress={() => setSelectedCategory(category.name)}
//           style={[
//             styles.categoryItem,
//             selectedCategory === category.name && styles.selectedCategory,
//           ]}>
//           <View style={styles.imageContainer}>
//             <Image source={{ uri: category.image }} style={styles.image} />
//           </View>
//           <Text style={styles.categoryName}>{category.name}</Text>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#f8f9fa',
//     maxHeight : 150,
//   },
//   contentContainer: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   categoryItem: {
//     alignItems: 'center',
//     marginRight: 16,
//     opacity: 0.7,
//   },
//   selectedCategory: {
//     opacity: 1,
//   },
//   imageContainer: {
//     width: ITEM_WIDTH,
//     height: ITEM_WIDTH,
//     borderRadius: ITEM_WIDTH / 2,
//     overflow: 'hidden',
//     backgroundColor: '#fff',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//   },
//   categoryName: {
//     marginTop: 4,
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#1a1a1a',
//     marginBottom:4,
//   },
// });

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { categories } from '../data/categories';
import { useStore } from '../store/useStore';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width < 768 ? width * 0.2 : 100;

export default function CategoryList() {
  const { selectedCategory, setSelectedCategory } = useStore();

  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.heading}>Category</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            onPress={() => setSelectedCategory(category.name)}
            style={[
              styles.categoryItem,
              selectedCategory === category.name && styles.selectedCategory,
            ]}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: category.image }} style={styles.image} />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    marginVertical: 0,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    color: '#1a1a1a',
    paddingLeft: 16,
    marginTop : 0,
  },
  container: {
    backgroundColor: '#f8f9fa',
    maxHeight: 150,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 16,
    opacity: 0.7,
  },
  selectedCategory: {
    opacity: 1,
  },
  imageContainer: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    borderRadius: ITEM_WIDTH / 2,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  categoryName: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
});
