import React, { Component } from "react";
import { Text, View } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./CheckboxFlex.style";

interface ICheckboxFlexProps {}

interface IState {}

export default class CheckboxFlex extends Component<ICheckboxFlexProps, IState> {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
