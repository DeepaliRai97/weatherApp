import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    flexRow:{
      flexDirection:'row'
    },
     futureForecastItemContainer: {
         flex:1,
         justifyContent: 'center',
         backgroundColor: '#00000033',
         borderRadius:10,
         borderColor:"#eee",
         borderWidth:1,
         padding: 30,
         marginLeft: 10,
         marginRight:10,
     }, 
     day: {
         fontSize: 20,
         color:"white",
         backgroundColor: "#3c3c44",
         padding: 10,
         textAlign:"center",
         borderRadius: 50,
         fontWeight: "200",
         marginBottom: 15,
         marginTop:10
     },   
     temp: {
         fontSize: 14,
         color:"white",
         fontWeight:"100",
         textAlign:"center",
     },
 })
 
 export default styles;