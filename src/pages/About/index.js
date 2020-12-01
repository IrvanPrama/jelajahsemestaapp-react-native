import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'

const About = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.textHead1}>Apa itu Jelajah Semesta?</Text>
                    <Image source={require('../../assets/images/about-head.png')} style={styles.ilusHead} />
                </View>
                <Text style={styles.textHead}>Jelajah semesta adalah aplikasi yang dibuat untuk kalian semua yang masih muda agar bisa,</Text>
                <View style={styles.item}>
                    <Image source={require('../../assets/images/about-learn.png')} style={styles.ilusItemLeft} />
                    <Text style={styles.textRight}>1. Tau lebih banyak hal-hal menarik yang ada di jagat raya.</Text>
                </View>
                <View style={styles.item}>
                    <Image source={require('../../assets/images/about-share.png')} style={styles.ilusItemRight} />
                    <Text style={styles.textLeft}>2.Berbagi opini dan pengalaman menarik tentang fenomena semesta yang kalian rasakan dan alami.</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        marginVertical: 30
    },
    ilusHead: {
        height: 300,
        width: 400
    },
    ilusItemLeft: {
        marginTop: 10,
        marginLeft: 30,
        height: 100,
        width: 170
    },
    ilusItemRight: {
        marginTop: 10,
        marginRight: 30,
        height: 100,
        width: 170,
        alignSelf: 'flex-end'
    },
    textHead: {
        marginHorizontal: 30,
    },
    textHead1: {
        marginVertical: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    item: {
        borderColor: 'grey',
        marginVertical: 35,
        flex: 2,
        flexDirection: 'column'
    },
    textRight: {
        marginTop: -100,
        marginLeft: 210,
        marginRight: 30,
    },
    textLeft: {
        textAlign: 'right',
        marginTop: -100,
        marginRight: 210,
        marginLeft: 30,
    }
})
