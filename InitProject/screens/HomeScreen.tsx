import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { categoriesURL, productsURL } from '../actions/baseURL'

const HomeScreen = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get(productsURL).then(response => {
      setProducts(response.data)
    })
    console.log(products);
  }, [])
  useEffect(() => {
    axios.get(categoriesURL).then(response => {
      setCategories(response.data)
    })
    console.log(categories);
  }, [])

  const renderProducts = ({ item }: any) => {
    return <View style={styles.productCard}>
      <View style={styles.productImageWrapper}>
        <Image style={styles.productIcon} source={require("../assets/applewatchpink.png")} />
      </View>
      <View style={styles.productTexts}>
        <View style={styles.productBrandWrapper}>
          <Text style={styles.productBrand}>{item.brand}</Text>
        </View>
        <View style={styles.productModelWrapper}>
          <Text style={styles.productModel}>{item.model}</Text>
        </View>
        <View style={styles.productPriceWrapper}>
          <Text style={styles.productPrice}>$ {item.price}</Text>
        </View>
      </View>
    </View>

  }

  const renderCategories = ({ item }: any) => {
    return <View style={styles.categoriesWrapper}>
      <Text style={styles.categories}>{item.categoryName}</Text>
    </View>

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainWrapper}>
        <View>
          <TextInput style={styles.input} placeholder='Search' />
        </View>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>Order online</Text>
          <Text style={styles.headerText}>collect in store</Text>
        </View>
        {
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={categories}
            renderItem={renderCategories}
            ItemSeparatorComponent={() => <View style={{ width: 37 }} />}
          />
        }
        {
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={products}
            renderItem={renderProducts}
          />
        }
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1
  },
  input: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#C9C9C9",
    padding: 10,
    color: "#9A9A9D"
  },
  mainWrapper: {
    margin: 15,
  },
  headerWrapper: {
    marginTop: 20,
    marginBottom: 50,
  },
  headerText: {
    fontWeight: "500",
    fontSize: 30,
  },
  categoriesWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categories: {
    fontWeight: "400",
    fontSize: 15,
    color: "#9A9A9D",
  },
  productCard: {
    backgroundColor: "white",
    marginVertical: 90,
    width: 220,
    height: 250,
    borderRadius: 20,
    shadowColor: "#393939",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  productImageWrapper: {
    borderRadius: 100,
    alignItems: "center",
  },
  productBrandWrapper: {
    marginBottom: 10,
  },
  productModelWrapper: {},
  productPriceWrapper: {
    borderRadius: 30,
  },
  productIcon: {
    width: 160,
    height: 160,
    transform: [{ translateY: -50 }],
    borderRadius: 100,
  },
  productTexts: {
    alignItems: "center",
    transform: [{ translateY: -30 }],
  },
  productBrand: {
    fontWeight: "400",
    fontSize: 20,
  },
  productModel: {
    fontWeight: "400",
    fontSize: 15,
    color: "#868686",
    marginBottom: 20,
  },
  productPrice: {
    fontWeight: "500",
    fontSize: 16,
    color: "#5956E9",
  },
})
