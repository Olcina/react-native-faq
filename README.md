[![Build Status](https://travis-ci.com/Olcina/react-native-faq.svg?branch=master)](https://travis-ci.com/Olcina/react-native-faq)

# react-native-faq
React Native F.A.Q.

## Installation
Run `npm install react-native-faq --save` OR `yarn add react-native-faq --save`



## See it in action!
[react-native-faq SNACK example](https://expo.io/snacks/@olcina)


## Components documentation

### Question
 
QUESTION component
 
prop | type | default |  description |
---- | :----: | :-------: | ----------- |
bullets | `array` | `null` |  |
bulletStyle | `object` | "{    marginLeft: '10%'}" |  |
actionText | `string` |  |  |
containerStyle | `object` | "{    backgroundColor: 'lightgrey',    margin: 2,    borderRadius: 5}" |  |
actionStyle | `object` | "{    backgroundColor: \"black\",    borderRadius: 5,    margin: 5}" |  |
actionTextStyle | `object` | "{    fontSize: 30,    textAlign: 'center'}" |  |
replyStyle | `object` | "{    fontSize: 15}" |  |
titleStyle | `object` | "{    fontSize: 20}" |  |
onClick | `func` | null |  |


### FAQ
 

 
F.A.Q. container
It renders and array of questions
each question shoulb be defined according the Question Component.

e.g.
```javascript
const questions = [{
  question: "How can I help you?",
       reply: "You have several options to choose:",
       bullets: bullets,
       actionText: "I'm ready to help!",
       onClick: action_example
}]
```
prop | type | default |  description |
---- | :----: | :-------: | ----------- |
containerStyle | `object` | "{}" | Style for the main View Component of the F.A.Q. This view contains the title and questions container |
titleContainerStyle | `object` | "{}" | Style for the View component title container |
titleStyle | `object` | "{    fontSize: 30,    textAlign: 'center'}" | Style for the Text component containing the title |
title | `string` |  | A string for the title of the FAQ |
questions | `array` |  | An array containing the Questions to be rendered. |
questionContainerStyle | `object` | "{}" | styles for the View component questions container. |

