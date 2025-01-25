import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useRouter } from 'expo-router';


const createAccount = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./../../assets/images/header.png')} style={styles.logo}/>
      </View>
      <View style={styles.auth}> 
          <Pressable style={styles.signUp} onPress={() => router.push('/sign-up')}>
            <Text style={styles.signUpText}>Create an account</Text>
          </Pressable>
        <Pressable style={styles.signIn} onPress={()=> router.push('/Home')}>
          <Text style={styles.signInText}>I have an account</Text>
        </Pressable>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default createAccount

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000A4A', 
  },
  container : {
    backgroundColor: '#000A4A', 
    flex: 1,
    height: '100%', 
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  logoContainer: {
    flexGrow: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250, 
    height: 60,
    resizeMode: 'contain',
  },
  auth: {
    width: '100%',
    gap: 20,
    alignItems: 'center',

    paddingHorizontal: 24,
  },
  signUp: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 8,
    paddingVertical: 14,
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 14,
    fontWeight: 500,
    color: ' rgba(0, 10, 74, 1)',
    lineHeight: 18.23,
    fontFamily: 'DM Sans'
  },
  signIn: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(255, 255, 255, 1)',
    width: '100%',

  },
  signInText: {
    fontSize: 14,
    fontWeight: 500,
    color: ' rgba(255, 255, 255, 1)',
    lineHeight: 18.23,
    fontFamily: 'DM Sans'
  },
  
})