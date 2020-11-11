import React, { Component } from 'react';
 
import { StyleSheet, Platform, View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { textColor } from '../constant/config';


class NavBar extends Component {
     
    static propTypes = {
            navBarBackGroundColor: PropTypes.string,
            navBarBorderWidth: PropTypes.number,
            navBarHeight: PropTypes.number,
            navBarWidth: PropTypes.string,
            navBarTopPosition: PropTypes.number,
            navBarLeftPosition: PropTypes.number,
            navBarRightPosition: PropTypes.number,
            navBarBottomPosition: PropTypes.number,
            navBarBorderColor: PropTypes.string,
            onPress: PropTypes.func,
            navBarHeaderTitle: PropTypes.string,
            navBarHeaderTitleColor: PropTypes.string,
            navBarHeaderTitleFontSize: PropTypes.number

        
       
      }

      render  = () => {
        const { navBarBackGroundColor, 
            navBarBorderWidth, 
            navBarHeight, 
            navBarWidth, 
            navBarTopPosition, 
            navBarLeftPosition, 
            navBarRightPosition, 
            navBarBottomPosition, 
            navBarBorderColor, 
            onPress, 
            navBarHeaderTitle, 
            navBarHeaderTitleColor, 
            navBarHeaderTitleFontSize } = this.props;
            
          return(
              
              <View style={{ flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: navBarWidth, 
                height: navBarHeight, 
                backgroundColor: navBarBackGroundColor, 
                marginTop: navBarTopPosition, 
                marginLeft: navBarLeftPosition, 
                marginRight: navBarRightPosition, 
                marginBottom: navBarBottomPosition, 
                borderEndWidth: navBarBorderWidth, 
                borderColor: navBarBorderColor}}>

                    {/* Data Pass on press Child to Parent 1 */}
                    {/* <TouchableOpacity style={{backgroundColor: 'green', height: 50, width: 50}} onPress={() => this.onPress()}>
                        <Image style={{height: 50, width: 50}} source={require('../img/ic_back.png')} />
                    </TouchableOpacity> */}
                    
                    {/* Data Pass on press Child to Parent 2 */}
                    {/* <TouchableOpacity style={{backgroundColor: 'green', height: 50, width: 50}} onPress={() => onPress('HIIII')}>
                        <Image style={{height: 50, width: 50}} source={require('../img/ic_back.png')} />
                    </TouchableOpacity> */}


                    <TouchableOpacity style={{height: 50, 
                        width: 50, 
                        position: 'absolute', 
                        left: 0, 
                        justifyContent: 'center'}} onPress={onPress}>
                        <Image style={{ 
                        marginLeft: 15, 
                        height: 20, 
                        width: 20, 
                        resizeMode: 'stretch'}} source={require('../img/ic_back.png')} />
                    </TouchableOpacity>

                    
                    <Text style={{color: navBarHeaderTitleColor, 
                        fontSize: navBarHeaderTitleFontSize
                        }}>{navBarHeaderTitle}</Text>

                    

                  
                </View>
          );
      }


}
export default NavBar;