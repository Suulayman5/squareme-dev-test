import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../services/api';
import { useRouter } from 'expo-router';

const CreatePin = () => {
  const router = useRouter();
  const [pin, setPin] = useState<string[]>([]);

//   const handlePress = (value: string) => {
//     if (pin.length < 6) {
//       setPin([...pin, value]);
//     }
//   };

//   const handleDelete = () => {
//     setPin(pin.slice(0, -1));
//   };

  useEffect(() => {
    if (pin.length === 6) {
      VerifyPin();
    }
  }, [pin]);

  const VerifyPin = async () => {
    try {
      const response = await api.post('/user/verify-pin', { pin: pin.join('') });
      if (response.status === 200) {
        router.navigate('./verify-pin');
      }
    } catch (error) {
      Alert.alert('An error occurred. Please try again.');
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
          <View
            key={index}
            style={[styles.pinBox, { backgroundColor: pin[index] ? '#000' : '#F4F8FF' }]}
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
  },
});

export default CreatePin;
