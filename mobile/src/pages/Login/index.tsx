import React from 'react';
import Constants from 'expo-constants';
import { Feather as Icon} from '@expo/vector-icons'
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TextInput, RectButton } from 'react-native-gesture-handler';



const Login = () => {
    const navigation = useNavigation();

    function handleNavigateBack(){
        navigation.goBack();
    };

    function handleNavigationToPoints(){
        navigation.navigate('Datail');
    };

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={handleNavigateBack}>
                <Icon name="arrow-left" size={30} color="#FFF"/>
            </TouchableOpacity>
            <View style={styles.footer}>
                <View style={styles.ajuste}>
                    <TextInput style={styles.input}
                    autoCorrect={false}
                    placeholder="Digite seu E-mail"/>
                    <TextInput style={styles.input}
                    autoCorrect={false}
                    placeholder="Digite sua Senha"/>
                </View>
                <RectButton style={styles.button} onPress={handleNavigationToPoints}>
                    <Text style={styles.buttonText}>Logar</Text>
                </RectButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 20 + Constants.statusBarHeight,
    },
    IconColor: {
        color: '#FFF'
    },
    footer: {},
    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },
    ajuste:{
        marginTop: 200,
    },
    button: {
        backgroundColor: '#0047ab',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    }
});


export default Login;