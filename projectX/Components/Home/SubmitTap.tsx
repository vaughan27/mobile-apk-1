import { Button } from '@rneui/themed';

function SubmitTap(props){
    return (
        <Button
              title={props.type}
              buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 100,
                marginHorizontal: 100,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: 'bold' }}
        />

    );
}


export default SubmitTap;