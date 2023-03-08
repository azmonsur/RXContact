import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import colors from "../../../assets/theme/colors";
import styles from "./styles";

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  loading,
  disabled,
  onPress,
}) => {
  const getBgColor = () => {
    if (disabled) return colors.grey;

    return secondary
      ? colors.secondary
      : primary
      ? colors.primary
      : danger
      ? colors.danger
      : null;
  };

  return (
    <TouchableOpacity
      style={[styles.wrapper, { backgroundColor: getBgColor() }]}
      disabled={disabled}
      onPress={onPress}
    >
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator color={colors.white} style={{ marginRight: 5 }} />
        )}
        {title && (
          <Text
            style={{
              color: disabled
                ? colors.black
                : loading
                ? colors.grey
                : colors.white,
            }}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
