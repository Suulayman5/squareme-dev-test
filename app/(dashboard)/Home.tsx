import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, SafeAreaView } from 'react-native';

const HomeScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <View style={styles.profile}>
            <Image 
                source={{ uri: 'https://via.placeholder.com/40' }} 
                style={styles.profileImage} 
            />
            <View>
                <Text style={styles.greeting}>Hello,</Text>
                <Text style={styles.name}>David Oloye</Text>
            </View>
            </View>
            <View style={styles.headerIcons}>
            <Image source={require('../../assets/images/Notification.png')}/>
            <Image source={require('../../assets/images/Notification(1).png')}/>
            </View>
        </View>

        <Text style={styles.walletText}>Wallet Balance</Text>
        <Text style={styles.walletAmount}>₦ XXXXX</Text>

        <View style={styles.buttonContainer}>
            <Pressable style={styles.fundButton} onPress={() => router.push('./wallet-keypad')}>
                <Text style={styles.fundText}>Fund</Text>
            </Pressable>
            <Pressable style={styles.withdrawButton} onPress={() => router.push('./wallet-keypad')}>
                <Text style={styles.withdrawText}>Withdraw</Text>
            </Pressable>
        </View>
      <Text style={styles.quickAccessTitle}>Quick Access</Text>
      <View style={styles.quickAccessContainer}>
        <View style={styles.accessItem}>
        <Image source={require('../../assets/images/Group154.png')}/>
        <Text style={styles.accessText}>Pay Bills</Text>
        </View>
        <View style={styles.accessItem}>
        <Image source={require('../../assets/images/Group154(1).png')}/>
        <Text style={styles.accessText}>Giftcards</Text>
        </View>
        <View style={styles.accessItem}>
        <Image source={require('../../assets/images/Group154(2).png')}/>
        <Text style={styles.accessText}>Cards</Text>
        </View>
      </View>

      <Text style={styles.recentTitle}>Recent Transactions</Text>
      <View style={styles.noTransaction}>
      <Image source={require('../../assets/images/note.png')}/>
      <Text style={styles.noTransactionText}>No recent transaction</Text>
        <Text style={styles.noTransactionSubText}>
          You have not performed any transaction, you can start sending and requesting money from your contacts.
        </Text>
      </View>

      <View style={styles.bottomNav}>
      <Image source={require('../../assets/images/home-2.png')}/>
      <Pressable onPress={() => router.push('./wallet-keypad')}>
        <Image source={require('../../assets/images/category.png')}/>
      </Pressable>
      <Image source={require('../../assets/images/profile.png')}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FD',
    paddingHorizontal: 20,
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    fontSize: 14,
    color: '#828282',
    fontFamily: 'DM Sans',
    fontWeight: '400',

  },
  name: {
    fontSize: 14,
    color: '#0C0C26',
    fontFamily: 'DM Sans',
    fontWeight: '400',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  walletText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6C6C6C',
    marginTop: 30,
    marginBottom: 10,
  },
  walletAmount: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000A4A',
    marginVertical: 10,
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  fundButton: {
    backgroundColor: '#000A4A',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  withdrawButton: {
    backgroundColor: '#E1E1E1',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  fundText: {
    color: 'white',
    fontWeight: '500',
    fontFamily: 'DM Sans',
    textAlign: 'center',
    fontSize: 14,
  },
  withdrawText: {
    color: '#747474',
    fontWeight: '500',
    fontFamily: 'DM Sans',
    textAlign: 'center',
    fontSize: 14,
  },
  quickAccessTitle: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 16,
    marginTop: 40,
    fontFamily: 'Circular Std'
  },
  quickAccessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '80%'
  },
  accessItem: {
    alignItems: 'center',
  },
  accessText: {
    marginTop: 10,
    fontSize: 14,
    color: '#3E3E3E',
    fontFamily: 'Circular Std',
    fontWeight: '700',

},
  recentTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 40,
    fontFamily: 'Circular Std',
  },
  noTransaction: {
    alignItems: 'center',
    marginTop: 20,
  },
  noTransactionText: {
    fontSize: 17,
    fontWeight: '500',
    marginTop: 10,
    fontFamily: 'Circular Std',

  },
  noTransactionSubText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#9a9a9a',
    paddingHorizontal: 30,
    lineHeight: 20,
    marginTop: 5,
    fontFamily: 'DM Sans',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default HomeScreen;
