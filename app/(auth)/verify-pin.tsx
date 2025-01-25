import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const VerifyPin = () => {
 const router = useRouter()
  const [pin, setPin] = useState<string[]>([]);

  const handlePress = (value: string) => {
    if (pin.length < 6) {
      setPin([...pin, value]);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };
  useEffect(() => {
      if (pin.length === 6) {
        router.push('./pin-successful');
      }
    }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>&lt;</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Confirm PIN</Text>
      <Text style={styles.subtitle}>Input your six digit PIN again</Text>

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

export default VerifyPin;
