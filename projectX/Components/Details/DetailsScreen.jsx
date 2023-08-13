import {  useLocation } from "react-router-dom";
import { View, Text, Button, FlatList } from 'react-native';
import GoalItem from './SwipeList';

function DetailsScreen({ navigation , route}) {
  // console.log(route);
  const empdat = route.params;

  const  deleteGoalHandler = (id) => {
    navigation.navigate({
      name: 'Home',
      params: { post: id },
      merge: true,})
  }
  
    return (
      <View style={{ flex: 1,  justifyContent: 'center' }}>
        
        <Text>Details Screen</Text>
        
        <FlatList
        data={empdat.empdat} 
        renderItem={itemData => {  
          // itemData.index
          return <GoalItem 
          
          name = {itemData.item.name}
          age = {itemData.item.age}
          description = {itemData.item.description}
          id={itemData.item.id}
          onDeleteItem={deleteGoalHandler}
          
          />;
          }} 
          keyExtractor={(item, index) => {
            return item.id;
          }} 
          alwaysBounceVertical={false} 
        />

        <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }

  export default DetailsScreen;