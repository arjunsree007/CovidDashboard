import React from 'react';
import { ScrollView, StatusBar, SafeAreaView } from 'react-native';
import RegionalBlock from '../components/RegionalBlock';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const TabIcon = (props) => (
    <MaterialCommunityIcons name="city" size={30}
    color={props.focused ? 'royalblue' : 'darkgrey'} />
)


export default class ScreenStates extends React.Component {

    static navigationOptions = {
        tabBarIcon: TabIcon
    };

    renderTabBar() {
        return <StatusBar />
    }




    render() {

        return (
            <SafeAreaView>
                <ScrollView >

                    <RegionalBlock />

                </ScrollView>
            </SafeAreaView>
        )


    }
}


