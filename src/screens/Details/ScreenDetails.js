import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, } from 'react-native';
import styles from './StylesScreenDetails'
import moment from 'moment-timezone'


const ScreenDetails = ({route,navigation}) => {
  const {data} = route.params;
  const tempDay = data?.temp?.day || "";
  const tempNight = data?.temp?.night || ""
  const humidity = data?.humidity || 0;
  const pressure = data?.pressure || 0;
  return (
    <View style={styles.container} onStartShouldSetResponder={() => true}>
      <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={{marginTop:20,marginLeft:20}}>
        <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Go Back</Text>
      </TouchableOpacity>
      <ScrollView style={styles.containerInner} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>{moment(data.dt * 1000).format('ddd')}</Text>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Temp</Text>
          <View style={styles.tempContainer}>
            <Text style={styles.boxText}>{tempDay}K</Text>
            <Text style={styles.boxText}>{tempNight}K</Text>
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
      </ScrollView>
    </View>
  );
};


export default ScreenDetails;