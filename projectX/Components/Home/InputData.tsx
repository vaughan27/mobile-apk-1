import { StyleSheet,Button,TextInput,View,Text,} from "react-native"
import { Formik } from "formik"
import * as yup from 'yup';

import DropDown from "./DropDown";

const reviewSchema = yup.object({
  name: yup.string()
    .required()
    .min(4),
  description: yup.string()
    .required()
    .min(8),
  age: yup.string()
    .required()
    .test('is-num-18-99', 'Rating must be a number 18 - 99', (val) => {
      return parseInt(val) < 99 && parseInt(val) > 18;
    }),
});

export default function InputData(props) {

  return (
      
  <View  style={Styles.container}> 
    <Formik
      initialValues={{ name: '', age: '', description: ''  }}
      validationSchema={reviewSchema}
      onSubmit={(values, actions) => {
        actions.resetForm(); 
        // console.log(values);
        props.onAdd(values);
    }}
  >
    {props => (
      <View>
    
        <TextInput
          style={Styles.input}
          placeholder='name'
          onChangeText={props.handleChange('name')}
          onBlur={props.handleBlur('name')} 
          value={props.values.name}
        />
        <Text style={Styles.errorText}>{props.touched.name && props.errors.name}</Text>

        <TextInput
          style={Styles.input}
          multiline
          placeholder='age'
          onChangeText={props.handleChange('age')}
          keyboardType="numeric"
          onBlur={props.handleBlur('age')} 
          value={props.values.age}
        />
        <Text style={Styles.errorText}>{props.touched.age && props.errors.age}</Text>

        <TextInput
          style={Styles.input}
          multiline
          placeholder='description'
          onChangeText={props.handleChange('description')}
          onBlur={props.handleBlur('description')} 
          value={props.values.description}
        />
        <Text style={Styles.errorText}>{props.touched.description && props.errors.description}</Text>

        <DropDown />
        <View style={Styles.buttonlol}>
        <Button color='black' title="Submit" onPress={props.handleSubmit} /> 
        </View>
      </View>


      )}
      </Formik>

      </View>
    )
}


const Styles = StyleSheet.create({
input:{
  
    borderWidth: 2,
    borderRadius:2,
    borderColor:'white',
    fontSize: 18,
    padding: 6,
    marginTop: 8,
  },
  container: {
    padding: 20,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
  buttonlol:{
    paddingTop:30
  }

})