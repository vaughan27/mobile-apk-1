import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { RectButton, Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState } from "react";



function DetailsScreen({ navigation, route }) {
  console.log(route.params)
  const empdat = route.params.empdat;

  const deleteGoalHandler = (id) => {
    navigation.navigate({
      name: 'Home',
      params: { ram:  Math.random().toString(), post: id , request: 'delete'},
      merge: true,}
    )
  };
  const editGoalHandler = (id) => {
    navigation.navigate({
      name: 'Home',
      params: { ram:  Math.random().toString(), post: id , request: 'edit'},
      merge: true,}
    )
  };

  const renderSwipeableItem = (item) => {
    const renderRightActions = (progress, dragX) => (
     <>
      <RectButton style={styles.deleteButton} onPress={() => deleteGoalHandler(item.id)}>
        <Text style={styles.delete}>Delete</Text>
      </RectButton>
      <RectButton style={styles.editButton} onPress={() => editGoalHandler(item.id)}>
        <Text style={styles.delete}>Edit</Text>
      </RectButton>
    </>
    );

    return (
      <GestureHandlerRootView>
        <Swipeable renderRightActions={renderRightActions}>
          <View style={styles.card}>
            <Text style={styles.cardContent}>{item.name}</Text>
            <Text style={styles.cardContent}>{item.age}</Text>
            <Text style={styles.cardContent}>{item.description}</Text>
            <Text style={styles.cardContent}>{item.designation}</Text>
          </View>
        </Swipeable>
      </GestureHandlerRootView>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={empdat}
        renderItem={({ item }) => renderSwipeableItem(item)}
        keyExtractor={(item) => item.id}
      />
       <Button
          title="Home"
          onPress={() => navigation.navigate('Home',{ post: 0 , request: 'delete'})}
          // params: { post: id , request: 'delete'},
          // merge: true,}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'purple',
    shadowOpacity: 1,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 16,
    fontSize: 16, // Adjust the font size as needed
    color: 'black', // Set the color
  },
  delete:
  { color: 'blue', // Change to your preferred color
    textAlign: 'center',
    justifyContent: 'center',
  },
  deleteButton:{
    backgroundColor: 'lavender', // Change to your preferred color
      justifyContent: 'space-around',
      alignItems: 'center',
      width: 75,
      height: '100%',
      borderRadius: 10,
      margin: 2
  },
  editButton:{
      backgroundColor: 'lavender', // Change to your preferred color
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        height: '100%',
        borderRadius: 10,
        margin: 2
      },
  deleteContainer:{
    padding: 10
  }
});

export default DetailsScreen;
// function DetailsScreen({ navigation , route}) {
//   // console.log(route.params.empdat);
//   const empdat = route.params.empdat;

//   const  deleteGoalHandler = (id) => {
//     navigation.navigate({
//       name: 'Home',
//       params: { post: id },
//       merge: true,})
//   }
  
//     return (
//       <View style={{ flex: 1,  justifyContent: 'center' }}>
        
//         <Text>Details Screen</Text>
        
//         <FlatList
//         data={empdat} 
//         renderItem={itemData => {  
//           // itemData.index
//           return <GoalItem 
          
//           name = {itemData.item.name}
//           age = {itemData.item.age}
//           description = {itemData.item.description}
//           designation = {itemData.item.designation}
//           id={itemData.item.id}
//           onDeleteItem={deleteGoalHandler}
          
//           />;
//           }} 
//           keyExtractor={(item, index) => {
//             return item.id;
//           }} 
//           alwaysBounceVertical={false} 
//         />

//         <Button
//           title="Home"
//           onPress={() => navigation.navigate('Home')}
//         />
//       </View>
//     );
//   }

//   export default DetailsScreen;