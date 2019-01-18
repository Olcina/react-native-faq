import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Question } from '../index'


export default class FAQ extends React.Component {
    static propTypes = {
        containerStyle: PropTypes.object,
        titleContainerStyle: PropTypes.object,
        titleStyle: PropTypes.object,
        title: PropTypes.string,
        questions: PropTypes.array,
        questionContainerStyle: PropTypes.object
    }

    renderQuestions = (questions) => {
        return questions.map((question, index) => {

            return <Question
                key={`${question.question}-${index}`}
                {...question}
            />
        })
    }

    render() {
        const renderedQuestions = this.renderQuestions(this.props.questions)
        return (
            <View style={[this.props.containerStyle]}>
                <View style={[this.props.titleContainerStyle]}>
                    <Text style={[this.props.titleStyle]}>
                        {this.props.title}
                    </Text>
                </View>
                <View style={[this.props.questionContainerStyle]}>
                    {renderedQuestions}
                </View>
            </View>
        )
    }

}

FAQ.defaultProps = {
    containerStyle: {},
    questionContainerStyle: {},
    titleContainerStyle: {},
    titleStyle: {
        fontSize: 30,
        textAlign: 'center'
    }
}