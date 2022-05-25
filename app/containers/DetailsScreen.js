import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { stackNavigator, tabNavigator } from '../navigator/nameNavigator';

class DetailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigation, route } = this.props;
        console.log('route', route);
        const { itemId, otherParam } = route.params;

        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Text>Details Screen</Text>
                <Text>{itemId}</Text>
                <Text>{otherParam}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => navigation.push(stackNavigator.DETAILS)}
                />
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate(tabNavigator.TAB_HOME)}
                />
                <Button title="Go back" onPress={() => navigation.goBack()} />
                <Button
                    title="Go back to first screen in stack"
                    onPress={() => navigation.popToTop()}
                />
            </View>
        );
    }
}

export default DetailsScreen;

// function DetailsScreen({ navigation }) {
//     return (
//         <View
//             style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Details Screen</Text>
//             <Button
//                 title="Go to Details... again"
//                 onPress={() => navigation.push('Details')}
//             />
//             <Button
//                 title="Go to Home"
//                 onPress={() => navigation.navigate('Home')}
//             />
//             <Button title="Go back" onPress={() => navigation.goBack()} />
//             <Button
//                 title="Go back to first screen in stack"
//                 onPress={() => navigation.popToTop()}
//             />
//         </View>
//     );
// }
