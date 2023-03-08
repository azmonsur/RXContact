import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import colors from "../../../assets/theme/colors";
import styles from "./styles";

const Input = ({
  onChangeText,
  style,
  value,
  label,
  icon,
  iconPosition,
  error,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const getFlexDirection = () => {
    return icon && iconPosition
      ? iconPosition === "left"
        ? "row"
        : "row-reverse"
      : null;
  };

  const getBorderColor = () => {
    return error ? colors.danger : focused ? colors.primary : colors.grey;
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {
            alignItems: icon ? "center" : "baseline",
            borderColor: getBorderColor(),
            flexDirection: getFlexDirection(),
          },
        ]}
      >
        <View onPress={() => setShowIcon(!showIcon)}>{icon && icon}</View>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          style={[styles.textInput, style]}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.inputError}>{error}</Text>}
    </View>
  );
};

export default Input;
