
import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';

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
    bullets: null,
    bulletStyle: {
        marginLeft: '10%'
    },
    containerStyle: {
        backgroundColor: 'lightgrey',
        margin: 2,
        borderRadius: 5
    },
    actionStyle: {
        backgroundColor: "black",
        borderRadius: 5,
        margin: 5
    },
    actionTextStyle: {
        fontSize: 30,
        textAlign: 'center'
    },
    replyStyle: {
        fontSize: 15
    },
    titleStyle: {
        fontSize: 20
    },
    onClick: null,
}