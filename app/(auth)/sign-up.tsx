import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import api from '../services/api';

export default function Signup() {
  const router = useRouter()

  const handleSignUp = async () => {
    try {
      const response = await api.post('/user/create')
      if (response.status === 200) {
        router.push('/otp')
      }
    } catch (error) {
      console.error(error)
      Alert.alert('Error signing up')
    }
  }
  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton} onPress={()=> router.back()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Enter Your Phone Number</Text>
      <Text style={styles.subtitle}>
        We’ll send an SMS with a code to verify your phone number
      </Text>

      {/* Phone Number Input */}
      <View style={styles.phoneInputContainer}>
        <View style={styles.countryCode}>
          <Image
            source={{ uri: 'https://flagcdn.com/w320/ng.png' }} // Replace with a Nigerian flag image
            style={styles.flag}
          />
          <Text style={styles.countryText}>+234</Text>
          <Ionicons name="chevron-down" size={16} color="#000" />
        </View>
        <TextInput
          style={styles.phoneInput}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
      </View>

      {/* Referral Input */}
      <TouchableOpacity style={styles.referralContainer}>
        <Text style={styles.referralText}>Have a referral ID?</Text>
        <Ionicons name="gift-outline" size={20} color="#A020F0" />
      </TouchableOpacity>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.proceedButton} onPress={handleSignUp}>
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.loginLink}>Login here</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginBottom: 20,
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderRightColor: '#E5E5E5',
  },
  flag: {
    width: 20,
    height: 15,
    marginRight: 5,
  },
  countryText: {
    fontSize: 14,
    color: '#1C1C1C',
    marginRight: 5,
  },
  phoneInput: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    color: '#1C1C1C',
  },
  referralContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 30,
  },
  referralText: {
    fontSize: 14,
    color: '#A020F0',
  },
  proceedButton: {
    backgroundColor: '#000080',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  proceedText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  loginLink: {
    color: '#A020F0',
    fontWeight: 'bold',
  },
});
