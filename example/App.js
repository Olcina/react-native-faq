import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, WebBrowser } from 'expo';
import { Question } from './components/Question'

// You can import from local files
import AssetExample from './components/AssetExample';

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

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <Question
                    question="How can I help you?"
                    reply="You have several options to choose:"
                    bullets={bullets}
                    actionText="I'm ready to help!"
                    onClick={action_example}
                />
                <View style={{ height: 5 }}></View>
                <Question
                    question="Don't you know how to start?"
                    reply="Open a GitHub account and chat whit me"
                    actionText="Sure! Take me there!"
                    onClick={() => goTo('https://github.com/')}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    }
});
