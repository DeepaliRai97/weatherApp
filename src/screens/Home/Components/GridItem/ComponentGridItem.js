  
import React, { useEffect } from 'react'
import {View, ScrollView } from 'react-native'
import { fetchForecast } from '../../../../services/redux/ScreenHome/actionsScreenHome'
import { useDispatch, useSelector } from 'react-redux'
import FutureForecast from '../FutureForCast/ComponentFutureForCast'
import styles from './StylesComponentGridItem'

const WeatherScroll = ({weatherData,navigation}) => {
    const lat = weatherData?.coord?.lat || 0;
    const lon = weatherData?.coord?.lon || 0;
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchForecast(lat,-lon))
    },[weatherData])
    const mState = useSelector(state=>state.reducerScreenHome)
    const {foreCastData} = mState;
    const futureForeCastData = foreCastData?.daily
    return (
        <View style={{height:"20%"}}>
        <ScrollView horizontal={true} style={styles.scrollView} >
            <FutureForecast data={futureForeCastData} navigation={navigation}/>
        </ScrollView>
        </View>
    )
}


export default WeatherScroll