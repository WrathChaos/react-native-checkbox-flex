import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles from "./CheckboxFlex.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

interface ICheckboxFlexProps {
  title: string;
  date?: string;
  imageSource: any;
  titleNumberOfLines?: number;
  style?: CustomStyleProp;
  iconContainerStyle?: CustomStyleProp;
  checkboxContainerStyle?: CustomStyleProp;
  iconImageStyle?: CustomImageStyleProp;
  titleTextStyle?: CustomTextStyleProp;
  onPress?: () => void;
}

interface IState {}

export default class CheckboxFlex extends Component<
  ICheckboxFlexProps,
  IState
> {
  renderIconContainer = () => (
    <View style={[styles.iconContainer, this.props.iconContainerStyle]}>
      <Image
        source={this.props.imageSource}
        style={[styles.iconImageStyle, this.props.iconImageStyle]}
      />
    </View>
  );

  renderTitle = () => (
    <View style={styles.titleContainer}>
      <Text
        style={[styles.titleTextStyle, this.props.titleTextStyle]}
        numberOfLines={this.props.titleNumberOfLines || 2}
      >
        {this.props.title}
      </Text>
    </View>
  );

  renderDate = () => (
    <View style={{ marginLeft: "auto", marginRight: 8 }}>
      <Text style={{ color: "rgba(255,255,255,0.7)", fontWeight: "300" }}>
        {this.props.date}
      </Text>
    </View>
  );

  renderCheckbox = () => (
    <View
      style={[styles.checkboxContainer, this.props.checkboxContainerStyle]}
    ></View>
  );

  renderCard = () => (
    <View style={styles.cardContainer}>
      {this.renderIconContainer()}
      {this.renderTitle()}
      {this.renderDate()}
    </View>
  );

  render() {
    const { style, onPress } = this.props;
    return (
      <RNBounceable
        bounceEffect={0.93}
        style={[styles.container, style]}
        onPress={onPress}
      >
        {this.renderCheckbox()}
        {this.renderCard()}
      </RNBounceable>
    );
  }
}
