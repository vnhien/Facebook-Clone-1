import React,{ useEffect, useState } from 'react'
import {View,
    StyleSheet,
    TextInput,
    ImageBackground,
    TouchableHighlight,
    Alert,
    Text,
    Platform,
    Button,
    KeyboardAvoidingView,
    Keyboard,TouchableOpacity,
    } from 'react-native'
import { set } from 'react-native-reanimated'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'


const UserGender = ({ route, navigation})=>{
const [gender, setGender]=useState('')
const [isNext, setNext]= useState(false)
const set=(value)=>{
    setGender(value)
    console.log(value)
    setNext(true)
}
    return(

        <View style={styles.container}>
        <TouchableOpacity  style={styles.container}>
                
                <Text  style={{color: '#1E90FF',fontSize: 20, padding: 20,fontWeight: 'bold'}}>What's your Gender?</Text>
                <Text style={{padding: '8%', textAlign: 'center',}}> You can check who sees your gender on your profile later</Text>


                <RadioForm
                radio_props={[{label: 'Female', value: 'female'},{label: 'Male', value: 'male'}]}
                formHorizontal={false}
                labelHorizontal={true}
                buttonColor={'#2196f3'}
                animation={true}
                initial={0}
                onPress={(value) => {set(value)}}
        />
               
               
               
                          
        </TouchableOpacity>
        {isNext&&<TouchableOpacity onPress={()=>{navigation.navigate('UserPhoneNumber',{
                first_name: route.params.first_name,
                last_name: route.params.last_name,
                date: route.params.date,
                gender: gender})}} style={styles.nextBtn}>
                        <Text style={{color: 'white'}}>Next</Text>  
            </TouchableOpacity>}
        <TouchableOpacity 
                onPress={()=>navigation.navigate('Login')}
                style={{
                    justifyContent: 'center',width: '100%',height: '7%',
                    alignItems: 'center',alignSelf: 'flex-end',
                     borderTopColor: '#808080',
                    borderTopWidth: 1
                    }}>
                        <Text style={{color: '#1E90FF'}}>Already have an account?</Text>
                </TouchableOpacity>
        </View>
    )
}
export default UserGender
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
     
    },
    textInput: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: "100%",
        height: 40
    },
    nextBtn:{
        width: '100%',
        backgroundColor: '#1E90FF',
        height: "6%",
        marginTop: 20,
        justifyContent: 'center',
        borderRadius: 8,
        alignItems: 'center',
    }
})