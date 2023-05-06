import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { productsURL } from '../../actions/baseURL';
import { ActivityIndicator } from 'react-native-paper';


const ProductDetail = ({ navigation, route }: any) => {
      const [detail, setDetail] = useState<any>({});
      const [loading, setloading] = useState(true)

      let { id } = route.params;
      useEffect(() => {
            axios.get(productsURL + id)
                  .then(res => {
                        setDetail(res.data);
                        setloading(false);
                  })
      }, [])

      return (
            <>
                  <ActivityIndicator style={styles.loading} animating={loading} />
                  {
                        loading ? <></> : <SafeAreaView style={styles.container}>
                              <View style={styles.mainWrapper}>
                                    <View style={styles.navigator}>
                                          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                                                <Text>---</Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity>
                                                <Text>O</Text>
                                          </TouchableOpacity>
                                    </View>
                                    <View style={styles.detailCardWrapper}>
                                          <View>
                                                <View style={styles.imageWrapper}>
                                                      <Image style={styles.productIcon} source={require("../../assets/applewatchpink.png")} />
                                                </View>
                                          </View>
                                          <View style={{ backgroundColor: "white" }}>
                                                <View style={styles.detailTextWrapper}>
                                                      <Text style={styles.detailText}>{detail.brand} {detail.model}</Text>
                                                </View>
                                                <Text style={styles.colors}>Colors</Text>
                                                <View style={styles.colorsWrapper}>
                                                      <View style={styles.colorWrapper}>
                                                            <View style={styles.color}></View>
                                                            <Text style={styles.colorText}>Sky Blue</Text>
                                                      </View>
                                                      <View style={styles.colorWrapper}>
                                                            <View style={[styles.color, styles.midColor]}></View>
                                                            <Text style={styles.colorText}>Rose Gold</Text>
                                                      </View>
                                                      <View style={styles.colorWrapper}>
                                                            <View style={[styles.color, styles.endColor]}></View>
                                                            <Text style={styles.colorText}>Green</Text>
                                                      </View>
                                                </View>
                                                <View style={styles.futureWrapper}>
                                                      <Text style={styles.futureText}>Get Apple TV+ free for a year</Text>
                                                </View>
                                                <View style={styles.descriptionWrapper}>
                                                      <Text style={styles.description}>{detail.description}</Text>

                                                </View>
                                                <View style={styles.priceWrapper}>
                                                      <Text style={styles.priceText}>Price</Text>
                                                      <Text style={styles.price}>${detail.price}</Text>
                                                </View>
                                                <TouchableOpacity style={styles.buttonWrapper}>
                                                      <Text style={styles.buttonText}>Add to basket</Text>
                                                </TouchableOpacity>
                                          </View>
                                    </View>
                              </View>
                        </SafeAreaView>
                  }
            </>
      )
}

export default ProductDetail

const styles = StyleSheet.create({
      loading: {
            color: '#5956E9',
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ translateY: 450 }],
      },
      container: {
            flex: 1,
            backgroundColor: '#fff',
      },
      detailCardWrapper: {
            margin: 25,

      },
      imageWrapper: {

      },
      productIcon: {
            width: "100%",
            height: 394.17,
            resizeMode: "contain",
      },
      detailTextWrapper: {},
      detailText: {
            fontWeight: "600",
            fontSize: 28,
            height: 52,
      },
      colorWrapper: {
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 0.5,
            padding: 12,
            borderRadius: 10,
            borderColor: "#E3E3E3"
      },
      color: {
            width: 16,
            height: 16,
            backgroundColor: "#7485C1",
            marginRight: 10,
            borderRadius: 50,
      },
      colorText: {
            fontWeight: "700",
            fontSize: 12,
      },
      colors: {
            fontWeight: "700",
            fontSize: 17,
            marginBottom: 10,
      },
      colorsWrapper: {
            flexDirection: "row",
            justifyContent: "space-between",
      },
      midColor: {
            backgroundColor: "#C9A19C",
      },
      endColor: {
            backgroundColor: "#A1C89B",
      },
      futureWrapper: {
            marginVertical: 10,
      },
      futureText: {
            fontWeight: "700",
            fontSize: 17,
      },
      descriptionWrapper: {
            marginBottom: 20,
      },
      description: {
            fontWeight: "400",
            fontSize: 15,
            color: "#808080"
      },
      priceWrapper: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 13,
      },
      priceText: {
            fontWeight: "300",
            fontSize: 17,
      },
      price: {
            fontWeight: "700",
            fontSize: 22,
            color: "#5956E9"
      },
      buttonWrapper: {
            borderRadius: 10,
            padding: 15,
            backgroundColor: "#5956E9",
      },
      buttonText: {
            fontWeight: "700",
            fontSize: 20,
            color: "#fff",
            textAlign: "center",
      },
      mainWrapper: {},
      navigator: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
            marginHorizontal: 25
      },
})