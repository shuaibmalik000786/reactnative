






import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const productDataLeft = [
  { id: '1', name: 'IPAD', price: '', imageUri: 'https://s3.amazonaws.com/iwm-ebay/images/variations/iPad+Pro+12.9+(3rd+Gen.).jpg' },
  { id: '2', name: 'laptop', price: '', imageUri: 'https://i5.walmartimages.com/asr/35b47efa-88ba-46ab-9faa-71096e67aed7.a7275eab204a8d8dc3d7949f0dbe74cc.jpeg' },
  { id: '3', name: 'Mobile', price: '', imageUri:'https://www.todayscloseout.com/v/vspfiles/photos/LG-P970-3.jpg'},
  { id: '4', name: 'head set', price: '', imageUri:'https://i5.walmartimages.com/asr/3720c9d6-7af2-4433-b03c-9b2d859e2eef.ee8ddfd4125ad90f3c4ee61c3838f77f.jpeg'},
   // Add more product items as needed
];

const productDataRight = [
  { id: '3', name: 'APPLE iPad Pro 2021 (3rd Generation) 16 GB RAM 1 TB ROM 11 inches with Wi-Fi+5G (Silver)', price: '₹1,02,183', specifications:'Apple M1 chip for next-level performance,Stunning 11-inch Liquid Retina display with ProMotion, True Tone, and P3 wide color, TrueDepth camera system featuring Ultra Wide front camera with Center Stage, 12MP Wide camera, 10MP Ultra Wide camera, and LiDAR Scanner for immersive AR, 5G for superfast downloads and high-quality streaming, Stay connected with ultrafast Wi-Fi 6, Go further with all-day battery life, Thunderbolt port for connecting to fast external storage, displays, and docks, Face ID for secure authentication and Apple Pay, Four speaker audio and five studio-quality microphones, Support for Apple Pencil (2nd generation), Magic Keyboard, and Smart Keyboard Folio4, iPadOS is powerful, intuitive, and designed specifically for iPad, Over a million apps on the App Store just for iPad, 27.94 cm (11 inches) Quad HD Display, 12 MP Primary Camera | 12 MP Front', imageUri: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-pro-12-wifi-spacegray-2019?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1563570657454' },
  { id: '4', name: 'Apple 2021 iPad Pro M1 chip (11-inch/27.96 cm, Wi-Fi + Cellular, 1TB) - Space Grey (3rd Generation)s',specifications:'Apple M1 chip for next-level performance, Stunning 27.96 cm (11-inch) Liquid Retina display with ProMotion, True Tone, and P3 wide color, TrueDepth camera system featuring Ultra Wide front camera with Center Stage,Stay connected with ultrafast Wi-Fi and 4GLTE, Stay connected with ultrafast Wi-Fi, Go further with all-day battery life, Thunderbolt port for connecting to fast external storage, displays, and docks, Face ID for secure authentication ', price: '₹1,48,899', imageUri: 'https://webobjects2.cdw.com/is/image/CDW/6512882' },
  { id: '5', name: 'Apple 2022 10.9-inch iPad (Wi-Fi, 64GB) - Blue (10th Generation)', price: '₹42,900',specifications:'64 GB ROM, 27.69 cm (10.9 inch) Full HD Display, 12 MP Primary Camera | 12 MP Front, iPadOS 16 | Battery: Lithium Polymer, Processor: A14 Bionic Chip (64-bit Architecture) with Neural Engine' , imageUri: 'https://www.cashregisterwarehouse.com.au/images/shop/Apple-iPad-10.9-inch-10th-Gen-Wifi-256Gb-Blue.jpg' },
  // Add more product items as needed
];
const productDataRight1 = [
  { id: '3', name: 'APPLE iPhone 11 (Green, 128 GB)', price: '₹38,999', specifications:'Display Size-15.49 cm (6.1 inch), Resolution-1792 x 828 Pixels, Resolution Type-Liquid Retina HD Display, Other Display Features-1400:1 Contrast Ratio (Typical), True Tone Display, Wide Colour Display (P3), Haptic Touch, 625 nits Max Brightness (Typical), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously',imageUri: 'https://d28i4xct2kl5lp.cloudfront.net/product_images/128332_73b3deeb-f7d9-412f-9b1c-78aef3c7baff.jpg' },
  { id: '4', name: 'APPLE iPhone 11 Pro Max (Midnight Green, 64 GB)', price: '₹95,699',specifications:'Display Size-15.49 cm (6.1 inch), Resolution-1792 x 828 Pixels, Resolution Type-Liquid Retina HD Display, Other Display Features-1400:1 Contrast Ratio (Typical), True Tone Display, Wide Colour Display (P3), Haptic Touch, 625 nits Max Brightness (Typical), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously', imageUri: 'https://tse1.mm.bing.net/th?id=OIP.F27wSzg028iagRc9a47vswHaFZ&pid=Api&P=0&h=180' },
  // Add more product items as needed
];
const productDataRight2 = [
  { id: '3', name: 'HP Laptop 15s, 12th Gen Intel Core i7-1255U, 15.6-inch (39.6 cm), FHD, 16GB DDR4, 512GB SSD, Intel Iris Xe Graphics', price: '₹63,990 ',specifications:'12th Gen Intel® Evo™ Powered by Core™ i5 Processor Windows 11 Home 33.8 cm (13.3) diagonal WUXGA touchscreen display with Intel® Iris® Xᵉ Graphics 16 GB LPDDR4x-4266 RAM 512 GB SSD Hard drive Backlit Keyboard, True Vision 5MP IR camera, B&O Speakers', imageUri: 'https://brain-images-ssl.cdn.dixons.com/8/7/10165278/u_10165278.jpg' },
  { id: '4', name: 'DELL Ryzen 5 Hexa Core AMD R5-6600H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050/120 Hz) ', price: '₹59,990',specifications:'12th Gen Intel® Evo™ Powered by Core™ i5 Processor Windows 11 Home 33.8 cm (13.3) diagonal WUXGA touchscreen display with Intel® Iris® Xᵉ Graphics 16 GB LPDDR4x-4266 RAM 512 GB SSD Hard drive Backlit Keyboard, True Vision 5MP IR camera, B&O Speakers', imageUri: 'https://news-cdn.softpedia.com/images/news2/dell-launches-new-windows-10-laptops-world-s-first-17-inch-2-in-1-device-504686-2.jpg' },
  // Add more product items as needed
];
const productDataRight3 = [
  { id: '3', name: 'boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback', price: '₹1,699 ',specifications:'Playback- It provides a massive battery backup of upto 15 hours for a superior playback time. Charging Time : 3 Hours, Drivers- Its 40mm dynamic drivers help pump out immersive HD audio all day long., Earcushions- It has been ergonomically designed and structured as an on-ear headphone to provide the best user experience with its comfortable padded earcushions and lightweight design, Controls- You can control your music without hiccups using the easy access controls, communicate seamlessly using the built-in mic, access voice assistant and always stay in the zone, Dual Modes- One can connect to boAt Rockerz 450 via not one but two modes, Bluetooth as well as AUX, 1 year warranty from the date of purchase', imageUri: 'https://swiftbox.in/wp-content/uploads/2020/08/boAt-Rockerz-450-Wireless-Bluetooth-Headphone-1.jpg' },
  { id: '4', name: 'JBL Tune 770NC Wireless Over Ear ANC Headphones with Mic, Upto 70 Hrs Playtime', price: '₹5,999 ',specifications:'Playback- It provides a massive battery backup of upto 15 hours for a superior playback time. Charging Time : 3 Hours, Drivers- Its 40mm dynamic drivers help pump out immersive HD audio all day long., Earcushions- It has been ergonomically designed and structured as an on-ear headphone to provide the best user experience with its comfortable padded earcushions and lightweight design, Controls- You can control your music without hiccups using the easy access controls, communicate seamlessly using the built-in mic, access voice assistant and always stay in the zone, Dual Modes- One can connect to boAt Rockerz 450 via not one but two modes, Bluetooth as well as AUX, 1 year warranty from the date of purchase', imageUri: 'https://www.bhphotovideo.com/images/images1500x1500/jbl_jblt700btcoram_tune_700bt_wireless_over_ear_1557211.jpg' },
  // Add more product items as needed
];
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Product List' }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const [data, setdata] = useState([]);
  const changedata = (index)=>{
    switch(index){
      case 1:
      setdata(productDataRight2)
      break;
      case 2:
      setdata(productDataRight1)
      break;
      case 3:
      setdata(productDataRight3)
      break;
      case 4:
      setdata(productDataRight)
      break;
      default:
        setdata(productDataRight);
    }
  };
  return (
    <View style={styles.container}>
      
      {/* Left Column */}
      <View style={styles.leftColumn}>
        <FlatList
          data={productDataLeft}
          keyExtractor={(item) => item.id}
          renderItem={({ item,index }) => (
            <TouchableOpacity
              style={styles.productItem}
              onPress={() => {
                changedata(index)
              }}
            >
              <Image source={{ uri: item.imageUri }} style={styles.productImage} />
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      
      <View style={styles.rightColumn}>
  <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetail', { product: item });
          // Add the action you want to perform when an item is pressed
        }}
      >
        <View style={styles.productItem}>
          <Image source={{ uri: item.imageUri }} style={styles.productImage} />
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
      </TouchableOpacity>
    )}
  />
</View>    
    </View>
  );
};
const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  const handleAddToCart = () => {
    // Handle the "Add to Cart" button action here
    // For example, you can add the product to the cart.
  };

  const handleBuyNow = () => {
    // Handle the "Buy Now" button action here
    // For example, you can navigate to the checkout screen.
  };

  return (
    <View>
      

      <Image
        source={{ uri: product.imageUri }}
        style={styles.productImage}
      />

      <Text style={styles.productDetail}>Product Name: {product.name}</Text>
      <Text style={styles.productDetail}>Specfications: {product.specifications}</Text>
      
      <Text style={styles.productDetail}>Price: {product.price}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddToCart}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleBuyNow}
      >
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Split vertically
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightblue',
  },
  leftColumn: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  rightColumn: {
    flex: 2.5,
    backgroundColor: 'white',
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productImage: {
    width: 100,
    height: 100,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default App;













