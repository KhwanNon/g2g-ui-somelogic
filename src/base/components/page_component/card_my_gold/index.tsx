import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image, StyleSheet, Text, View} from 'react-native';

import Box from '../../ui_component/box';
import Row from '../../ui_component/row';

import {
  colorGold2,
  colorTextTitle,
  colorDarkGold,
  colorDarkGold2,
} from '../../../color';
import {assetLogo, assetHomeGold} from '../../../../generated/assets';

function CardMyGold() {
  return (
    <LinearGradient
      end={{x: 1, y: 0}}
      start={{x: 0, y: 0}}
      style={styles.myCard}
      colors={[colorGold2, colorDarkGold]}>
      <Image style={styles.logo} source={assetLogo} />

      <View>
        <Text style={styles.textBold}>น้ำหนักทองคำของคุณ</Text>
        <Box h={15} />

        <Row>
          <Text style={styles.textEGold}>2</Text>
          <Box w={30} />
          <Text style={[styles.textTitle, {fontSize: 22}]}>E-GOLD</Text>
        </Row>

        <Box h={15} />
        <Row>
          <Image style={styles.gold} source={assetHomeGold} />
          <Text style={[styles.textTitle, {fontSize: 16}]}>บาททองคำ</Text>
        </Row>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: 'bold',
    marginHorizontal: 15,
    color: colorDarkGold2,
  },
  logo: {
    top: 11,
    right: 20,
    height: 130,
    width: 150,
    alignSelf: 'center',
    position: 'absolute',
    resizeMode: 'stretch',
  },
  gold: {
    height: 17,
    width: 50,
    resizeMode: 'stretch',
  },
  textEGold: {
    fontSize: 35,
    fontWeight: 'bold',
    color: colorDarkGold2,
  },
  textBold: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colorTextTitle,
  },
  myCard: {
    height: 160,
    width: '100%',
    elevation: 4,
    borderRadius: 15,
    position: 'relative',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default CardMyGold;
