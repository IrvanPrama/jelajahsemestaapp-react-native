import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { ImageHeader, Logo } from '../../assets';
import { PalingDisukai } from '../../components/';
import ButtonIcon from '../../components/ButtonIcon';
import { WARNA_ABU_ABU } from '../../utils/constant';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.hello}>
            <Text style={styles.selamat}>Selamat Datang, </Text>
            <Text style={styles.username}>Deivan</Text>
          </View>
        </ImageBackground>
        <View style={styles.layanan}>
          <Text style={styles.label}>Jelajahi Semesta Yuk!</Text>
          <View style={styles.iconLayanan}>
            <ButtonIcon title="Semesta" type="layanan" />
            <ButtonIcon title="Bumi" type="layanan" />
            <ButtonIcon title="Kehidupan" type="layanan" />
          </View>
        </View>
        <View style={styles.palingDisukai}>
          <Text style={styles.label}>Paling Disukai</Text>
          <PalingDisukai title="Asal Mula Alam Semesta" status="2000 kali dibaca" />
          <PalingDisukai title="Asal Mula Makhluk Hidup" status="1087 kali dibaca" />
          <PalingDisukai title="Luas Alam Semesta" status="1002 kali dibaca" />
          <PalingDisukai title="Teori Paradoks" status="720 kali dibaca" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.07,
  },
  hello: {
    marginTop: windowHeight * 0.03,
  },
  selamat: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular',
  },
  username: {
    color: 'white',
    marginTop: -10,
    fontSize: 32,
    fontFamily: 'TitilliumWeb-Bold',
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  palingDisukai: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: WARNA_ABU_ABU,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
