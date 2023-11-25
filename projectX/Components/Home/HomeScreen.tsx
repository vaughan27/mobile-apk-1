import InputData from "./InputData";
import InputData2 from "./InputData2";
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import React, { useState } from "react";
import { color } from "@rneui/base";
import { background } from "native-base/lib/typescript/theme/styled-system";


function HomeScreen({ navigation, route }) {

    const [modalVisible, setModalVisibility] = useState(false);
    const [empdat, setEmpdat] = useState([ { id: '1', name: 'Zelda', age: '5', description: 'lorem ipsum', designation: 'frontend developer' } ]);
    
    const [editId, setEditId] = useState('');
    const [editStat, setEditStat] = useState(false);
    const [editData, setEditData] = useState([{ id: ' ', name: ' ', age: ' ' , description: ' ', designation: ' ' }]);


    React.useEffect(() => {


      if (route.params?.post) {
        console.log(route.params.post)
        if(route.params.request === 'delete')
        {
          setEmpdat(currentCourseGoals   => {
            return currentCourseGoals.filter((goal) => goal.id !== route.params?.post )})
        }
        else if(route.params.request === 'edit')
        {
          setEditStat(true); 
          setEditId(route.params.post);
          // const found = empdat.find((goal) => goal.id === editId );
          // setEditData(found )
          setEditData(empdat)
          setEditData(currentCourseGoals   => {
            return currentCourseGoals.find((goal) => goal.id !== editId)})
            console.log(editData)
        }
      }
    }, [route.params?.ram]);
    

    function addEntry(entry) {
      entry.key = Math.random().toString();
      setEmpdat((currentEntry) => {
        return [{id: Math.random().toString(), name:entry.name, age:entry.age, description:entry.description, designation:entry.designation }, 
          ...currentEntry];
      })
      // console.log(empdat);
    }

    function addEntry2(entry) {
      
        // Find the index of the item in the array
        const itemIndex = empdat.findIndex(item => item.id === entry.id);
    
        if (itemIndex === -1) {
          console.log(entry);
          console.log("Item not found");
          return;
        }
    
        // Create a copy of the items array with the edited item
        const updatedItems = [...empdat];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          name: entry.name,
          age: entry.age,
          description: entry.description,
          designation: entry.designation

        };
    
        // Update the state with the new array
        setEmpdat(updatedItems);
        
        
      // console.log(empdat);
    }
    
    
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
          color={'#154c79'}
          onPress={startAddGoalHandler} 
        />

        {modalVisible && <InputData2 editData={editData} onAdd={addEntry} />}
        {editStat && <InputData editData={editData}  onAdd={addEntry2}  /> } 

          <Button 
            title="Go to Details"
            onPress={() => {
              endGoalHandler();
              setEditStat(false);
              setEditData([{ id: '', name: '', age: '' , description: '', designation: '' }]);
              navigation.navigate('Details', {empdat});}
            }
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
      backgroundColor: 'white',
      padding: 20
    }
    });
   
  export default HomeScreen ;