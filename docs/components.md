

## COMPONENTS

### FAQ

It renders and array of questions
each question should be defined according the [Question](#Question) Component.

e.g.
```javascript

//Define some questions
const questions = [{
  question: "How can I help you?",
       reply: "You have several options to choose:",
       bullets: bullets,
       actionText: "I'm ready to help!",
       onClick: action_example
}]

// Render a FAQ component

<FAQ questions=questions />
```
 
prop | type | default |  description |
---- | :----: | :-------: | ----------- |
containerStyle | `object` | `"{}"` | Style for the main View Component of the F.A.Q. This view contains the title and questions container |
titleContainerStyle | `object` | `"{}"` | Style for the View component title container |
titleStyle | `object` | `"{    fontSize: 30,    textAlign: 'center'}"` | Style for the Text component containing the title |
title | `string` | `` | A string for the title of the FAQ |
questions | `array` | `` | An array containing the Questions to be rendered. |
questionContainerStyle | `object` | `"{}"` | styles for the View component questions container. |


### Question

Ideally to be render as an array inside the F.A.Q. component,
but can be render alone just.

Here you have an example for the definition of a simple Question:

```javascript
//First define some bullets
  const bullets = [
    "you could say hello",
    "Open an issue",
    "making a pull request",
    "or give me more ideas to improve this component"]
//Then definy an action (WebBroser is a method from ["expo"](https://docs.expo.io/versions/latest/))

const action_example = () => {
   WebBrowser.openBrowserAsync(
       "https://github.com/Olcina/react-native-faq"
   )};

//Wrap up everything in your quesstion props
const  props  = {
       question: "How can I help you?",
       reply: "You have several options to choose:",
       bullets: bullets,
       actionText: "I'm ready to help!",
       onClick: action_example}

//Finally render your question 

<Question  {...props} />
   
```
 
prop | type | default |  description |
---- | :----: | :-------: | ----------- |
bullets | `array` | `"null"` | An array of strings containing the aditional bullets for the Questions. |
bulletStyle | `object` | `"{    marginLeft: \"10%\"}"` | Each bullet is made of a Text component, use this props to style all bullets. |
actionText | `string` | `` | An string inside a Text component for the title. |
containerStyle | `object` | `"{    backgroundColor: \"lightgrey\",    margin: 2,    borderRadius: 5}"` | Main Question View component style. |
actionStyle | `object` | `"{    backgroundColor: \"black\",    borderRadius: 5,    margin: 5}"` | Question action button style container It's a Touchable Opacity component containing a Text component |
actionTextStyle | `object` | `"{    fontSize: 30,    textAlign: \"center\"}"` | Text component style for the Question title |
replyStyle | `object` | `"{    fontSize: 15}"` | Question reply container style |
titleStyle | `object` | `"{    fontSize: 20}"` | Question title container style |
onClick | `func` | `"null"` | onClick prop: Can be any function you want to trigger. |


## EXPO EXAMPLE

A working example for an [expo](https://docs.expo.io/versions/latest/) project

```javascript

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, WebBrowser } from 'expo';
import { FAQ, Question } from './components/Question'

// define some bullets
const bullets = [
    'you could say hello',
    'Open an issue',
    'making a pull request',
    'or give me more ideas to improve this component'
]
// define an action
const action_example = () => {
    WebBrowser.openBrowserAsync(
        'https://github.com/Olcina/react-native-faq'
    );
}

const goTo = (link) => {
    WebBrowser.openBrowserAsync(
        link
    );
}

const questions = [
    {
        question: "How can I help you?",
        reply: "You have several options to choose:",
        bullets: bullets,
        actionText: "I'm ready to help!",
        onClick: action_example
    },
    {
        question: "Don't you know how to start?",
        reply: "Open a GitHub account and chat whit me",
        actionText: "Sure! Take me there!",
        onClick: () => goTo('https://github.com/'),
    }
]

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <View>
                    <Text style={{ textAlign: 'center' }}>You can load a complete F.A.Q.</Text>

                    <FAQ
                        title='F.A.Q.'
                        questions={questions}
                    />

                </View>

                <View>
                    <Text style={{ textAlign: 'center' }}>Or add your questions one by one</Text>
                    <Question
                        question="Is it possible to add just one question?"
                        reply="Of course, here you have an example"
                        actionText="Sure! Take me there!"
                        onClick={() => goTo('https://github.com/')}
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    }
});


```