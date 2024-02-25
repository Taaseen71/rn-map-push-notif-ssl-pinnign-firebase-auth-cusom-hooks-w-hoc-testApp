import { StyleSheet } from "react-native";

const globalStyle = (arg1, arg2, arg3, arg4) => StyleSheet.create({
    flex: {
        flex:arg1
    },
    centerView: {
            flex: arg1,
            alignItems: 'center',
            justifyContent: 'center',
    },
    darkMode: {
        color: 'white',
        backgroundColor: 'black'
    },
    TextInputComponent:{
        height: !arg1 ? 40 : arg1,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white"
    },
    bcolor: {
        backgroundColor: arg1
    },
    inline: {
        flexDirection: 'row',
        justifyContent: arg1 ? arg1 : 'space-between',
        // backgroundColor: 'yellow',
        margin: 12,
        alignItems: 'center'
    },
    multiline: {
        flexDirection: 'column',
        justifyContent: arg1 ? arg1 : 'space-between',
        backgroundColor: arg2 ? arg2 :  'none',
        marginLeft: 12
    },
    button: {
        alignItems: 'center',
        backgroundColor: arg1 ? arg1  : '#DDDDDD',
        padding: 10,
        margin: 12
      },
    Image: {
        width: arg1 ? arg1 : 200,
        height: arg2 ? arg2 : 200,
        margin: 12,
    },
    borders: {
        borderWidth: 1,
        padding: 10,
        margin: 12,
        borderRadius: 6
    }

})

export default globalStyle;