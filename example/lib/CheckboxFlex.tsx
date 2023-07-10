import * as React from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
/**
 * ? Local Imports
 */
import styles, {
  _cardContainer,
  _checkboxContainer,
  _descriptionTextStyle,
} from './CheckboxFlex.style';
import useStateWithCallback from './helper/useStateWithCallback';

export interface CheckboxFlexProps {
  title: string;
  imageSource: any;
  date?: string;
  isActive?: boolean;
  description?: string;
  disableDate?: boolean;
  titleNumberOfLines?: number;
  checkboxBorderColor?: string;
  activeCardBackgroundColor?: string;
  inactiveCardBackgroundColor?: string;
  disableBuiltInActiveSystemForCheckbox?: boolean;
  disableBuiltInActiveSystemForCard?: boolean;
  activeCheckboxBackgroundColor?: string;
  inactiveCheckboxBackgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  iconContainerStyle?: StyleProp<ViewStyle>;
  dateContainerStyle?: StyleProp<ViewStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
  checkboxContainerStyle?: StyleProp<ViewStyle>;
  descriptionContainerStyle?: StyleProp<ViewStyle>;
  iconImageStyle?: StyleProp<ImageStyle>;
  titleTextStyle?: StyleProp<TextStyle>;
  dateTextStyle?: StyleProp<TextStyle>;
  descriptionTextStyle?: StyleProp<TextStyle>;
  onPress?: (isActive?: boolean) => void;
  onCardPress?: (isActive?: boolean) => void;
}

const CheckboxFlex: React.FC<CheckboxFlexProps> = ({
  style,
  descriptionTextStyle,
  descriptionContainerStyle,
  date,
  description,
  checkboxContainerStyle,
  disableDate,
  dateTextStyle,
  dateContainerStyle,
  title,
  imageSource,
  isActive = false,
  titleNumberOfLines,
  titleTextStyle,
  iconImageStyle,
  titleContainerStyle,
  iconContainerStyle,
  disableBuiltInActiveSystemForCheckbox,
  disableBuiltInActiveSystemForCard,
  onCardPress,
  onPress,
  checkboxBorderColor = 'rgba(100,100,100,0.9)',
  activeCheckboxBackgroundColor = '#63eead',
  inactiveCheckboxBackgroundColor = 'transparent',
  activeCardBackgroundColor = '#2173FF',
  inactiveCardBackgroundColor = '#343c4d',
}) => {
  const [isLocalActive, setIsLocalActive] =
    useStateWithCallback<boolean>(isActive);

  const handlePress = () => {
    if (disableBuiltInActiveSystemForCheckbox) {
      return onPress?.();
    }

    setIsLocalActive(!isLocalActive, (newValue: boolean) => {
      onPress?.(newValue);
    });
  };

  const handleCardPress = () => {
    if (disableBuiltInActiveSystemForCard) {
      return onCardPress?.();
    }

    setIsLocalActive(!isLocalActive, (newValue: boolean) => {
      onCardPress?.(newValue);
    });
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const renderIconContainer = () => (
    <View style={[styles.iconContainer, iconContainerStyle]}>
      <Image
        source={imageSource}
        style={[styles.iconImageStyle, iconImageStyle]}
      />
    </View>
  );

  const renderTitle = () => (
    <View style={[styles.titleContainer, titleContainerStyle]}>
      <Text
        style={[styles.titleTextStyle, titleTextStyle]}
        numberOfLines={titleNumberOfLines || 2}>
        {title}
      </Text>
    </View>
  );

  const renderDate = () =>
    !disableDate && (
      <View style={[styles.dateContainer, dateContainerStyle]}>
        <Text style={[styles.dateTextStyle, dateTextStyle]}>{date}</Text>
      </View>
    );

  const renderCheckbox = () => {
    return (
      <View
        style={[
          _checkboxContainer(
            isLocalActive,
            checkboxBorderColor,
            activeCheckboxBackgroundColor,
            inactiveCheckboxBackgroundColor,
          ),
          checkboxContainerStyle,
        ]}>
        {isLocalActive && (
          <Image
            style={styles.checkboxImageStyle}
            source={require('./check.png')}
          />
        )}
      </View>
    );
  };

  const renderDescription = () => {
    if (!description) {
      return null;
    } else {
      return (
        <View style={[styles.descriptionContainer, descriptionContainerStyle]}>
          <Text
            numberOfLines={4}
            style={[
              _descriptionTextStyle(isLocalActive),
              descriptionTextStyle,
            ]}>
            {description}
          </Text>
        </View>
      );
    }
  };

  const renderCard = () => {
    return (
      <View
        style={_cardContainer(
          isLocalActive,
          activeCardBackgroundColor,
          inactiveCardBackgroundColor,
        )}>
        <View style={styles.cardContainerGlue}>
          {renderIconContainer()}
          {renderTitle()}
          {renderDate()}
        </View>
        {renderDescription()}
      </View>
    );
  };

  return (
    <View style={[styles.container, style]}>
      <RNBounceable bounceEffectIn={0.93} onPress={handlePress}>
        {renderCheckbox()}
      </RNBounceable>
      <RNBounceable bounceEffectIn={0.93} onPress={handleCardPress}>
        {renderCard()}
      </RNBounceable>
    </View>
  );
};

export default CheckboxFlex;
