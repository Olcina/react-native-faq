
import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';

/**
 * QUESTION component
 * 
 */
export default class Question extends React.Component {
    static propTypes = {
        bullets: PropTypes.array,
        bulletStyle: PropTypes.object,
        actionText: PropTypes.string,
        containerStyle: PropTypes.object,
        actionStyle: PropTypes.object,
        actionTextStyle: PropTypes.object,
        replyStyle: PropTypes.object,
        titleStyle: PropTypes.object,
        onClick: PropTypes.func,
        // key: PropTypes.number
    }

    renderBullets = () => {
        return this.props.bullets.map((bullet, index) => {
            return (
                <Text
                    key={`${bullet}-${index}`}
                    style={[this.props.bulletStyle]}
                >
                    {bullet}
                </Text>
            )
        }
        )
    }
    render() {
        return (
            <View
                key={this.props.id}
                style={[this.props.containerStyle]}>
                <Text style={[this.props.titleStyle]}>
                    {this.props.question}
                </Text>
                <Text style={[this.props.replyStyle]}>
                    {this.props.reply}
                </Text>
                {/* Optional BULLETS */}
                {this.props.bullets ?
                    <View style={{ display: 'flex', textAlign: 'center' }}>
                        {this.renderBullets()}
                    </View>
                    :
                    <Text />
                }
                {/* Optional ACTION */}
                {this.props.actionText ?
                    <TouchableOpacity
                        style={[this.props.actionStyle]}
                        onPress={this.props.onClick ? this.props.onClick : null}
                    >
                        <Text style={[this.props.actionTextStyle]}>
                            {this.props.actionText}
                        </Text>
                    </TouchableOpacity>
                    :
                    <Text />}
            </View>
        )
    }
}

Question.defaultProps = {
    /**
     * An array of strings containing the aditional bullets for the Questions
     */
    bullets: null,
    /**
     * Each bullet is made of a Text component, use this props to style all bullets.
     */
    bulletStyle: {
        marginLeft: '10%'
    },
    /**
     * Main Question View component style.
     */
    containerStyle: {
        backgroundColor: 'lightgrey',
        margin: 2,
        borderRadius: 5
    },
    /**
     * Question action button style container
     * It's a Touchable Opacity component containing a Text component
     */
    actionStyle: {
        backgroundColor: "black",
        borderRadius: 5,
        margin: 5
    },
    /**
     * Text component style for the Question title
     */    
    actionTextStyle: {
        fontSize: 30,
        textAlign: 'center'
    },
    /**
     * Question reply container style
     */
    replyStyle: {
        fontSize: 15
    },
    /**
     * Question title container style
     */
    titleStyle: {
        fontSize: 20
    },
    /**
     * A javascript function for 
     */
    onClick: null,
}