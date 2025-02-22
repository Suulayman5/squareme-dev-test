import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const PinSuccessful = () => {
    const router = useRouter()
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image 
          source={require('../../assets/images/Group144.png')} 
          style={styles.successIcon} 
        />
      </View>
      
      <Text style={styles.title}>Pin set successfully!</Text>
      <Text style={styles.subtitle}>
        Your security pin has been set successfully.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/Home')}>
        <Text style={styles.buttonText}>Okay!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  successIcon: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#4d4d4d',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000a4a',
    paddingVertical: 15,
    paddingHorizontal: 96,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'DM Sans'
  },
});

export default PinSuccessful;
