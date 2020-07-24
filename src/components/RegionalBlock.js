import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import {  Divider } from 'react-native-elements';
import HorizontalBar from './HorizontalBar';
import CaseList from './CaseList';
import { Picker } from '@react-native-community/picker';


const RegionalBlock = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const [graphData, setGraphData] = useState({});

    const [selectedValue, setSelectedValue] = useState("");
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState({});





    useEffect(() => {
        fetch('https://api.rootnet.in/covid19-in/stats/latest')
            .then((response) => response.json())
            .then((json) => modifyData(json))
            .catch((error) => console.log("catch", error))
            .finally(() => setLoading(false));
    }, []);


    function modifyData(json) {

        if (json.lastRefreshed) {


            let arrVals = [];

            json.data.regional.forEach(element => {
                arrVals.push(element)
            });


            const defaultState = getStateData('Karnataka', arrVals);
            setSelectedState(defaultState);
            setSelectedValue('Karnataka')

            setStateGraphData(defaultState);
            setStates(arrVals)
            setData(json)

        }
    }

    const getStateData = (query, arrVals) => {
        return arrVals.find(x => x.loc === query);
    }

    const setStateGraphData = (stateData) => {

        const localData = {
            labels: ['Total', 'Active', 'Recovery', 'Deaths'],
            vals: [ stateData.totalConfirmed , stateData.totalConfirmed - stateData.discharged, stateData.discharged, stateData.deaths]
        }

        setGraphData(localData);

    }


    const onChangeState = (value) => {
        setSelectedValue(value)
        const defaultState = getStateData(value, states);

        setSelectedState(defaultState);
        setStateGraphData(defaultState);

    }




    return (
        <View style={{ flex: 1,  backgroundColor: "#ecf0f1" }}>
            {isLoading ? <ActivityIndicator style={{ paddingTop: 50, backgroundColor: "white"  }} /> : (
                <>
                    {data.lastRefreshed &&

                        <>



                            <Picker
                                selectedValue={selectedValue}

                                onValueChange={(itemValue, itemIndex) =>
                                    onChangeState(itemValue)
                                }
                            >

                                {states && states.map((each, i) => {
                                    return <Picker.Item key={i} label={each.loc} value={each.loc} />
                                })

                                }


                            </Picker>

                            <Divider />



                            <CaseList cases={selectedState} />


                            <HorizontalBar data={graphData}  />
                            {/* <Text >Last refreshed on</Text>
                            <Text>{data.lastRefreshed}</Text> */}

                        </>

                    }


                </>


            )}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
    },

    dropdown: {
        flex: 1,
    }


});


export default RegionalBlock;
