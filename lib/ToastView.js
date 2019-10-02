import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ToastView extends Component {
  static instance = null;

  static getInstance = () => {
    if (ToastView.instance === null) {
      ToastView.instance = new ToastView();
    }
    return ToastView.instance;
  };
  render() {
    return (
      <View>
        <Text> ToastView </Text>
      </View>
    );
  }
}
