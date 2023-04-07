import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Home/Header'
import Stories from '../components/Home/Stories'
import Post from '../components/Home/Post'
import { ScrollView } from 'react-native'
import { POSTS } from '../data/posts'
import BottomTabs, { bottomTabIcons } from '../components/Home/BottomTab'


const HomeScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
        <Header />
        <Stories />
        <ScrollView style={{display: 'flex', gap: 4}}>
          {POSTS.map((post,index) => (
            <Post post = {post} key = {index} />
          ))}
        </ScrollView>
        <BottomTabs icons= {bottomTabIcons} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor : 'black',
        flex : 1,
    },
})

export default HomeScreen