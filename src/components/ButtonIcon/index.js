import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  IconSpace,
  IconEarth,
  IconLive

} from '../../assets';
import { WARNA_OTEN } from '../../utils/constant';

const ButtonIcon = ({ title, type }) => {
  const Icon = () => {
    if (title === 'Semesta') return <IconSpace />;
    if (title === 'Bumi') return <IconEarth />;
    if (title === 'Kehidupan') return <IconLive />;
    return <IconSpace />;
  };

  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={styles.button(type)}>
        <Icon />
      </View>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: (type) => ({
    marginBottom: type === "layanan" ? 12 : 0,
    marginRight: type === "layanan" ? 30 : 0
  }),
  button: (type) => ({
    backgroundColor: WARNA_OTEN,
    padding: type === 'layanan' ? 18 : 7,
    borderRadius: 10,
  }),
  text: (type) => ({
    fontSize: type === 'layanan' ? 14 : 10,
    fontFamily: type === 'layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
    textAlign: 'center',
  }),

});
