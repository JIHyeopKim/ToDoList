import React from "react"
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"

//expo 기본 아이콘
// import {FontAwesome} from "@expo/vector-icons"

// TodoList
const Todo= (props) => {
   
    return (
        <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                <View style = {styles.square}></View>
                <Text style = {styles.itemText}>{props.text}</Text>
            </View>
            <View style = {styles.circular}></View>
        </View>
        )
    }

const styles = StyleSheet.create({
    item: {
        backgroundColor : '#FFF',
        padding : 15,
        borderRadius : 10,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginBottom : 20,
    },
    itemLeft: {
        flexDirection:'row',
        alignItems : 'center',
        flexWrap : 'wrap',
    },
    square: {
        width : 24,
        height : 24,
        backgroundColor : '#55BCF6',
        opacity : 0.4, //사각형 표시 색 연하게 
        borderRadius : 5,
        marginRight : 15,

    },
    itemText: {
        maxWidth : "80%",

    },
    circular: {
        width : 12,
        heigth : 12,
        borderColor: 'red',
        borderWidth : 10, //원 크기
        borderRadius : 10, //모서리 둥글게 하기
        opacity : 0.6, //색 연하게
    }
});

export default Todo;