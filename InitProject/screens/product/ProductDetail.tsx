import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { productsURL } from '../../actions/baseURL';

const ProductDetail = ({ navigation, route }: any) => {
      const [detail, setDetail] = useState<any>({});
      let { id } = route.params;
      useEffect(() => {
            axios.get(productsURL + id)
                  .then(res => {
                        setDetail(res.data);
                        console.log(res.data);
                  })
      }, [])

      return (
            <SafeAreaView style={styles.container}>
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
                              <View style={styles.imageWrapper}>
                                    <Image style={styles.productIcon} source={require("../../assets/applewatchpink.png")} />
                              </View>
                              <View style={styles.detailTextWrapper}>
                                    <Text style={styles.detailText}>{detail.brand} {detail.model}</Text>
                              </View>
                              <View style={styles.colorWrapper}>
                                    <View style={styles.color}>
                                          <Text style={styles.colorText}>Color</Text>
                                    </View>
                                    <View style={styles.color}>
                                          <Text style={styles.colorText}>Color</Text>
                                    </View>
                                    <View style={styles.color}>
                                          <Text style={styles.colorText}>Color</Text>
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
                                    <Text style={styles.price}>{detail.price}</Text>
                              </View>
                              <TouchableOpacity style={styles.buttonWrapper}>
                                    <Text style={styles.buttonText}>Add to basket</Text>
                              </TouchableOpacity>
                        </View>
                  </View>
            </SafeAreaView>
      )
}

export default ProductDetail

const styles = StyleSheet.create({
      container: {
            margin: 25,
      },
      detailCardWrapper: {},
      imageWrapper: {},
      productIcon: {
            width: "100%",
            height: 394.17,
      },
      detailTextWrapper: {},
      detailText: {
            fontWeight: "600",
            fontSize: 28,
      },
      colorWrapper: {},
      color: {},
      colorText: {},
      futureWrapper: {},
      futureText: {},
      descriptionWrapper: {},
      description: {},
      priceWrapper: {},
      priceText: {},
      price: {},
      buttonWrapper: {},
      buttonText: {},
      mainWrapper: {},
      navigator: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
      },
})