import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HorizontalBar from './HorizontalBar';
import CaseList from './CaseList';
import { Text, Badge, ListItem } from 'react-native-elements';

const CasesBlock = (props) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [testData, setTestData] = useState({});


    const [graphData, setGraphData] = useState({});






    useEffect(() => {
        setLoading(true)
        fetch('https://api.rootnet.in/covid19-in/stats/latest')
            .then((response) => response.json())
            .then((json) => modifyData(json))
            .catch((error) => console.log("catch", error))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        fetch('https://api.rootnet.in/covid19-in/stats/testing/latest')
            .then((response) => response.json())
            .then((json) => setTestData(json))
            .catch((error) => console.log("catch", error))
    }, []);

    const callAllAPIs = () => {
        setLoading(true)

        fetch('https://api.rootnet.in/covid19-in/stats/latest')
            .then((response) => response.json())
            .then((json) => modifyData(json))
            .catch((error) => console.log("catch", error))
            .finally(() => setLoading(false));

        fetch('https://api.rootnet.in/covid19-in/stats/testing/latest')
            .then((response) => response.json())
            .then((json) => setTestData(json))
            .catch((error) => console.log("catch", error))
    }


    function modifyData(json) {

        if (json.lastRefreshed) {

            const localData = {
                labels: ['Total', 'Active', 'Recovery', 'Deaths'],
                vals: [json.data.summary.total, json.data.summary.total - json.data.summary.discharged, json.data.summary.discharged, json.data.summary.deaths]
            }

            setGraphData(localData);
            setData(json)


        }



    }





    return (
        <View style={{ flex: 1, backgroundColor: "#ecf0f1" }}>
            {isLoading ? <ActivityIndicator style={{ paddingTop: 50, backgroundColor: "white" }} /> : (
                <>
                    {data.lastRefreshed &&

                        <>


                            <ListItem
                                title={<Text h4>INDIA - Overall Stats</Text>}
                                subtitle={<><Text >Last refreshed on</Text>
                                    <Text>{new Date(data.lastRefreshed).toDateString()}</Text></>}
                                bottomDivider
                                chevron={<Ionicons
                                    name={'md-refresh'}
                                    size={35}
                                    onPress={() => callAllAPIs()}
                                />}
                            />

                            {testData.data &&

                                <ListItem
                                    title={<Text >Total Samples Tested</Text>}
                                    rightElement={
                                        <Badge value={testData.data.totalSamplesTested.toLocaleString('en-IN')} status="warning"
                                            badgeStyle={{ backgroundColor: 'black' }} textStyle={{ fontWeight: 'bold', fontSize: 16, }} />
                                    }
                                    bottomDivider
                                />

                            }





                            <CaseList cases={data.data.summary} />


                            <HorizontalBar data={graphData} />
                            

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


});


export default CasesBlock;
