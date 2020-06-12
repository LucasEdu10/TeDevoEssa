import React from 'react';
import {ScrollView, View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { Feather as Icon, FontAwesome} from '@expo/vector-icons'
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Datail = () => {

    const navigation = useNavigation();

    function handleWhatsapp(){

    };
    function handleComposeMail(){

    };
    function handleNavigateBack(){
        navigation.goBack();
    };

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    TeDevoEssa
                </Text>
                <TouchableOpacity style={styles.exit} onPress={handleNavigateBack}>
                    <FontAwesome name="times" size={30} color="#FFF"/>
                </TouchableOpacity>
            </View>
        <View style={styles.footer}>
            <RectButton style={styles.button} onPress={handleWhatsapp}>
                <FontAwesome name="user-o" size={20} color="#FFF"/>
            </RectButton>
            <RectButton style={styles.button} onPress={handleComposeMail}>
                <FontAwesome name="money" size={20} color="#FFF"/>
            </RectButton>
            <RectButton style={styles.button} onPress={handleWhatsapp}>
                <FontAwesome name="home" size={20} color="#FFF"/>
            </RectButton>
            <RectButton style={styles.button} onPress={handleWhatsapp}>
                <FontAwesome name="cogs" size={20} color="#FFF"/>
            </RectButton>
        </View>
        </SafeAreaView>
        
    
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 20 + Constants.statusBarHeight,
    },
    title: {
        fontFamily: 'Ubuntu_700Bold',
        color: '#FFF',
        fontSize: 30,
        marginHorizontal: 60,
    },

    exit:{
        marginTop: -35,
    },

    footer: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '20%',
        backgroundColor: '#0047ab',
        borderRadius: 10,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        marginLeft: 8,
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Roboto_500Medium',
    },
});


export default Datail;