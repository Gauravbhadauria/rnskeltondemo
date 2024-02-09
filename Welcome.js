import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

const Welcome = () => {
  const [slides, setSlides] = useState([
    {
      title: 'Title 1',
      desc: 'This is Description 1',
      media: require('./src/images/slide1.jpg'),
      bgColor: '#ffcbcf',
    },
    {
      title: 'Title 2',
      desc: 'This is Description 2',
      media: require('./src/images/slide2.jpg'),
      bgColor: 'rgba(132,214,231,255)',
    },
    {
      title: 'Title 3',
      desc: 'This is Description 3',
      media: require('./src/images/slide3.jpg'),
      bgColor: '#d9c1ff',
    },
    {
      title: 'Title 4',
      desc: 'This is Description 4',
      media: require('./src/images/slide4.jpg'),
      bgColor: '#ffffff',
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: slides[currentIndex].bgColor}}>
      <View style={{width: '100%', height: '70%'}}>
        <FlatList
          data={slides}
          horizontal
          pagingEnabled
          onScroll={e => {
            if (currentIndex >= 0 && currentIndex < slides.length) {
              setCurrentIndex(  
                (
                  e.nativeEvent.contentOffset.x / Dimensions.get('window').width
                ).toFixed(0),
              );
            }
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: Dimensions.get('window').width,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}>
                <Image
                  source={item.media}
                  style={{width: '90%', height: 200}}
                />
                <Text style={{fontSize: 30, fontWeight: '500', marginTop: 20}}>
                  {item.title}
                </Text>
                <Text style={{fontSize: 25, marginTop: 10, fontWeight: '500'}}>
                  {item.desc}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
