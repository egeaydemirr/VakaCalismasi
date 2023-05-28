import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
};

export default function ProductsScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  //renderProduct'a prop olarak verilen item products'taki her bir ürünü temsil ediyor.(product)
  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity
      onPress={() => openProductModal(item)}
      style={styles.productButton}>
      <Image
        source={{ uri: item.images[0] }}
        style={styles.productImage}
        resizeMode="contain"
      />
      <Text style={styles.productTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProductsScreen</Text>
      {isLoading && (
        <View style={styles.spinner}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}

      <FlatList
        data={products}
        renderItem={renderProduct} //data dizisindeki her öğe için çağrılır ve ilgili ürün öğesini render etmek için kullanılır.
        keyExtractor={item => item.id.toString()}
      />

      <Modal visible={selectedProduct !== null} animationType="slide">
        <View style={styles.productModal}>
          {selectedProduct && (
            <>
              <Image
                source={{ uri: selectedProduct.images[0] }}
                style={styles.selectedImage}
                resizeMode="contain"
              />
              <Text style={styles.selectedProductTitle}>
                {selectedProduct.title}
              </Text>
              <Text style={styles.productDescription}>
                {selectedProduct.description}
              </Text>

              <Text style={styles.productPrice}>${selectedProduct.price}</Text>
            </>
          )}
          <TouchableOpacity
            onPress={closeProductModal}
            style={styles.closeButton}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    padding: 16,
  },
  productModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  selectedImage: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  productButton: {
    marginBottom: 16,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedProductTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  closeButton: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#f5425d',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
