import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

export const bottomTabIcons = [
    {
        name: 'Home',
        active : 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
    },
    
    {
        name: 'Search',
        active : 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
    },    
    {
        name: 'Reels',
        active : 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
    },
    {
        name: 'Shop',
        active : 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
    },  
    {
        name: 'Profile',
        active : 'https://media.licdn.com/dms/image/C4E03AQEWMCNm_JSDbw/profile-displayphoto-shrink_400_400/0/1649870808694?e=1685577600&v=beta&t=eHqW9nYZRj9GOUje9VWc0wKQK3Rt1kAu6vox_ed-hOY',
        inactive: 'https://media.licdn.com/dms/image/C4E03AQEWMCNm_JSDbw/profile-displayphoto-shrink_400_400/0/1649870808694?e=1685577600&v=beta&t=eHqW9nYZRj9GOUje9VWc0wKQK3Rt1kAu6vox_ed-hOY',
    },
     
]

const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}> 
        <Image source= {{uri: icon.active}} style = {styles.icon} />
        </TouchableOpacity>
    )
  return (
    <View style = {styles.container}>
        {icons.map((icon, index) => (
          <Icon key = {index} icon= {icon}/>
        ))}
    </View>
  )
}

const styles =  StyleSheet.create({
    container :{
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },

    icon:{
        width: 30,
        height: 30,
    },
})

export default BottomTabs