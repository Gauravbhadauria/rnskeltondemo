import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import ImageLoad from 'react-native-image-placeholder'
const ShimmerPlacerholder=createShimmerPlaceholder(LinearGradient)
const App = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    setLoader(true);
    setProducts([]);
    setTimeout(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
          setLoader(false)
          console.log(json);
          setProducts(json);
        })
        .catch(err => {
          setLoader(false);
        });
    }, 5000);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {loader && (
        <FlatList
          data={[1, 1, 1, 1, 1,1,1]}
          renderItem={() => {
            return (
              <View
                style={{
                  width: '90%',
                  height: 100,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    width: 80,
                    height: 80,
                    backgroundColor: '#9e9e9e',
                    opacity: 0.2,
                  }}></View>
                <View style={{width: '80%', marginLeft: 10}}>
                  <View
                    style={{
                      width: '80%',
                      height: 30,
                      backgroundColor: '#9e9e9e',
                      opacity: 0.2,
                    }}></View>
                  <View
                    style={{
                      width: 100,
                      height: 40,
                      backgroundColor: '#9e9e9e',
                      opacity: 0.2,
                      marginTop: 10,
                    }}></View>
                </View>
              </View>
            );
          }}></FlatList>
      )} 
      {/* {loader &&<FlatList
          data={[1, 1, 1, 1, 1,1,1]}
          renderItem={() => {
            return (
              <View
                style={{
                  width: '90%',
                  height: 100,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  alignSelf: 'center',
                }}>
                <ShimmerPlacerholder
                  style={{
                    width: 80,
                    height: 80,
                    backgroundColor: '#9e9e9e',
                    opacity: 0.2,
                  }}></ShimmerPlacerholder>
                <View style={{width: '80%', marginLeft: 10}}>
                  <ShimmerPlacerholder
                    style={{
                      width: '80%',
                      height: 30,
                      backgroundColor: '#9e9e9e',
                      opacity: 0.2,
                    }}></ShimmerPlacerholder>
                  <ShimmerPlacerholder
                    style={{
                      width: 100,
                      height: 40,
                      backgroundColor: '#9e9e9e',
                      opacity: 0.2,
                      marginTop: 10,
                    }}></ShimmerPlacerholder>
                </View>
              </View>
            );
          }}></FlatList> } */}
      {!loader && products.length>0 ? <FlatList
        data={products}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                flexDirection: 'row',

                alignSelf: 'center',
                marginTop: 20,
                alignItems: 'center',
              }}>
              <ImageLoad
                source={{uri:item.image}}
                style={{width: 80, height: 80}}
              />
              <View style={{width: '75%', marginLeft: 10}}>
                <Text style={{width: '70%', fontSize: 16}}>{item.title}</Text>
                <Text
                  style={{
                    backgroundColor: 'green',
                    padding: 10,
                    color: 'white',
                    width: 100,
                    borderRadius: 10,
                    marginTop: 10,
                  }}>
                  Add To Cart
                </Text>
              </View>
            </View>
          );
        }}
      />:null}
    </SafeAreaView>
  );
};

export default App;
