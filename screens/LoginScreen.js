import { StyleSheet, Text, View  , Image  } from 'react-native'
import React from 'react'
import LoginForm from '../components/LoginForm'

const LoginScree = () => {
  const instalogo = 'https://logowik.com/content/uploads/images/606_instagram.jpg'

  
  return (

    <View style = {styles.container}>
      <View style ={styles.logocontainer}>
        <Image source={{uri : instalogo , height : 100 , width : 100}}></Image>
      </View>
      <LoginForm></LoginForm>

    </View>
  )
}

export default LoginScree

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor : 'white', 
    paddingTop : 50,
    paddingHorizontal : 12,

  },
  logocontainer: {
    alignItems : 'center',
    marginTop : 60
  }
})