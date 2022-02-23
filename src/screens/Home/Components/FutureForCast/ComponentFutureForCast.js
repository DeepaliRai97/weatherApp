import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import moment from 'moment-timezone'
import styles  from './StylesComponentFutureForCast'

const FutureForecast = ({data,navigation}) => {
    const futureForeCastData = data?.length>0?data:[]
    return (
        <View style={styles.flexRow}>
            {  futureForeCastData.map((data, idx) => (idx !== 0 &&  <FutureForecastItem key={idx} forecastItem={data} navigation={navigation}/>))
            }
            
        </View>
    )
}

const FutureForecastItem = ({forecastItem,navigation}) => {
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('Details',{data:forecastItem})}>
        <View  style={styles.futureForecastItemContainer}>
            <Text  style={styles.day}>{moment(forecastItem.dt * 1000).format('ddd')}</Text>
            <Text  style={styles.temp}>Night - {forecastItem.temp.night}&#176;C</Text>
            <Text  style={styles.temp}>Day - {forecastItem.temp.day}&#176;C</Text>
        </View>
        </TouchableOpacity>
    )
}


export default FutureForecast
