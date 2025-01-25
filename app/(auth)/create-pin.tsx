import { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../services/api';
import { useRouter } from 'expo-router';

const CreatePin = () => {
  const router = useRouter();
  const [pin, setPin] = useState<string[]>([]);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handlePinChange = (value: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index: number) => {
    const newPin = [...pin];
    newPin[index] = ''; 
    setPin(newPin);
    if (index > 0) {
      inputRefs.current[index - 1]?.focus(); // Focus the previous field
    }
  };

  useEffect(() => {
    // Submit when pin is full
    if (pin.length === 6 && !pin.includes('')) {
      verifyPin();
    }
  }, [pin]);

  const verifyPin = async () => {
    try {
      const response = await api.post('/user/set-pin', { pin: pin.join('') });
    if (response.status === 201 || response.status === 401 ) {
        router.navigate('./verify-pin');
      } else {
        Alert.alert('An error occurred. Please try again.');
      }
    } catch (error) {
      // Alert.alert('An error occurred. Please try again.');
      if (error) {
        router.push('/verify-pin');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>&lt;</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Set Your Security PIN</Text>
      <Text style={styles.subtitle}>Set a six digit PIN that you would use for all transactions</Text>

      <View style={styles.pinContainer}>
        {Array.from({ length: 6 }).map((_, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            style={[styles.pinBox, { backgroundColor: pin[index] ? '#F4F8FF' : '#F4F8FF' }]} // No color change when filled
            keyboardType="numeric"
            maxLength={1}
            value={pin[index]}
            onChangeText={(value) => handlePinChange(value, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace' && pin[index] === '') {
                handleBackspace(index);
              }
            }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backText: {
    fontSize: 24,
    color: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#6e6e6e',
    textAlign: 'center',
    marginBottom: 40,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  pinBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F4F8FF',
    textAlign: 'center',
    color: '#1C1C1C',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
});

export default CreatePin;
