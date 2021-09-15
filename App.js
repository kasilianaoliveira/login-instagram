import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
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
import { styles } from './src/styles/style'
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


