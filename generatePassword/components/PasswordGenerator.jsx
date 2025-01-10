import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, Alert, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [passwordLength, setPasswordLength] = useState(8);

  const toggleLowercase = () => setIncludeLowercase((prev) => !prev);
  const toggleUppercase = () => setIncludeUppercase((prev) => !prev);
  const toggleNumbers = () => setIncludeNumbers((prev) => !prev);
  const toggleSpecialChars = () => setIncludeSpecialChars((prev) => !prev);

  const generatePassword = () => {
    if (passwordLength < 5 || passwordLength > 12) {
      Alert.alert("Invalid Length", "Password length must be between 5 and 12 characters.");
      return;
    }

    let generatedPassword = "";

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let allChars = "";
    if (includeLowercase) allChars += lowerCase;
    if (includeUppercase) allChars += upperCase;
    if (includeNumbers) allChars += numbers;
    if (includeSpecialChars) allChars += specialChars;

    if (!allChars) {
      Alert.alert("Invalid Selection", "Please select at least one character type.");
      return;
    }

    // Ensure at least one character from each selected type is included
    if (includeLowercase) generatedPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    if (includeUppercase) generatedPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
    if (includeNumbers) generatedPassword += numbers[Math.floor(Math.random() * numbers.length)];
    if (includeSpecialChars) generatedPassword += specialChars[Math.floor(Math.random() * specialChars.length)];

    // Fill the remaining length with random characters from all selected types
    for (let i = generatedPassword.length; i < passwordLength; i++) {
      generatedPassword += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the characters in the password to make it more random
    setPassword(generatedPassword.split("").sort(() => 0.5 - Math.random()).join(""));
  };

  const resetPassword = () => {
    setPassword("");
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>

          <View style={styles.inputWrapper}>
            <Text style={styles.heading} >Password Length</Text>
            <TextInput
              style={styles.inputStyle}
              keyboardType="numeric"
              value={String(passwordLength)}
              onChangeText={(text) => setPasswordLength(Number(text))}
              placeholder={String(passwordLength)}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include Lowercase</Text>
            <BouncyCheckbox
              isChecked={includeLowercase}
              onPress={toggleLowercase}
              fillColor="#29AB87"
              style={styles.checkbox}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include Uppercase</Text>
            <BouncyCheckbox
              isChecked={includeUppercase}
              onPress={toggleUppercase}
              fillColor="#FED85D"
              style={styles.checkbox}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include Numbers</Text>
            <BouncyCheckbox
              isChecked={includeNumbers}
              onPress={toggleNumbers}
              fillColor="#C9A0DC"
              style={styles.checkbox}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include Symbols</Text>
            <BouncyCheckbox
              isChecked={includeSpecialChars}
              onPress={toggleSpecialChars}
              fillColor="#FC80A5"
              style={styles.checkbox}
            />
          </View>

          <View style={styles.formActions}>
            <TouchableOpacity style={styles.primaryBtn} onPress={generatePassword}>
              <Text style={styles.primaryBtnTxt}>Generate Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryBtn} onPress={resetPassword}>
              <Text style={styles.secondaryBtnTxt}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>

        {password ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to Copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 2,
  },
  description: {
    color: "#758283",
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inputStyle: {
    padding: 8,
    width: "30%",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#16213e",
  },
  checkbox: {
    padding: 8,
    width: "10%",
  },
  formActions: {
    flexDirection: "row",
    justifyContent: "center",
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: "#5DA3FA",
  },
  primaryBtnTxt: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: "#CAD5E2",
  },
  secondaryBtnTxt: {
    textAlign: "center",
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: "#ffffff",
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 12,
    color: "#000",
  },
});

export default PasswordGenerator;
