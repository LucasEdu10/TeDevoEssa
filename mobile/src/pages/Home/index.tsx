import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon} from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
// import logo from '../../assets/aperto.png';

const Home = () => {
  const navigation = useNavigation();


  function handleNavigationToPoints(){
    navigation.navigate('Login');
};

    return(
        <View style={styles.container}>
            <View style={styles.main}>
                <Image source={require('../../assets/aperto.png')}/>
                <Text style={styles.title}>Seu Aplicativo ideial para finanças</Text>
                <Text style={styles.description}>Ajudamos a você se organizar com o seu dinheiro.</Text>
            </View>
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleNavigationToPoints}>
                    <View style={styles.buttonIcon}>
                        <Text>
                            <Icon name="arrow-right" color="#FFF" size={24} />
                        </Text>
                    </View>
                    <Text style={styles.buttonText}>Entrar</Text>
                </RectButton>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
      backgroundColor: '#007fff'
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#ffff',
      fontSize: 30,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 20,
    },
  
    description: {
      color: '#ffff',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
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

export default Home;