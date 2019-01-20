

## me/olcina/Documents/OpenSourceCollaborations/react-native-faq/components/FAQ.js

F.A.Q. container
It renders and array of questions
each question shoulb be defined according the Question Component.

e.g.

const questions = [{
  question: "How can I help you?",
       reply: "You have several options to choose:",
       bullets: bullets,
       actionText: "I'm ready to help!",
       onClick: action_example
}]
 
prop | type | default |  description |
---- | :----: | :-------: | ----------- |
containerStyle | `object` | `&quot;{}&quot;` | Style for the main View Component of the F.A.Q. This view contains the title and questions container |
titleContainerStyle | `object` | `&quot;{}&quot;` | Style for the View component title container |
titleStyle | `object` | `&quot;{\n    fontSize: 30,\n    textAlign: &#x27;center&#x27;\n}&quot;` | Style for the Text component containing the title |
title | `string` | `` | A string for the title of the FAQ |
questions | `array` | `` | An array containing the Questions to be rendered. |
questionContainerStyle | `object` | `&quot;{}&quot;` | styles for the View component questions container. |


## me/olcina/Documents/OpenSourceCollaborations/react-native-faq/components/Question.js

QUESTION component
 
prop | type | default |  description |
---- | :----: | :-------: | ----------- |
bullets | `array` | `&quot;null&quot;` |  |
bulletStyle | `object` | `&quot;{\n    marginLeft: &#x27;10%&#x27;\n}&quot;` |  |
actionText | `string` | `` |  |
containerStyle | `object` | `&quot;{\n    backgroundColor: &#x27;lightgrey&#x27;,\n    margin: 2,\n    borderRadius: 5\n}&quot;` |  |
actionStyle | `object` | `&quot;{\n    backgroundColor: \&quot;black\&quot;,\n    borderRadius: 5,\n    margin: 5\n}&quot;` |  |
actionTextStyle | `object` | `&quot;{\n    fontSize: 30,\n    textAlign: &#x27;center&#x27;\n}&quot;` |  |
replyStyle | `object` | `&quot;{\n    fontSize: 15\n}&quot;` |  |
titleStyle | `object` | `&quot;{\n    fontSize: 20\n}&quot;` |  |
onClick | `func` | `&quot;null&quot;` |  |

