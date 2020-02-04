import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native';

// This import gets us the spicy stuff from react-redux
import { useDispatch } from 'react-redux';

// This import grabs our needed actions from the actions file
import { changeFirstName, changeLastName, changePhone, changeEmail } from '../store/actions/user'

const ScreenC = props => {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Text>Screen C</Text>
            <Button title="Go To Screen A" onPress={() => { props.navigation.navigate('ScreenA') }} />
            <Button title="Go To Screen B" onPress={() => { props.navigation.navigate('ScreenB') }} />
            <Button title="Go To Screen D" onPress={() => { props.navigation.navigate('ScreenD') }} />
            <Button title="Set First Name to AJ" onPress={() => { dispatch(changeFirstName("AJ")) }} />
            <Button title="Set Last Name to Saggington" onPress={() => { dispatch(changeLastName("Saggington")) }} />
            <Button title="Set Phone to 8675309" onPress={() => { dispatch(changePhone("8675309")) }} />
            <Button title="Set Email to smith.1@osu.edu " onPress={() => { dispatch(changeEmail("smith.1@osu.edu")) }} />

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#552222',
    }
});

export default ScreenC;