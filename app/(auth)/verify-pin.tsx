import { useRouter } from 'expo-router';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const VerifyPin = () => {
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
      inputRefs.current[index - 1]?.focus(); 
    }
  };

  useEffect(() => {
    if (pin.length === 6 && !pin.includes('')) {
      router.push('./pin-successful');
    }
  }, [pin]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>&lt;</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Confirm PIN</Text>
      <Text style={styles.subtitle}>Input your six digit PIN again</Text>

      <View style={styles.pinContainer}>
        {Array.from({ length: 6 }).map((_, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            style={styles.pinBox}
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

export default VerifyPin;
