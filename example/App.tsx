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
          <ScrollView>
            <View style={{ marginTop: 12 }}>
              <CheckboxFlex
                title="Morning Run"
                date="9:00 AM"
                description="Nulla vitae elit libero, a pharetra augue."
                iconContainerStyle={{
                  backgroundColor: "#1EC2E1",
                }}
                iconImageStyle={{
                  tintColor: "#fff",
                }}
                imageSource={require("./assets/running.png")}
              />
            </View>
            <View style={{ marginTop: 12 }}>
              <CheckboxFlex
                title="Shrink project kick off"
                date="9:00 AM"
                iconContainerStyle={{
                  backgroundColor: "#F14603",
                }}
                iconImageStyle={{
                  tintColor: "#fff",
                }}
                imageSource={require("./assets/project-management.png")}
              />
            </View>
            <View style={{ marginTop: 12 }}>
              <CheckboxFlex
                description="Donec sed odio dui. Vestibulum id ligula porta felis euismod semper."
                title="Hangouts Sushi"
                date="9:00 AM"
                iconContainerStyle={{
                  backgroundColor: "#6F6CFF",
                }}
                iconImageStyle={{
                  tintColor: "#fff",
                }}
                imageSource={require("./assets/sushi.png")}
              />
            </View>
            <View style={{ marginTop: 12 }}>
              <CheckboxFlex
                title="Daily workout"
                description={`• Squat 1x3\n• Push up 10x4`}
                iconContainerStyle={{
                  backgroundColor: "#f19731",
                }}
                iconImageStyle={{
                  tintColor: "#fff",
                }}
                date="9:00 AM"
                imageSource={require("./assets/dumbell.png")}
              />
            </View>
            <View style={{ marginTop: 12 }}>
              <CheckboxFlex
                description="Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Maecenas faucibus mollis interdum.

             Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
                title="Call Mom"
                date="9:00 AM"
                iconContainerStyle={{
                  backgroundColor: "#FE877A",
                }}
                iconImageStyle={{
                  tintColor: "#fff",
                }}
                imageSource={require("./assets/balloon.png")}
              />
            </View>
            <View style={{ marginTop: 12 }}>
              <CheckboxFlex
                title="Check open source issues"
                date="9:00 AM"
                imageSource={require("./assets/programming-code-signs.png")}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default App;
