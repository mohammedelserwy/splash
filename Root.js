import React from 'react';
import { Provider, connect } from 'react-redux';
import taskReducer from './store/slice';
import { configureStore } from '@reduxjs/toolkit';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
  Pressable,
  Dimensions,


} from 'react-native';
import {
  updatePageIndex
} from './store/slice';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const width = Dimensions.get("window").width;
class Root extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
      ref: React.createRef(null),
    };
  }
  listOfPages = [
    {
      id: 0,
      title: 'تسوق بكل سهولة',
      image: require('./assets/images/food.jpg'),
    },
    {
      id: 1,
      title: 'تسوق بكل سهولة',
      image: require('./assets/images/food.jpg'),
    },
    {
      id: 2,
      title: 'تسوق بكل سهولة',
      image: require('./assets/images/food.jpg'),
    },
  ];

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ heigth: '80%' }}>
          <FlatList
            ref={this.state.ref}
            onMomentumScrollEnd={e => {
              let contentOffset = e.nativeEvent.contentOffset;
              let viewSize = e.nativeEvent.layoutMeasurement;

              let pageIndex = Math.round(contentOffset.x / viewSize.width);
              console.log(pageIndex);
              this.props.updatePageIndex({ pageIndex: pageIndex });
            }}
            data={this.listOfPages}
            horizontal
            keyExtractor={(item) => {
              return item.id;
            }}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            contentContainerStyle={{ height: '100%' }}
            renderItem={itemData => {

              return (
                <View style={{ height: '100%' }}>
                  <Image
                    source={itemData.item.image}
                    style={{
                      height: '80%',
                      width: wp("100%"),
                      borderBottomRightRadius: wp('30%'),
                      borderBottomLeftRadius: wp('30%'),
                    }}
                  />
                  <View style={{ height: hp("1%") }}></View>
                  <View style={{ width: "100%", alignItems: "center" }}>
                    <Text
                      style={{
                        color: '#051094',
                        fontSize: hp('3%'),
                        fontWeight: 'bold',
                      }}>
                      {itemData.item.title}
                    </Text>
                  </View>

                </View>
              );
            }}
          />
        </View>

        <View
          style={{
            heigth: '20%',
            width: wp('100%'),

          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('10%'), }}>
            {this.props.state.task.pageIndex !== 2 ? <Pressable onPress={() => {
              this.props.updatePageIndex({ pageIndex: 2 });

              const offset = this.props.state.pageIndex * width;
              this.state.ref.current.scrollToOffset({ offset });
            }}>
              <Text style={{ color: 'grey' }}>تخطى</Text>

            </Pressable> : <View></View>}
            <View
              style={{
                width: '20%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              {this.listOfPages.map((_, index) => {

                return (
                  <View
                    key={index}
                    style={{
                      height: hp('1%'),
                      width:
                        this.props.state.task.pageIndex === index ? wp('5%') : hp('1%'),
                      borderRadius:
                        this.props.state.task.pageIndex === index ? wp('2%') : hp('.5%'),
                      backgroundColor: this.props.state.task.pageIndex === index ? "orange" : "#D3D3D3"
                    }}></View>
                );
              })}
            </View>
          </View>
          {this.props.state.task.pageIndex === 0 ? <View style={{ alignItems: "center", width: "100%", height: hp("5%") }}>
            <Pressable style={{ height: "100%", width: "30%", backgroundColor: "orange", alignItems: "center", justifyContent: "center", borderRadius: wp("2%"), marginTop: hp("1%") }} onPress={() => {
              this.props.updatePageIndex({ pageIndex: 1 });

              const offset = this.props.state.pageIndex * width;
              this.state.ref.current.scrollToOffset({ offset });

            }
            }>
              <Text style={{ color: "white", fontWeight: "bold", fontSize: hp("2%") }}>التالى</Text>
            </Pressable>

          </View> : this.props.state.task.pageIndex === 1 ? <View style={{ flexDirection: "row", width: "100%", height: hp("5%"), justifyContent: "center", marginTop: hp("1%") }}>

            <Pressable style={{ height: "100%", width: "40%", backgroundColor: "orange", alignItems: "center", justifyContent: "center", borderRadius: wp("2%") }} onPress={() => {

              this.props.updatePageIndex({ pageIndex: 2 });

              const offset = this.props.state.pageIndex * width;
              this.state.ref.current.scrollToOffset({ offset });

            }}>
              <Text style={{ color: "white", fontWeight: "bold", fontSize: hp("2%") }}>التالى</Text>
            </Pressable>
            <View style={{ width: wp("3%") }}></View>
            <Pressable style={{ height: "100%", width: "40%", backgroundColor: "white", alignItems: "center", justifyContent: "center", borderRadius: wp("2%") }} onPress={() => {
              this.props.updatePageIndex({ pageIndex: 0 });

              const offset = this.props.state.pageIndex * width;
              this.state.ref.current.scrollToOffset({ offset });

            }}>
              <Text style={{ color: "orange", fontWeight: "bold", fontSize: hp("2%") }}>السابق</Text>
            </Pressable>
          </View> : <View >
            <Pressable style={{ height: hp("5%"), width: wp("80%"), backgroundColor: "orange", alignItems: "center", justifyContent: "center", marginLeft: wp("10%"), borderRadius: wp("2%"), marginTop: hp("1%") }}>
              <Text style={{ color: "white", fontWeight: "bold", fontSize: hp("2%") }}>تسجيل دخول</Text>
            </Pressable>
            <View style={{ height: hp("2%") }}></View>
            <Pressable style={{
              height: hp("5%"), width: wp("80%"), backgroundColor: "white", alignItems: "center", justifyContent: "center", marginLeft: wp("10%"), borderRadius: wp("2%"), borderColor: "blue", borderWidth: wp(".3%")
            }}>
              <Text style={{ color: "blue", fontWeight: "bold", fontSize: hp("2%") }}>حساب جديد</Text>
            </Pressable>
          </View>}

        </View>
      </View>
    );
  }

}
function mapStateToProps(state) {
  return {
    state: state,
  };
}
const mapDispatchToProps = {
  updatePageIndex,
};
export default connect(mapStateToProps, mapDispatchToProps)(Root);