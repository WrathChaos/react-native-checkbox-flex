import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CheckboxFlex from "./lib/CheckboxFlex";

const App = () => {
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={["#1d2025", "#262041", "#353057"]}
        style={{ flex: 1 }}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{}}>
          <View style={{ marginTop: 12 }}>
            <CheckboxFlex
              title="Wake up Buddy"
              imageSource={require("./assets/dumbell.png")}
            />
          </View>
          <View style={{ marginTop: 12 }}>
            <CheckboxFlex
              title="Morning Run"
              iconContainerStyle={{
                backgroundColor: "#f19731",
              }}
              iconImageStyle={{
                tintColor: "#fff",
              }}
              imageSource={require("./assets/dumbell.png")}
            />
          </View>
          <View style={{ marginTop: 12 }}>
            <CheckboxFlex
              title="Shrink project kick off"
              imageSource={require("./assets/dumbell.png")}
            />
          </View>
          <View style={{ marginTop: 12 }}>
            <CheckboxFlex
              title="Hangouts Sushi"
              imageSource={require("./assets/dumbell.png")}
            />
          </View>
          <View style={{ marginTop: 12 }}>
            <CheckboxFlex
              title="Daily workout"
              iconContainerStyle={{
                backgroundColor: "#f19731",
              }}
              iconImageStyle={{
                tintColor: "#fff",
              }}
              imageSource={require("./assets/dumbell.png")}
            />
          </View>
          <View style={{ marginTop: 12 }}>
            <CheckboxFlex
              title="Call Mom"
              imageSource={require("./assets/dumbell.png")}
            />
          </View>
          <View style={{ marginTop: 12 }}>
            <CheckboxFlex
              title="Check open source issues"
              imageSource={require("./assets/dumbell.png")}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default App;
