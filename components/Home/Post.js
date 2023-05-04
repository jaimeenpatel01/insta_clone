import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react';
import { TouchableOpacity } from 'react-native';

// const postFooterIcons = [
//     {
//         name: 'Like',
//         imageUrl : 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
//         likedImageUrl : 'https://img.icons8.com/fluency/344/like.png',
//     },

//     {
//         name : 'Comment',
//         imageUrl: 'https://img.icons8.com/material-outlined/344/ffffff/filled-topic.png',
//     },

//     {
//         name : 'Share',
//         imageUrl: 'https://icons8.com/icon/77360/email-send',
//     },
    
//     {
//         name : 'Save',
//         imageUrl: 'https://icons8.com/icon/123439/favorites',
//     },
// ]

const Post = ({post}) => {
  return (
    <View style = {{marginBottom:30, }}>
        <View style = {{height: 1, width: '100%' , backgroundColor: '#585c63'}}></View>
     <PostHeader post= {post} />
     <PostImage post = {post} />
     <View style = {{marginHorizontal: 15, marginTop: 10}}>
        <PostFooter/>
        <Likes post = {post}/>
        <Caption post ={post} />
        <CommentsSection post = {post}/>
        <Comments post = {post}/>
     </View>
    </View>
  )
}

const PostHeader = ({post}) => (
    <View 
        style = {{
            flexDirection: 'row',
            justifyContent: 'space-between', 
            margin : 7, 
            alignItems: 'center'
        }}>
        <View style = {{flexDirection : 'row', alignItems: 'center'}}>
            <Image source={{uri : post.profilePicture}}  style = {styles.story} />
            <Text style = {{color : 'white', marginLeft : 5, fontWeight : '700'}}>{post.user}</Text>
        </View>
        <Text style= {{color: 'white', fontWeight: '900'}} >...</Text>
    </View>
)

const PostImage = ({post}) => (
    <View style = {{
        width : '100%',
        height : 450,
    }}
    >

    <Image source={{uri : post.imageUrl}} style = {{height : '100%', resizeMode: 'cover'}} />
    </View>
)

const PostFooter = () => (
    <View style={{flexDirection: 'row'}}>
        <View style = {styles.leftFooterContainer}>
            <Image style={styles.footerIcon} source = {require('../../assets/like2icon.png')} />
            <Image style={styles.footerIcon} source = {require('../../assets/comment2icon.png')} />
            <Image style={styles.footerIcon} source = {require('../../assets/share2icon.png')} />
           
        </View>
        <View style= {{flex:1, alignItems: 'flex-end'}}>
            <Image style={styles.footerIcon} source = {require('../../assets/save2icon.png')} />
            
        </View>
    </View>
)

const Icon = ({imgStyle,imgUrl}) => (
    <TouchableOpacity>
        <Image style= {imgStyle} source = {{uri: imgUrl}} />
    </TouchableOpacity>
)

const Likes = ({post}) =>(
    <View style = {{flexDirection: 'row', marginTop: 4}}>
        <Text style = {{color : 'white', fontWeight: '600'}} >{post.likes.toLocaleString('en')} likes
        </Text>
    </View>
)

const Caption = ({post}) =>(
    <View style = {{marginTop : 5}}>
        <Text style = {{color: 'white'}}>
            <Text style = {{fontWeight: '600'}}>{post.user}</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
)

const CommentsSection = ({post}) =>(
    <View style = {{marginTop : 5}}>
        {!!post.comments.length && ( 
            <Text style = {{color: 'grey'}}>
            View{post.comments.length > 1 ? ' all': ''} {post.comments.length} 
            {post.comments.length > 1 ? ' comments' : ' comment' }
        </Text>
        )}
    </View>
)

const Comments = ({post}) => (
    <>
    {post.comments.map((comment,index) => (
        <View key = {index} style = {{flexDirection: 'row', marginTop: 5, }}>
            <Text style = {{color : 'white'}}>
                <Text style= {{fontWeight: '600'}} >{comment.user} </Text> {' '}
                {comment.comment}
            </Text>
        </View>
        
        ))}
    </>
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft : 6,
        borderWidth: 1.6,
        borderColor: '#ff8501',
        
    },

    footerIcon: {
        width : 30,
        height : 30,
        resizeMode : 'contain'
    },

    leftFooterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '32%',
    },
})



export default Post
