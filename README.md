<img alt="React Native Checkbox Flex" src="assets/logo.png" width="1050"/>

[![React Native Checkbox Flex](https://img.shields.io/badge/-Extremely%20easy%20to%20create%20a%20React%20Native%20Component%20Library%20with%20both%20Stateful%20and%20Functional%20Component%20Examples-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-checkbox-flex)

[![npm version](https://img.shields.io/npm/v/react-native-checkbox-flex.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-checkbox-flex)
[![npm](https://img.shields.io/npm/dt/react-native-checkbox-flex.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-checkbox-flex)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Checkbox Flex"
        src="assets/Screenshots/typescript.jpg" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-checkbox-flex
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"@freakycoder/react-native-bounceable": "^0.2.4",
```

# Usage

## Import

```jsx
import CheckboxFlex from "react-native-checkbox-flex";
```

## Fundamental Usage

```jsx
<MyComponent />
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Fundamentals

| Property    |  Type  |  Default  | Description           |
| ----------- | :----: | :-------: | --------------------- |
| title       | string | undefined | change the title      |
| description | string | undefined | change the descrition |

## Customization (Optionals)

| Property       |   Type    |  Default  | Description                                                            |
| -------------- | :-------: | :-------: | ---------------------------------------------------------------------- |
| enableButton   |  boolean  |   false   | let you enable the button (must use it for button)                     |
| onPress        | function  | undefined | set your own logic for the button functionality when it is pressed     |
| buttonText     |  string   | undefined | change the button's text                                               |
| style          | ViewStyle |  default  | set or override the style object for the main container                |
| buttonStyle    | ViewStyle |  default  | set or override the style object for the button style                  |
| ImageComponent |   Image   |  default  | set your own component instead of default react-native Image component |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

# Change Log

Change log will be here !

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Checkbox Flex is available under the MIT license. See the LICENSE file for more info.
