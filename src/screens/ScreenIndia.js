import React from 'react';
import { ScrollView, StatusBar, SafeAreaView } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import CasesBlock from '../components/CasesBlock';


const TabIcon = (props) => (
    <MaterialCommunityIcons name="home-group"    size={35}
    color={props.focused ? 'royalblue' : 'darkgrey'} />
)


export default class ScreenIndia extends React.Component {

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

                    <CasesBlock />

                </ScrollView>
            </SafeAreaView>
        )


    }
}




