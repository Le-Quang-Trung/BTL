import React, { useEffect, useState } from 'react'
import { Pressable } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

function Home({ navigation }) {
    
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent:'space-between', bottom: 100, left: 140,}}>
                <Pressable onPress={()=> navigation.navigate('Trophy')}>
                    <Image style={{width:30, height:30, margin: 5}} resizeMode='contain' source={require("../img/trophy.png")}/>   
                </Pressable>
                <Pressable onPress={()=> navigation.navigate('TuyChon')}>
                    <Image style={{width:30, height:30, margin: 5}} resizeMode='contain' source={require("../img/setting.png")}/>
                </Pressable>
            </View>
            <View style={{flexDirection:'row',}}>
                <View style={{width:150, height: 200, backgroundImage: 'linear-gradient(to bottom, #4C95E7, #458CDF )', borderRadius: 10, justifyContent:'space-around', alignItems: 'center', bottom : 80, margin: 5}}>
                    <Image style={{width: 35, height:35}} resizeMode='contain' source={require("../img/calender.png")}/>
                    <Text style={{fontSize: 12, color:'#75ACE4'}}>THỬ THÁCH HÀNG NGÀY</Text>
                    <Text style={{color: '#fff'}}>9 tháng 11</Text>
                    <TouchableOpacity> 
                        <Text style={{display: 'flex', width: 70, height:22, backgroundColor: '#4E84C5', alignItems: 'center', justifyContent: 'center', color:'#F8FFFE', borderRadius: 15}}>Chơi</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:150, height: 200,backgroundImage: 'linear-gradient(to bottom, #B2D622, #4DA411 )', borderRadius: 10, justifyContent:'space-around', alignItems: 'center', bottom : 80, margin: 5}}>
                    <Image style={{width: 40, height:40}} resizeMode='contain' source={require("../img/fox.png")}/>
                    <Text style={{fontSize: 12, color:'#B8E280'}}>SỰ KIỆN</Text>
                    <Text style={{color: '#fff'}}>Thế giới Rừng</Text>
                    <TouchableOpacity> 
                        <Text style={{display: 'flex', width: 70, height:22, backgroundColor: '#75B842', alignItems: 'center', justifyContent: 'center', color:'#F8FFFE', borderRadius: 15}}>Chơi</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 30, color: '#304863'}}>Sudoku.com</Text>
            </View>
            <View style={{top: 80}}> 
                <TouchableOpacity>
                    <Text style={{display: "flex", width: 295, height: 40, backgroundColor: "#2E86ED", alignItems: "center", justifyContent: "center", color: "#F1FFFF", borderRadius: 20}}>Tiếp tục Trò chơi</Text>
                </TouchableOpacity>
                <Pressable onPress={()=> navigation.navigate('GamePlay')}>
                    <Text style={{display: "flex", width: 295, height: 40, backgroundColor: "#FFF", alignItems: "center", justifyContent: "center", color: "#3086E4", marginTop: 15, borderRadius: 20}}>Trò chơi Mới</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f5fb',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
