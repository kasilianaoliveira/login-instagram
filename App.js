import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import LogoInsta from './src/assets/logo.png'


export default function App() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#FFF" translucent={false} />
          <Image source={LogoInsta} style={styles.logo} />

          <TextInput placeholder="Celular, username ou email" style={styles.input} />
          <TextInput placeholder="Digite sua senha" style={styles.input} />

          <View style={styles.forgotContainer}>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} activeOpacity={0.7}>
            <Text style={styles.loginText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.facebookButton} activeOpacity={0.7}>
            <FontAwesome5 name="facebook" size={25} color="#399fff" />
            <Text style={styles.facebookText}>Continue como Kasiliana </Text>
          </TouchableOpacity>

          <View style={styles.divisor}>
            <View style={styles.divisorLine}></View>
            <Text style={{ marginHorizontal: '5%' }}>OU</Text>
            <View style={styles.divisorLine}></View>
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Não possui uma conta?</Text>

            <TouchableOpacity>
              <Text style={styles.signUpButton}>Cadastra-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: Platform.OS === 'android' ? '13%' : '20%',
    marginBottom: Platform.OS === 'android' ? '13%' : '15%',
  },
  input: {
    width: '90%',
    height: 42,
    backgroundColor: '#F4F3F3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  forgotContainer: {
    width: '90%',
    alignItems: 'flex-end'
  },
  forgotText: {
    color: '#399fff',
  },
  loginButton: {
    width: '90%',
    height: 42,
    marginTop: '8%',
    backgroundColor: '#399fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginText: {
    color: '#FFF',
    fontSize: 17
  },

  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15%'
  },

  facebookText: {
    color: '#399fff',
    paddingLeft: 8,
    fontSize: 15
  },
  divisor: {
    width: '90%',
    marginTop: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  divisorLine: {
    width: '45%',
    height: 3,
    backgroundColor: '#EFEDED',
    borderRadius: 5
  },

  signUpContainer: {
    flexDirection: 'row',
    marginTop: '10%',
  },
  signUpText: {
    color: '#c4c4c4'
  },

  signUpButton: {
    color: '#399fff',
    fontWeight: 'bold'
  }

});
