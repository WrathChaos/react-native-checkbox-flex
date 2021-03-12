import {
  ViewStyle,
  ImageStyle,
  Dimensions,
  TextStyle,
  StyleSheet,
} from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  container: ViewStyle;
  iconContainer: ViewStyle;
  iconImageStyle: ImageStyle;
  titleContainer: ViewStyle;
  titleTextStyle: TextStyle;
  checkboxContainer: ViewStyle;
  cardContainer: ViewStyle;
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
  checkboxContainer: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "rgba(100,100,100,0.9)",
  },
  cardContainer: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: 12,
    borderRadius: 16,
    width: ScreenWidth * 0.8,
    backgroundColor: "#343c4d",
  },
});
