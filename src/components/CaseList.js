
import React from 'react'
import { Text, Badge, ListItem } from 'react-native-elements';




const CaseList = (props) => {

    const data = props.cases;


    return (
        <>



            {data.totalConfirmed &&

                <>

                    <ListItem
                        title={<Text >Total Confirmed</Text>}
                        rightElement={
                            <Badge value={data.totalConfirmed.toLocaleString('en-IN')} status="warning"
                                textStyle={{ fontWeight: 'bold', fontSize: 16, color: 'black' }} />
                        }
                        bottomDivider
                    />

                    <ListItem
                        title={<Text >Active Cases</Text>}
                        rightElement={
                            <Badge value={(data.totalConfirmed - data.discharged).toLocaleString('en-IN')}
                                textStyle={{ fontWeight: 'bold', fontSize: 16 }} status="primary" />
                        }
                        bottomDivider
                    />
                </>

            }

            {data.total &&

                <>

                    <ListItem
                        title={<Text >Total Confirmed</Text>}
                        rightElement={
                            <Badge value={data.total.toLocaleString('en-IN')} status="warning"
                                textStyle={{ fontWeight: 'bold', fontSize: 16, color: 'black' }} />
                        }
                        bottomDivider
                    />

                    <ListItem
                        title={<Text >Active</Text>}
                        rightElement={
                            <Badge value={(data.total - data.discharged).toLocaleString('en-IN')}
                                textStyle={{ fontWeight: 'bold', fontSize: 16 }} status="primary" />
                        }
                        bottomDivider
                    />

                </>

            }




            <ListItem
                title={<Text >Cured/Discharged</Text>}
                rightElement={
                    <Badge value={data.discharged.toLocaleString('en-IN')}
                        textStyle={{ fontWeight: 'bold', fontSize: 16 }} status="success" />
                }
                bottomDivider
            />


            <ListItem
                title={<Text >Deaths</Text>}
                rightElement={
                    <Badge value={data.deaths.toLocaleString('en-IN')}
                        textStyle={{ fontWeight: 'bold', fontSize: 16 }} status="error" />
                }
                bottomDivider
            />


        </>
    )

}

export default CaseList;

