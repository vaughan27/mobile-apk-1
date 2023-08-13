import { Button } from 'native-base';
import {StyleSheet, View, Text, Pressable} from 'react-native' 

function GoalItem(props){
    return(  
    <View>
      <View style={styles.goalItem} >  
        <Pressable android_ripple={{color: '#dddddd'}}
          onLongPress = {props.onDeleteItem.bind(this, props.id)}
          style={({pressed}) => pressed && styles.pressedItem }>

          <View>
            <Text style={styles.goalText } > {props.name} </Text>
            <Text style={styles.goalText } > {props.age} </Text>
            <Text style={styles.goalText } > {props.description} </Text>
          </View>

          
        </Pressable>
      </View>
      <Button style={styles.buttonstuff} title='edit' onPress={console.log(' press')}  />
    </View>
    );
   
};

export default GoalItem;

const styles= StyleSheet.create({
    goalItem: {
        margin: 16,
        borderRadius: 6,
        backgroundColor:'#1abc9c',
        width: '92%'
      },
      pressedItem: {
        opacity: 0.5
      },
      goalText: {
        color: 'white',
        padding: 8
    
      }, 
      container: {
        borderRadius: 6,
        backgroundColor:'lightblue'
      },
      buttonstuff:{
        width: '20%'
      }
});