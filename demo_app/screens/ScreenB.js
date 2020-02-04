import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native';

// This import gets us the spicy stuff from react-redux
import { useSelector } from 'react-redux';

const ScreenB = props => {

    // Use selector gets stuff from the store
    // Use the format useSelector(state => state.${Name Of Reducer (see App.js line 12)}.${Component in reducer (see store/reducers/user.js)})
    const userFname = useSelector(state => state.user.firstName)
    const userLname = useSelector(state => state.user.lastName)
    const userPhone = useSelector(state => state.user.phone)
    const userEmail = useSelector(state => state.user.email)
    return (
        <View style={styles.container}>
            <Text>Screen B</Text>
            <Button title="Go To Screen A" onPress={() => { props.navigation.navigate('ScreenA') }} />
            <Button title="Go To Screen C" onPress={() => { props.navigation.navigate('ScreenC') }} />
            <Button title="Go To Screen D" onPress={() => { props.navigation.navigate('ScreenD') }} />
            <Button title="Log User Info" onPress={() => console.log(`FirstName: ${userFname}, LastName: ${userLname} Phone: ${userPhone}, Email: ${userEmail}, END`)} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#225522'
    }
});

export default ScreenB;
