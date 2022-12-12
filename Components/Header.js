import{
    View,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({

  //ToDoList
  header : {
    color: '#fff',
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
    width : "100%",
    backgroundColor: 'gray',
  },
  //ToDoList 글체
  HeaderText : {
    fontSize : 50,
    fontweight : 300,
    color: "white",
  },
    mainText : {
        fontSize : 30,
        color: "white",
        fontWeight: "bold",
    }
})

const Header = (props) => (
    <View style = {styles.header}>
        <Text style = {styles.mainText}>{props.name}</Text>
    </View>
)

export default Header;