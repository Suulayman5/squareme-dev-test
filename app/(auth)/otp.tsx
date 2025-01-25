import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../services/api';
import { useRouter } from 'expo-router';

export default function Otp() {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [timer, setTimer] = useState(59);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Handle OTP input changes
  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    // Update OTP state
    setOtp(newOtp);

    // Move to the next input if a digit is entered
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Trigger verification when all fields are filled
    if (newOtp.every((digit) => digit !== '')) {
      verifyOtp(newOtp.join(''));
    }
  };

  // Verify OTP function
  const verifyOtp = async (code: string) => {
    try {
      const response = await api.post('/user/verify-otp', { otp: code });
      if (response.status === 200) {
        router.push('/successful');
      }
    } catch (error) {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Verify Phone Number</Text>
      <Text style={styles.subtitle}>
        Please input the five-digit code that was sent to your phone number
      </Text>

      {/* OTP Input */}
      <View style={styles.codeInputContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace' && index > 0 && !digit) {
                inputRefs.current[index - 1]?.focus();
              }
            }}
          />
        ))}
      </View>

      {/* Timer */}
      <Text style={styles.timer}>{timer > 0 ? formatTime(timer) : ''}</Text>

      {/* Resend and Help */}
      <Text style={styles.helpText}>
        Having trouble receiving SMS?{' '}
        <Text style={styles.resendText} onPress={() => setTimer(59)}>
          Resend
        </Text>
        {'\n'}
        Or try other options below
      </Text>

      {/* Call and WhatsApp Buttons */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={[styles.optionButton, styles.callButton]}>
          <Text style={styles.optionText}>Call me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.optionButton, styles.whatsappButton]}>
          <Text style={styles.optionText}>WhatsApp</Text>
        </TouchableOpacity>
      </View>
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
    color: '#4f4f4f',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 20,
    fontFamily: 'DM Sans',

  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F9F9F9',
    textAlign: 'center',
    fontSize: 20,
    color: '#1C1C1C',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  timer: {
    textAlign: 'center',
    fontSize: 16,
    color: '#A020F0',
    marginBottom: 20,
  },
  helpText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#888',
    marginBottom: 30,
    fontWeight: '500',
    fontFamily: 'DM Sans',
    lineHeight: 20,
  },
  resendText: {
    color: '#A020F0',
    fontWeight: '500',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  optionButton: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  callButton: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },
  whatsappButton: {
    backgroundColor: '#F0F0F0',
  },
  optionText: {
    fontSize: 14,
    color: '#1C1C1C',
  },
});
