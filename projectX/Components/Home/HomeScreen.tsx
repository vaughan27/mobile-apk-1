import InputData from "./InputData";
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import React, { useState } from "react";


function HomeScreen({ navigation, route }) {

    const [modalVisible, setModalVisibility] = useState(false);
    const [empdat, setEmpdat] = useState([ { id: '1', name: 'Zelda', age: 5, description: 'lorem ipsum', designation: 'frontend developer' } ]);
    // console.log(route.params?.post)

    React.useEffect(() => {
      endGoalHandler();
      if (route.params?.post) {
        setEmpdat(currentCourseGoals   => {
          return currentCourseGoals.filter((goal) => goal.id !== route.params?.post );
        })}
    }, [route.params?.post]);
    

    function addEntry(entry) {
      entry.key = Math.random().toString();
      setEmpdat((currentEntry) => {
        return [{id: Math.random().toString(), name:entry.name, age:entry.age, description:entry.description, designation:entry.designation }, 
          ...currentEntry];
      })
      // console.log(empdat);
    }
    
    // function deleteGoalHandler(id) {
    //   console.log(id);
    //   setEmpdat(currentCourseGoals   => {
    //     return currentCourseGoals.filter((goal) => goal.id !== id );
    //   })
    // }
    
    function startAddGoalHandler()  {
      setModalVisibility(true);
    }
    function endGoalHandler(){
      setModalVisibility(false);
    }

    return (<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
        <View style={styles.appContainer}>
        <Text >HomeScreen </Text>
        <Button 
          title='Add New Data' 
          color={'#1abc9c'}
          onPress={startAddGoalHandler} 
        />
        {modalVisible && <InputData onAdd={addEntry} />}
          
          <Button 
            title="Go to Details"
            onPress={() => navigation.navigate('Details', {empdat})}
          />
            
      </View>
    </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({
    appContainer: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#A1CCD1',
      padding: 20
    }
    });
   
  export default HomeScreen ;