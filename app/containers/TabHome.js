import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { stackNavigator, tabNavigator } from '../navigator/nameNavigator';

class TabHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigation } = this.props;

        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() =>
                        navigation.navigate(stackNavigator.DETAILS, {
                            itemId: 86,
                            otherParam: 'anything you want here'
                        })
                    }
                />
            </View>
        );
    }
}

export default TabHome;

// function TabHome({ navigation }) {
//     return (
//         <View
//             style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>
//             <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate('Details')}
//             />
//         </View>
//     );
// }
