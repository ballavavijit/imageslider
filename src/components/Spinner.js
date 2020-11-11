import React from 'react';
import { View, ActivityIndicator ,Image,Modal} from 'react-native';
import {appcolor} from '../constant/config';

//Created by AB on 17/04/2019
  const Spinner = props => {
    const {
    loading,
    ...attributes
    } = props;
    

  return (
    <Modal
    transparent={true}
    animationType={'none'}
    visible={loading}
    onRequestClose={() => {console.log('close modal')}}>
    <View style={styles.modalBackground}>
    <View style={styles.activityIndicatorWrapper}>
      <ActivityIndicator
          animating={loading}
          color = {appcolor} // color of your choice
          size = "large"
          style = {styles.activityIndicator} />
    </View>
    </View>
    </Modal>
    );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinnerLoader: {
    height: 40,
    width: 40
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
    },
    activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
};

export { Spinner };
