import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native';


const ScreenA = props => {
    return (
        <View style={styles.container}>
            <Text>Screen A</Text>
            <Button title="Go To Screen B" onPress={() => { props.navigation.navigate('ScreenB') }} />
            <Button title="Go To Screen C" onPress={() => { props.navigation.navigate('ScreenC') }} />
            <Button title="Go To Screen D" onPress={() => { props.navigation.navigate('ScreenD') }} />
            <Button title="Say Hi In Console" onPress={() => { console.log("Hi") }} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#222255',

    }
});

export default ScreenA;