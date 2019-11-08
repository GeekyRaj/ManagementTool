import { StyleSheet } from "react-native";
const style = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentbg: {
        flex: 1, 
        height: "100%",
        width: "100%",
        paddingTop:90,
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: '#C0C0C0',
        zIndex: -1
    },
    contentAdd:{
        flex: 1, 
        height: "100%",
        width: "100%",
        paddingTop:90,
        alignItems: 'center',
        marginTop: 42,
        backgroundColor: 'rgba(0,0,0, 0.4)',
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    row:{
        flexDirection:'row',
    },
    //TEXT FORMATING
    fontText: {
        fontSize: 12,
    },
    textSpace:{
        fontSize:12,
        fontWeight:'bold',
        paddingRight:18,
    },
    showData:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Header:{
        fontSize:25,
        marginBottom:10,
        fontWeight:'bold'
    },
    //BUTTON
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#f8f8ff',
        borderColor:'gray',
        borderWidth:1,
        borderRadius:5,
        },
        textStyle:{
            alignSelf:'center',
            fontSize:20,
            color:'black',
            fontWeight:'600',
            padding:5,
            //fontFamily:AppFonts.extraBold
             
        }
})
export default style;