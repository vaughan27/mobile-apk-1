import { StyleSheet,Button,TextInput,View,Text,} from "react-native"
import { Formik } from "formik"
import * as yup from 'yup';
import { Select, VStack, CheckIcon } from "native-base";
import { useState } from "react";

const inputSchema = yup.object({
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
  designation:yup.string()
      .required()
});

export default function InputData2(props) {
  const [designation, setdesignation] = useState('');
  if(props.editData){
    console.log(props);
  }
  

  return (
      
  <View  style={Styles.container}> 
    <Formik
      initialValues={{ name: '', age: '', description: '', designation: ''  }}
      // initialValues={{ name: `${props.editData.name}`, age: `${props.editData.age}`, description: `${props.editData.description}`, designation: `${props.editData.designation}`  }}
      validationSchema={inputSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        values.designation = designation; 
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

        <View style={Styles.drop}>
        <VStack alignItems='center' space={4} style={Styles.drop}>
              <Select
                shadow={2}
                selectedValue={props.values.designation}
                minWidth='353'
                accessibilityLabel='Choose Designation'
                placeholder='Choose Designation'
                fontSize={16}
                _selectedItem={{
                  bg: 'lavender',
                  endIcon: <CheckIcon size='5' />,
                }}
                _light={{
                  bg: 'white',
                  _hover: {
                    bg: 'coolGray.200',
                  },
                  _focus: {
                    bg: 'coolGray.200:alpha.70',
                  },
                }}
                _dark={{
                  bg: 'coolGray.800',
                  _hover: {
                    bg: 'coolGray.900',
                  },
                  _focus: {
                    bg: 'coolGray.900:alpha.70',
                  },
                }}
                onValueChange={(itemValue) => {
                  props.handleChange('designation')(itemValue); // Update Formik value
                  setdesignation(itemValue); // Update local state
                }}
                required
              >
                <Select.Item shadow={2} label='Front Developer' value='Frontend Developer' />
                <Select.Item shadow={2} label='Tester' value='Tester' />
                <Select.Item shadow={2} label='Project Manager' value='Project Manager' />
                <Select.Item shadow={2} label='UI Designer' value='UI Designer' />
                <Select.Item shadow={2} label='Backend Developer' value='Backend Developer' />
                <Select.Item shadow={2} label='Mobile APP Developer' value='Mobile APP Developer' />
              </Select>
            </VStack>
            <Text style={Styles.errorText}>
              {props.touched.designation && props.errors.designation}
            </Text>




    </View >

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
    backgroundColor: 'white',
    fontSize: 18,
    padding: 6,
    marginTop: 26,
  },
  container: {
    padding: 20,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 4,
    textAlign: 'center',
  },
  buttonlol:{
    paddingTop:30
  },
  drop:{
    marginBottom:20,
    marginTop:20,
    fontSize:24
  },

})