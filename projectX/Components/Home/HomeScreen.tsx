import InputData from "./InputData";
import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState } from "react";


function HomeScreen({ navigation }) {
  const [empdat, setEmpdat] = useState([ { key: '1', name: 'Zelda', age: 5, description: 'lorem ipsum' } ]);

  function addEntry(entry) {
    entry.key = Math.random().toString();
    setEmpdat((currentEntry) => {
      return [entry, ...currentEntry];
    });
  
  };

    return (<View style={styles.appContainer}>
    <InputData  /> 
      <Button 
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
       
    </View>
    );
  }
  const styles = StyleSheet.create({
    appContainer: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#16a085',
      padding: 20
    }
    });
   
  export default HomeScreen;