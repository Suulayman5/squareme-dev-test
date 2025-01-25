import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from "react-native";

const WalletKeypad = () => {
    const router = useRouter();
  const [amount, setAmount] = useState("");

  const handleKeyPress = (key: string) => {
    if (key === "backspace") {
      setAmount((prev) => prev.slice(0, -1));
    } else if (key === "." && amount.includes(".")) {
      // Prevent multiple dots
      return;
    } else {
      setAmount((prev) => prev + key);
    }
  };

  const handleRequest = () => {
    // Handle the request action
    console.log("Requesting", amount);
  };

  const handleSend = () => {
    // Handle the send action
    console.log("Sending", amount);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/scan-barcode.png")}
          style={{ width: 24, height: 24 }}
        />
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Wallet Balance</Text>
          <Text style={styles.balanceValue}>₦ 5,200</Text>
        </View>
        <Image source={require("../../assets/images/clock.png")} />
      </View>

      {/* Keypad Section */}
      <View style={styles.keypadSection}>
        <Text style={styles.amount}>₦ {amount || "0"}</Text>
        <View style={styles.keypadGrid}>
          {[...Array(9).keys()].map((num) => (
            <TouchableOpacity
              key={num + 1}
              style={styles.keypadButton}
              onPress={() => handleKeyPress((num + 1).toString())}
            >
              <Text style={styles.keypadButtonText}>{num + 1}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.keypadButton}
            onPress={() => handleKeyPress(".")}
          >
            <Text style={styles.keypadButtonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keypadButton}
            onPress={() => handleKeyPress("0")}
          >
            <Text style={styles.keypadButtonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keypadButton}
            onPress={() => handleKeyPress("backspace")}
          >
            <Text style={styles.keypadButtonText}>&#x232B;</Text>
          </TouchableOpacity>
        </View>

        {/* Request & Send Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={handleRequest}>
            <Text style={styles.actionButtonText}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleSend}>
            <Text style={styles.actionButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Pressable onPress={() => router.push("/Home")}>
            <Image source={require("../../assets/images/home-2(1).png")} />
        </Pressable>
        <Image source={require("../../assets/images/category(1).png")} />
        <Image source={require("../../assets/images/profile.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0c26",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  balanceContainer: {
    backgroundColor: "rgba(159, 86, 212, 0.1)",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    gap: 4,
    alignItems: "center",
  },
  balanceLabel: {
    fontSize: 12,
    textAlign: "center",
    fontFamily: "WorkSans",
    fontWeight: "400",
    color: "rgba(189, 189, 189, 1)",
  },
  balanceValue: {
    fontSize: 17,
    fontWeight: "700",
    color: "#fff",
    fontFamily: "WorkSans",
    textAlign: "center",
  },
  keypadSection: {
    alignItems: "center",
  },
  amount: {
    fontSize: 64,
    fontWeight: "400",
    color: "#fff",
    marginBottom: 16,
    fontFamily: "Poppins",
  },
  keypadGrid: {
    width: "70%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  keypadButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    gap: 10,
  },
  keypadButtonText: {
    fontSize: 21,
    color: "#BDBDBD",
    lineHeight: 31.5,
    fontWeight: "400",
    fontFamily: "Poppins",
    textAlign: "center",
  },
  actionButtonsContainer: {
    flexDirection: "row",
    marginTop: 16,
    gap: 24,
  },
  actionButton: {
    backgroundColor: "rgba(106, 106, 106, 0.3)",
    paddingVertical: 13,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginHorizontal: 8,
  },
  actionButtonText: {
    color: "#949494",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1a183a",
    paddingVertical: 12,
  },
});

export default WalletKeypad;
