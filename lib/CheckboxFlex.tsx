import * as React from "react";
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
import styles, {
  _cardContainer,
  _checkboxContainer,
  _descriptionTextStyle,
} from "./CheckboxFlex.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

interface ICheckboxFlexProps {
  title: string;
  date?: string;
  imageSource: any;
  isActive?: boolean;
  description?: string;
  disableDate?: boolean;
  titleNumberOfLines?: number;
  checkboxBorderColor?: string;
  activeCardBackgroundColor?: string;
  inactiveCardBackgroundColor?: string;
  disableBuiltInActiveSystem?: boolean;
  activeCheckboxBackgroundColor?: string;
  inactiveCheckboxBackgroundColor?: string;
  style?: CustomStyleProp;
  iconContainerStyle?: CustomStyleProp;
  dateContainerStyle?: CustomStyleProp;
  titleContainerStyle?: CustomStyleProp;
  checkboxContainerStyle?: CustomStyleProp;
  descriptionContainerStyle?: CustomStyleProp;
  iconImageStyle?: CustomImageStyleProp;
  titleTextStyle?: CustomTextStyleProp;
  dateTextStyle?: CustomTextStyleProp;
  descriptionTextStyle?: CustomTextStyleProp;
  onPress?: (isActive?: boolean) => void;
}

interface IState {
  isActive: boolean;
}

export default class CheckboxFlex extends React.Component<
  ICheckboxFlexProps,
  IState
> {
  constructor(props: ICheckboxFlexProps) {
    super(props);
    this.state = {
      isActive: props.isActive || false,
    };
  }

  handlePress = () => {
    if (!this.props.disableBuiltInActiveSystem) {
      this.setState({ isActive: !this.state.isActive }, () => {
        this.props.onPress && this.props.onPress(this.state.isActive);
      });
    } else {
      this.props.onPress && this.props.onPress();
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  renderIconContainer = () => (
    <View style={[styles.iconContainer, this.props.iconContainerStyle]}>
      <Image
        source={this.props.imageSource}
        style={[styles.iconImageStyle, this.props.iconImageStyle]}
      />
    </View>
  );

  renderTitle = () => (
    <View style={[styles.titleContainer, this.props.titleContainerStyle]}>
      <Text
        style={[styles.titleTextStyle, this.props.titleTextStyle]}
        numberOfLines={this.props.titleNumberOfLines || 2}
      >
        {this.props.title}
      </Text>
    </View>
  );

  renderDate = () =>
    this.props.disableDate && (
      <View style={[styles.dateContainer, this.props.dateContainerStyle]}>
        <Text style={[styles.dateTextStyle, this.props.dateTextStyle]}>
          {this.props.date}
        </Text>
      </View>
    );

  renderCheckbox = () => {
    const {
      checkboxBorderColor = "rgba(100,100,100,0.9)",
      activeCheckboxBackgroundColor = "#63eead",
      inactiveCheckboxBackgroundColor = "transparent",
    } = this.props;
    return (
      <View
        style={[
          _checkboxContainer(
            this.state.isActive,
            checkboxBorderColor,
            activeCheckboxBackgroundColor,
            inactiveCheckboxBackgroundColor,
          ),
          this.props.checkboxContainerStyle,
        ]}
      >
        {this.state.isActive && (
          <Image
            style={styles.checkboxImageStyle}
            source={require("./check.png")}
          />
        )}
      </View>
    );
  };

  renderDescription = () =>
    (this.props.description != null || this.props.description != undefined) && (
      <View
        style={[
          styles.descriptionContainer,
          this.props.descriptionContainerStyle,
        ]}
      >
        <Text
          numberOfLines={4}
          style={[
            _descriptionTextStyle(this.state.isActive),
            this.props.descriptionTextStyle,
          ]}
        >
          {this.props.description}
        </Text>
      </View>
    );

  renderCard = () => {
    const {
      activeCardBackgroundColor = "#2173FF",
      inactiveCardBackgroundColor = "#343c4d",
    } = this.props;
    return (
      <View
        style={_cardContainer(
          this.state.isActive,
          activeCardBackgroundColor,
          inactiveCardBackgroundColor,
        )}
      >
        <View style={styles.cardContainerGlue}>
          {this.renderIconContainer()}
          {this.renderTitle()}
          {this.renderDate()}
        </View>
        {this.renderDescription()}
      </View>
    );
  };

  render() {
    const { style } = this.props;
    return (
      <RNBounceable
        bounceEffect={0.93}
        style={[styles.container, style]}
        onPress={this.handlePress}
      >
        {this.renderCheckbox()}
        {this.renderCard()}
      </RNBounceable>
    );
  }
}
