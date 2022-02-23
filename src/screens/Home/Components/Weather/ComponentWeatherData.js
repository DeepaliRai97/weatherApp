import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './StylesComponentWeatherData';

const WeatherData = ({ data ,show}) => {
  if(!show) return null;
  const fahrenheit = (data?.main?.temp * 1.8 - 459.67).toFixed(2)||0;
  const celsius = (data?.main?.temp - 273.15).toFixed(2)||0;
  const title = data?.name || "";
  const temp = data?.main?.temp || "";
  const humidity = data?.main?.humidity || 0;
  const pressure = data?.main?.pressure || 0;
  const speed = data?.wind?.speed || 0;
  return (
    <View style={styles.container} onStartShouldSetResponder={() => true}>
      <ScrollView style={styles.containerInner} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>{title}</Text>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Temp</Text>
          <View style={styles.tempContainer}>
            <Text style={styles.boxText}>{temp}K</Text>
            <Text style={styles.boxText}>{fahrenheit}&#8457;</Text>
            <Text style={styles.boxText}>{celsius}&#8451;</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Humidity</Text>
          <Text style={styles.boxText}>{humidity}%</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Pressure</Text>
          <Text style={styles.boxText}>{pressure}hPa</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Wind</Text>
          <Text style={styles.boxText}>{speed} m/s</Text>
        </View>
      </ScrollView>
    </View>
  );
};


export default WeatherData;