import React from "react";
import { Button, Pressable, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const CachChoi = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-between', backgroundColor:'#fff', height: 45}}>
                <Pressable onPress={() => navigation.navigate('TuyChon')}>
                    <AntDesign name="left" size={24} color="#3388E7" />  
                </Pressable>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginTop: 10}}>Cách chơi</Text>
                <Pressable onPress={()=> navigation.navigate('TuyChon')}>
                    <Text style={{fontSize: 15, color:'#3388E7'}}>Xong</Text>
                </Pressable>
            </View>
            <View style={{ width: 350, height: 80, borderRadius: 15, margin: 20 }}>
                <Pressable
                    onPress={() => navigation.navigate("HuongDan1")}
                    style={styles.btn1}>
                    <Image source={require('../img/sudokuCoDien.png')} style={{ width: 35, height: 35 }} />
                    <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30 }}>Sudoku cổ điển</Text>
                </Pressable>
                <Pressable style={styles.btn2}>
                    <Image source={require('../img/thuKillerSudoku.png')} style={{ width: 35, height: 35 }} />
                    <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30 }}>Killer Sudoku</Text>
                </Pressable>
            </View>
        </View>
    );
}
export default CachChoi;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8ECF4',
        height: 670,
    },
    btn1: {
        width: 350,
        backgroundColor: "#fff",
        height: 40,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignItems: "center",
        //justifyContent: "center" ,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#E8ECF4'
    },
    btn2: {
        width: 350,
        backgroundColor: "#fff",
        height: 40,
        borderTopLeftRadius:15, 
        borderTopRightRadius:15, 
        alignItems: "center",
        //justifyContent: "center" ,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#E8ECF4'
    },
});