import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import colors from "../../../assets/theme/colors";
import styles from "./styles";

const Message = ({
  message,
  onDismiss,
  primary,
  danger,
  success,
  info,
  retry,
  retryFn,
}) => {
  const [userDismissed, setUserDismissed] = useState(false);
  const getBgColor = () => {
    return info
      ? colors.secondary
      : primary
      ? colors.primary
      : danger
      ? colors.danger
      : success
      ? colors.success
      : null;
  };

  return (
    <>
      {userDismissed ? null : (
        <TouchableOpacity
          style={[styles.wrapper, { backgroundColor: getBgColor() }]}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                color: colors.white,
              }}
            >
              {message}
            </Text>
            {retry && !typeof onDismiss === "function" && (
              <TouchableOpacity onPress={retryFn}>
                <Text style={{ color: colors.white }}>Retry</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => {
                setUserDismissed(true);
                onDismiss();
              }}
            >
              {typeof onDismiss === "function" && (
                <Text style={{ color: colors.white }}>x</Text>
              )}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
