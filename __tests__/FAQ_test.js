import React from 'react';
import { FAQ } from '../index';

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
// render two 
const questions = [question,question]

test('FAQ renders correctly', () => {
    const tree = renderer.create(
        <FAQ
            title="A FAQ test"
            questions={questions}
        />).toJSON();
    expect(tree).toMatchSnapshot();
});