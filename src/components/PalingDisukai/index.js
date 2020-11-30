import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { IconPalingDisukai } from '../../assets';
import { WARNA_UTAMA } from '../../utils/constant';

const PalingDisukai = ({ title, status }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconPalingDisukai />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status(status)}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PalingDisukai;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 17,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginVertical: windowHeight * 0.02,
    alignItems: 'center'
  },
  text: {
    marginLeft: windowWidth * 0.02,
  },
  title: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-SemiBold'
  },
  status: (status) => ({
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'TitilliumWeb-Light',
    color: WARNA_UTAMA,
  })
});
