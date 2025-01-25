import { Link } from 'expo-router';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import React from 'react';

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); 
  };

  const renderView = () => {
    switch (currentIndex) {
      case 0:
        return (
          <ImageBackground
            source={require('../../assets/images/image1.png')} 
            style={styles.backgroundImage}
          >
            <View style={styles.container}>
              <Image source={require('../../assets/images/header.png')} style={styles.logo} />
              <View style={styles.content}>
                <View style={styles.pagination}>
                  <View style={[styles.dot, styles.activeDot]} />
                  <View style={styles.dot} />
                  <View style={styles.dot} />
                </View>
                <Text style={styles.title}>Fast and easy payments to anyone.</Text>
                <Text style={styles.subtitle}>Receive funds sent to you in seconds.</Text>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity>
                    <Link href="/create-account" style={styles.skipButton}>
                      Skip
                    </Link>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <Text style={styles.nextButtonText}>Next</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        );
      case 1:
        return (
          <ImageBackground
            source={require('../../assets/images/image2.png')} 
            style={styles.backgroundImage}
          >
            <View style={styles.container}>
              <Image source={require('../../assets/images/header.png')} style={styles.logo} />
              <View style={styles.content}>
                <View style={styles.pagination}>
                  <View style={styles.dot} />
                  <View style={[styles.dot, styles.activeDot]} />
                  <View style={styles.dot} />
                </View>
                <Text style={styles.title}>A super secure way to pay your bills.</Text>
                <Text style={styles.subtitle}>Pay your bills with the cheapest rates in town.</Text>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity>
                    <Link href="/create-account" style={styles.skipButton}>
                      Skip
                    </Link>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <Text style={styles.nextButtonText}>Next</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        );
      case 2:
        return (
          <ImageBackground
            source={require('../../assets/images/image3.png')} 
            style={styles.backgroundImage}
          >
            <View style={styles.container}>
              <Image source={require('../../assets/images/header.png')} style={styles.logo} />
              <View style={styles.content}>
                <View style={styles.pagination}>
                  <View style={styles.dot} />
                  <View style={styles.dot} />
                  <View style={[styles.dot, styles.activeDot]} />
                </View>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>A super secure way to pay your bills.</Text>
                </View>
                <View>
                  <Text style={styles.subtitle}>Pay your bills with the cheapest rates in town.</Text>
                </View>
                <View style={styles.buttonsContainer}>
                 
                  <TouchableOpacity style={styles.getStarted}>
                    <Link href="/create-account" style={styles.getStartedText}>
                      Get Started
                    </Link>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        );
      default:
        return null;
    }
  };

  return <>{renderView()}</>;
};const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 30,
    marginTop: 40,
    backgroundColor: 'linear-gradient(180deg, rgba(105, 105, 105, 0) 0%, #000000 88.67%)',
    fontFamily: "DM Sans"
  },
  logo: {
    width: 154.19,
    height: 20,
    alignSelf: 'flex-start', 
    opacity: 1, 
  },
  content: {
    marginBottom: 40,
  },
  titleContainer: {
    marginBottom: 10, 
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: 31.25,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 18.23,
    color: 'rgba(255, 255, 255, 0.8)', 
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  dot: {
    width: 28,
    height: 5,
    borderRadius: 7,
    backgroundColor: 'rgba(217, 217, 217, 0.5)',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  skipButton: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  nextButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 34,
    borderRadius: 10, 
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  getStarted: {
    paddingVertical: 15,
    paddingHorizontal: 34,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10, 

  },
  getStartedText: {
    textAlign: 'center',
  }

});


export default Index;
