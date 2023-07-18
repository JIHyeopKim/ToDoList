import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  useState
} from 'react';

import Header from './Components/Header';
// import Insert from './Components/Insert';
// import List from './Components/List';
//import Items from './Components/Items';

import Circle from './assets/circle.png'
import Delete from './assets/delete.png'

const styles = StyleSheet.create({

  mainView : {
    flex : 1,
    height : "100%",
    marginTop : 50,
    alignItems : 'center'
  },
  mainText : {
    fontSize : 20,
    color : 'black',
    fontWeight : 'bold',
    padding:20,
    margin : 20,
    backgroundColor : 'orange',
  },
  input : {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10, // 모서리 둥글게
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    marginRight: 10,
  },
  itemsView: {
      flex: 1,
      borderBottomColor: '#bbb',
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },

  //원 포인트
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  //리스트 완료시 원 변화
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  //할일 완료시 줄 그어짐
  TextLine: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  //할일 끝나면 색 변화
    TextLinecolor: {
    color: '#29323c',
  },
  buttonContainer: {
    // marginVertical: 10,
    // marginHorizontal: 10,
  },
})

function App () {

  const [appName, setAppName] = useState("ToDoList");
  const [myTextInput, setMyTextInput] = useState('')
  const [alphabet, setAlphabet] = useState ([])

  const onChangeInput = (event) =>{
    console.log("event", event)
    setMyTextInput(event)
  }

  const onAddTextInput = () =>{
    setAlphabet([...alphabet, myTextInput])
    setMyTextInput('');
  }

  const onRemoveItem = (index) => {
    // 해당 index의 항목을 alphabet 배열에서 삭제
    const updatedAlphabet = alphabet.filter((item, idx) => idx !== index);
    setAlphabet(updatedAlphabet);
  };

  return (
    <View style = {styles.mainView}>
      <Header name = {appName}></Header>
      <ScrollView style = {{width: "100%"}}>
      <View style={styles.card}>
      <TextInput 
          style = {styles.input}
          placeholder="Input Your Schedule"
          placeholderTextColor={'#999'}
          onChangeText={onChangeInput}
          value={myTextInput}
          autoCorrect={false} // 밑줄
          multiline = {true} //텍스트 맨 위 정렬
          editable = {true} //텍스트 편집 안됨
        ></TextInput>
          <Button 
          style = {styles.button}
          title="add"
          onPress={onAddTextInput}/>
          </View>
           <View style={styles.itemsView}>
              <TouchableOpacity>
                <View style={styles.completeCircle}>
                  <Image style = {{width : 50 , height : 50}} name="circle" source = {Circle} color="#3143e8" />
                </View>
              </TouchableOpacity>
                <Text style={styles.text}>작업중</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                  <Image style={{width : 50 , height : 50}} name ="delete"  source = {Delete} color="#e33057" />
                </Text>
              </TouchableOpacity>
            </View>
            {alphabet.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => onRemoveItem(idx)} // 항목 터치 시 삭제 함수 호출
          >
            <Text style={styles.mainText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>    
    </View>
  );
}

export default App;