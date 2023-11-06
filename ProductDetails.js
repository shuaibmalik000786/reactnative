import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUri }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      {/* Add more product details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    color: 'green',
  },
});

export default ProductDetail;




