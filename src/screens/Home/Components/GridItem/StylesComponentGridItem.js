import { StyleSheet,Dimensions } from "react-native"

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#18181bcc',
        padding:10,
        width:'100%',
        height:Dimensions.get('window').height/50,
    },
    currentTempContainer: {
        flexDirection: 'row',
        backgroundColor: '#00000033',
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 10,
        borderColor:'#eee',
        borderWidth:1,
        padding: 5
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
        marginLeft:20
    },
    temp: {
        fontSize: 16,
        color:"white",
        fontWeight:"100",
        textAlign:"center",
        marginLeft:20
    },
    otherContainer: {
        paddingRight: 40,
    }
})
export default styles;