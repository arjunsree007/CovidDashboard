
import React from 'react'
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph';
import {  View, StyleSheet, Dimensions } from 'react-native';



const HorizontalBar = (props) => {

    const dataVals = props.data.vals;
    const dataLabels = props.data.labels;


    //008000

    return (
        <View style={styles.chart}>

            <HorizontalBarGraph
                data={dataVals}
                labels={dataLabels}
                width={Dimensions.get('window').width - 30}
                height={200}
                barRadius={5}
                barColor={'#82d551'}
                baseConfig={{
                    hasYAxisBackgroundLines: true,
                    xAxisLabelStyle: {
                        rotation: 0,
                        fontSize: 11,
                        width: 60,
                        yOffset: 4,
                        xOffset: -12
                    },
                    yAxisLabelStyle: {
                        rotation: 30,
                        fontSize: 13,
                        position: 'bottom',
                        xOffset: 15,
                        height: 80

                    }
                }}
                style={{
                    padding: 10,
                    borderRadius: 20,
                    backgroundColor: `white`
                }}
            />
        </View>
    )

}

export default HorizontalBar;


const styles = StyleSheet.create({

    chart: {
        padding: 15
    }
});