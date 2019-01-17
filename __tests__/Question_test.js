import React from 'react';
import { Question }  from '../index';

import renderer from 'react-test-renderer';

const action_example = () => {
    console.log("I'm an action!");
    
}

const bullets = [
    "I'm a bullet",
    "Second Bullet"
]

const question = {
    question: "Did I render?",
    reply: "It seems so:",
    bullets: bullets,
    actionText: "I'm ready to help!",
    onClick: action_example,
}

test('Question renders correctly', () => {
    const tree = renderer.create(
        <Question
            {...question}
        />).toJSON();
    expect(tree).toMatchSnapshot();
});
test('renders whitout action', () => {
    const tree = renderer.create(
        <Question
            question='test'
            reply='test'
        />).toJSON();
    expect(tree).toMatchSnapshot();
});