//? react
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, TouchableOpacity} from 'react-native';

//? component
import Box from '../../../../base/components/ui_component/box';
import Divider from '../../../../base/components/ui_component/divider';

//? base
import {
  colorGold2,
  colorDarkGold,
  colorTextTitle,
} from '../../../../base/color';
import styleSetting from './style';
import stylesGlobal from '../../../../base/styles_global';

export type menuModel = {
  state: string;
  title: string;
  subTitle: string;
  icon: string;
};

type Props = {
  item: menuModel;
  onPress?: () => void;
};

const MenuItem = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={stylesGlobal.rowBetween}>
        <View style={stylesGlobal.row}>
          <LinearGradient
            style={styleSetting.boxIcon}
            colors={[colorGold2, colorDarkGold]}>
            <Ionicons name={item.icon} size={22} color={'white'} />
          </LinearGradient>
          <Box w={10} />
          <View>
            <Text style={{color: colorTextTitle, fontSize: 16}}>
              {item.title}
            </Text>
            {item.state == 'logout' ? null : <Text>{item.subTitle}</Text>}
          </View>
        </View>
        {item.state != 'version' ? (
          <Ionicons name={'chevron-forward'} size={20} color={'lightgrey'} />
        ) : (
          <Text>1.0.0</Text>
        )}
      </View>
      <Box h={12} />
      <Divider />
      <Box h={15} />
    </TouchableOpacity>
  );
};

export default MenuItem;