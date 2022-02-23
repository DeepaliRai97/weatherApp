import React, { useState } from 'react';
import { View, Alert, TouchableWithoutFeedback, Keyboard,TextInput,Button,Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import WeatherData from './Components/Weather/ComponentWeatherData';
import styles from './StylesScreenHome'
import { fetchWeather } from '../../services/redux/ScreenHome/actionsScreenHome';
import WeatherScroll from './Components/GridItem/ComponentGridItem';

const ScreenHome = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [showWeatherData, setShowWeatherData] = useState(false);
  const dispatch = useDispatch();
 const mState = useSelector(state => state.reducerScreenHome);
 const { weatherData } = mState

  const searchSubmitHandler = () => {
    if (search === '') {
      return Alert.alert('Validation', 'City name is required!', [{ text: 'OK' }]);
    }
    setShowWeatherData(true)
    dispatch(fetchWeather(search))
    setSearch('');
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <>
      <View style={styles.container}>
      <View style={styles.subContainer}>
      <Text style={styles.heading}>Enter city name </Text>
      <View>
        <TextInput style={styles.input} placeholder="Enter city name..." value={search} onChangeText={(val) => setSearch(val)} />
        <Button title="Search" onPress={()=>searchSubmitHandler()}/>
      </View>
    </View>
      <WeatherData data={weatherData} show={showWeatherData}/>
      </View>
      <WeatherScroll weatherData={weatherData} navigation={navigation}/>
      </>
    </TouchableWithoutFeedback>
  );
};


export default ScreenHome;