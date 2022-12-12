import React from 'react'
import { Platform, StyleSheet, Text, TextInput, View,KeyboardAvoidingView,TouchableOpacity, ScrollView} from 'react-native'
import { useState } from 'react';

import Header from './Components/Header';
import Todo from './Components/Todo';
// import SubTitle from './Components/SubTitle';
function App () {

  const [appName, setAppName] = useState("ToDoList");

  //할일 넣기
  const [todo, setTodo] = useState();
  //할일을 리스트로 설정해서 넣기
  const [todoItems, setTodoItems] = useState([]);

  //텍스트 추가
  const addTodo = () =>{
    // console.log(todo); //시험
    setTodoItems([...todoItems, todo])
    setTodo(null);
  }

  //TodoList 터치시 삭제
  const completeList = (index) => {
    //지역변수 설정해서 리스트를 복사하여 인덱스 번호 삽입
    let itemsCopy = [...todoItems];
    itemsCopy.splice(index, 1); //splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
    setTodoItems(itemsCopy);
  }
    return (
      // main
      <View style = {styles.container}>

        {/* ToDoList Header */}
      <Header name = {appName}></Header>

        {/* Today todo */}
        <ScrollView>
        <View style = {styles.todoWrapper}>
            <Text style = {styles.sectionTitle}>Today's Todo </Text>

          <View style = {styles.Item}>
            {/* Todo's List */}
            <TouchableOpacity onPress = {() => alert('1.input text & press "+"\n2.Touch the list if you complete')}>
              <Todo text = {'Touch Me!'}/>
            </TouchableOpacity>
              
            {
            //todolist 리스트 map 설정
            todoItems.map((item, index) => {
              return(
                <TouchableOpacity key = {index} onPress = {() => completeList(alert('Did It!'))}>
                  <Todo text = {item}/>
                </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
        </ScrollView>

        {/* ToDoList write part */}
          {/* What is KeyboardAvoidingView => 이 컴포넌트는 가상 키보드가 표시되는 동안 키보드 높이를 기준으로 높이, 위치 또는 하단 패딩을 자동으로 조정합니다. */}
          <KeyboardAvoidingView
          //삼항 연산으로 운영 체제에 따라 자동 조정
            behavior = {Platform.OS === "ios" ? "padding" : "heigth"}
            style = {styles.writeToDoWrapper}
            >
              {/* 텍스트 인풋 */}
              <TextInput style = {styles.input}
              placeholder = {'Write Your TodoList'} value = {todo} onChangeText = {text => setTodo(text)}>
              </TextInput>

              {/* Add ToDoList */}
              <TouchableOpacity onPress = {() => addTodo()}>
                <View style = {styles.addWrapper}>
                  <Text style = {styles.addText}>+</Text>
                </View>
              </TouchableOpacity>
            </KeyboardAvoidingView>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
    backgroundColor : '#E8EAED'
  },
  //메인 헤더와 서브 타이틀간의 간격
  todoWrapper: {
    paddingTop : 10,
    paddingHorizontal : 10,
  },
  //서브 타이틀
  sectionTitle: {
   fontSize : 24,
   fontWeight : 'bold',
  },
  //ToDoList들
  Item : {
    marginTop : 30, //아이템 텍스트 들과 서브 타이틀간의 거리
  },
  //인풋 텍스트와 추가 버튼
  writeToDoWrapper:{
    position : 'absolute',
    bottom : 60,
    width : '100%',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
  },
  input:{
    paddingVertical : 15, //텍스트와 인풋 간격 크기
    paddingHorizontal : 15, //텍스트와 프레스 홀더 위치
    width : 250,
    backgroundColor : '#FFF',
    borderColor : '#C0C0C0', //겉 테두리 색
    borderRadius : 60,
    borderWidth : 1,

  },
  //텍스트 추가 버튼
  addWrapper:{
    width : 50,
    heigth : 10,
    backgroundColor : '#FFF',
    borderRadius : 50,
    justifyContent : 'center',
    alignItems : 'center',
    borderColor : '#FFF',
    borderWidth : 10,
  },
  //텍스트 글자
  addText:{
    fontSize:20,
  },
  //텍스트 체크
  checkedTodoList:{
    color : 'gray',
    textDecorationLine: 'line-through',
  }
})

export default App;