import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles from "./CheckboxFlex.style";
const { width: ScreenWidth } = Dimensions.get("window");

interface ICheckboxFlexProps {
  imageSource: any;
}

interface IState {}

export default class CheckboxFlex extends Component<
  ICheckboxFlexProps,
  IState
> {
  render() {
    const { imageSource } = this.props;
    return (
      <RNBounceable
        style={{
          minHeight: 70,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {}}
      >
        <View
          style={{
            height: 25,
            width: 25,
            borderWidth: 1,
            borderColor: "rgba(100,100,100,0.9)",
            borderRadius: 8,
          }}
        ></View>
        <View
          style={{
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 12,
            paddingBottom: 12,
            marginLeft: 12,
            borderRadius: 16,
            width: ScreenWidth * 0.8,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#343c4d",
          }}
        >
          <View
            style={{
              width: 35,
              height: 35,
              marginLeft: 12,
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
            }}
          >
            <Image source={imageSource} style={{ height: 20, width: 20 }} />
          </View>
          <View style={{ marginLeft: 12, width: "50%" }}>
            <Text
              numberOfLines={2}
              style={{ fontSize: 16, color: "#fff", fontWeight: "bold" }}
            >
              Maecenas
            </Text>
          </View>
          <View style={{ marginLeft: "auto", marginRight: 8 }}>
            <Text
              style={{ color: "#fff", letterSpacing: 1.2, fontWeight: "300" }}
            >
              7:00 AM
            </Text>
          </View>
        </View>
      </RNBounceable>
    );
  }
}
