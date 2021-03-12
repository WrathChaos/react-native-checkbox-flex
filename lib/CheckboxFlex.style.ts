import {
  ViewStyle,
  ImageStyle,
  Dimensions,
  TextStyle,
  StyleSheet,
} from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

export const _checkboxContainer = (
  isActive: boolean,
  borderColor: string,
  activeBackgroundColor: string,
  inactiveBackgroundColor: string,
): ViewStyle => ({
  width: 25,
  height: 25,
  borderWidth: 1,
  borderRadius: 8,
  alignItems: "center",
  justifyContent: "center",
  borderColor: borderColor,
  backgroundColor: isActive ? activeBackgroundColor : inactiveBackgroundColor,
});

export const _cardContainer = (
  isActive: boolean,
  activeBackgroundColor: string,
  inactiveBackgroundColor: string,
): ViewStyle => ({
  paddingLeft: 8,
  paddingRight: 8,
  paddingTop: 16,
  paddingBottom: 16,
  marginLeft: 12,
  borderRadius: 16,
  width: ScreenWidth * 0.8,
  backgroundColor: isActive ? activeBackgroundColor : inactiveBackgroundColor,
});
export const _descriptionTextStyle = (isActive: boolean): TextStyle => ({
  fontSize: 15,
  color: isActive ? "rgba(255,255,255,0.5)" : "#86889b",
  fontWeight: "600",
});

interface Style {
  container: ViewStyle;
  iconContainer: ViewStyle;
  iconImageStyle: ImageStyle;
  titleContainer: ViewStyle;
  titleTextStyle: TextStyle;
  cardContainerGlue: ViewStyle;
  checkboxImageStyle: ImageStyle;
  descriptionContainer: ViewStyle;
  dateContainer: ViewStyle;
  dateTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    minHeight: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: 35,
    height: 35,
    marginLeft: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  iconImageStyle: {
    width: 20,
    height: 20,
  },
  titleContainer: {
    width: "50%",
    marginLeft: 12,
  },
  titleTextStyle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  cardContainerGlue: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxImageStyle: {
    width: 10,
    height: 10,
  },
  descriptionContainer: {
    width: "80%",
    marginTop: 8,
    marginLeft: 60,
  },
  dateContainer: {
    marginRight: 8,
    marginLeft: "auto",
  },
  dateTextStyle: {
    fontWeight: "600",
    color: "rgba(255,255,255,0.9)",
  },
});
