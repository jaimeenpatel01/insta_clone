import {style, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from '../components/Home/newPost/AddNewPost'


const NewPostScreen = () => {
  return (
    <SafeAreaView style = {{backgroundColor: 'black', flex : 1}}>
        <AddNewPost />
    </SafeAreaView>
  )

}

export default NewPostScreen