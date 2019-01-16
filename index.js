import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export class Question extends React.Component {
    static propTypes = {
        bullets: PropTypes.array,
        bulletStyle: PropTypes.object,
        actionText: PropTypes.string,
        containerStyle: PropTypes.object,
        actionStyle: PropTypes.object,
        actionTextStyle : PropTypes.object,
        onClick: PropTypes.func
    }

    renderBullets = () => {
        return this.props.bullets.map((bullet, key) => {
            return (
                <Text
                    key={key}
                    style={[styles.defaultBulletStyle,this.props.bulletStyle]}
                >
                    {bullet}
                </Text>
            )}
        )}
    render() {
        return (
        <View style={[styles.defaultContainerStyle,this.props.containerStyle]}>
            <Text style={[styles.defaultTitleStyle, this.props.titleStyle]}>
                {this.props.question}
            </Text>
            <Text style={[styles.defaultReplyStyle, this.props.replyStyle]}>
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
            {/* Optional BUTTON */}
            {this.props.buttonText ?
                <TouchableOpacity 
                    style={[styles.defaultActionStyle, this.props.actionStyle]}
                    onPress={this.props.onClick ? this.props.onClick : null}
                >
                    <Text style={[styles.defaultActionTextStyle, this.props.actionTextStyle]}>
                        {this.props.actionText}
                    </Text>
                </TouchableOpacity> 
                : 
                <Text />}
        </View>
    )}
}

const styles = StyleSheet.create({
    defaultBulletStyle: {},
    defaultContainerStyle: {},
    defaultTitleStyle: {},
    defaultReplyStyle: {},
    defaultActionStyle: {},
    defaultActionTextStyle: {}
});
