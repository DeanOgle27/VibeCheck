import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native';


const ScreenD = props => {
    return (
        <View style={styles.container}>
            <Text>Screen D</Text>
            <Button title="Go To Screen A" onPress={() => { props.navigation.navigate('ScreenA') }} />
            <Button title="Go To Screen B" onPress={() => { props.navigation.navigate('ScreenB') }} />
            <Button title="Go To Screen C" onPress={() => { props.navigation.navigate('ScreenC') }} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#225555',
    }
});

export default ScreenD;