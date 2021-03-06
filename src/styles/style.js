import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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