import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import MainNavigator from './navigator/mainNavigator';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <MainNavigator />;
    }
}

export default App;
