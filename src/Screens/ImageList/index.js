import React, { Component } from "react";
import {
    View, ImageBackground, Image, SafeAreaView,
    FlatList,
    TouchableOpacity, Text, ScrollView,
    TouchableHighlight, Dimensions, NetIfo
} from "react-native";
import Styles from './styles';
import WS_ImageList from '../../Webservices/WS_ImageList';
import { Spinner } from '../../components/Spinner';
import {
    productDetailImageCountBackground,
    seperatorLineColor, appcolor
} from '../../constant/config';
import ImageSlider from 'react-native-image-slider';
import ImageS from 'react-native-image-progress';
import { connect } from 'react-redux';
import { imageListAction } from '../../Redux/Image_Redux/action';

var SampleArray = [];

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

class ImageList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            tempWidth: 0,
            tempHeight: 0,
            cartList: [
                {
                    title: '199 Postpaid',
                    imagePath: require('../../img/ic_image_sim.png'),
                    ratingVal: 4,
                    description: 'This package is specially designed with great value that suite all...',
                    is_compare: true,
                    is_quickview: false,
                    is_wishlist: false,
                    is_addToCart: false
                }
            ],
        };
    }


    componentWillMount() {

        //console.log("*********componentWillMount********");
        this.setState({
            tempWidth: Dimensions.get('window').width,
            tempHeight: Dimensions.get('window').height,
            //loading: true,
        })

        this.ParseData();
    }

    
    async ParseData() {
        this.setState({
            loading: true
        });
        const { imageListAction } = this.props;

        SampleArray = await imageListAction();
       
        this.setState({
            loading: false
        });
        
    }

    componentDidMount() {
        //console.log("*********componentDidMount********");
    }

    componentWillUnmount() {
        //console.log("*********componentWillUnmount********");
    }


    render() {
    const { currentImage } = this.props;
    
    if (currentImage != ''){
        console.log("currentImage :" + JSON.stringify(currentImage));
        
        return (
            <View style={Styles.backGroundStyle}>
                <SafeAreaView style={{
                    flex: 0,
                    backgroundColor: appcolor
                }} />

                <SafeAreaView style={Styles.backGroundStyle}>

                    <ImageSlider
                        //style={{ backgroundColor: 'white' }}
                        loopBothSides
                        // autoPlayWithInterval={12000}
                        images={currentImage}
                        customSlide={({ index, item }) => (
                            // It's important to put style here because it's got offset inside
                            this.renderCartHistory(item, index)
                        )}
                    />

                </SafeAreaView>
                {this.state.loading && (<View
                    style={{ alignItems: "center" }}>
                    <Spinner />
                </View>)}
            </View>
        );
        }else{
            return null;
        }
    }


    renderCartHistory(item, index) {

        return (
            <TouchableOpacity onPress={() => this._selectCellon(item, index)} style={{ alignItems: 'center' }}>

                <ImageS source={{ uri: 'https://picsum.photos/200/300?image=' + item.id }} style={{
                    marginTop: 0,
                    width: this.state.tempWidth,
                    height: this.state.tempHeight - 100,
                    resizeMode: 'cover'
                }}
                >
                </ImageS>
                <Text style={{ position: 'absolute', top: 20, color: 'red' }}>{item.author}</Text>
            </TouchableOpacity>
        );
    }

    _selectCellon(item, index) {
        //alert(index)
    }
}


const mapStateToProps = ({ imageReducer}) => ({
    currentImage: imageReducer.currentImages
  });
  

  const mapDispatchToProps = dispatch => ({
    imageListAction: () => dispatch(imageListAction())
  
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ImageList);
