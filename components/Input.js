import { StyleSheet, Text, View , TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Input = ({plachol , keyword , textcontent , setvalue , textentry}) => {
    
  return (


    <View style={styles.inputfield}>
    <TextInput
      placeholder={plachol}
      placeholderTextColor={"#444"}
      autoCapitalize="none"
      keyboardType={keyword}
      textContentType={textcontent}
      autoFocus={true}
      onChangeText={(text)=>setvalue(text)}
      secureTextEntry = {textentry}
    />
    <TextInput />
  </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputfield: {
        borderRadius: 4,
        // padding : ,
        backgroundColor: "#FAFAFA",
        marginBottom: 10,
        borderWidth: 1,
      },
})