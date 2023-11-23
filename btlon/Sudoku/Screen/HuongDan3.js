import React from "react";
import { Button, Pressable, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const HuongDan3 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ width: 330, height: 40, borderRadius: 15, alignItems: 'center', flexDirection: 'row' }}>
                <Pressable
                    onPress={() => navigation.navigate('HuongDan2')}
                >
                    <AntDesign name="left" size={24} color="#3388E7" />
                </Pressable>
                <View style={{ width: 100 }}><Text style={{ fontSize: 20, fontWeight: 'bold', left: 100 }}>Cách chơi</Text></View>
                <Pressable
                    onPress={() => navigation.navigate("TuyChon")}
                    style={{ marginLeft: 160 }}>

                    <Text style={{ fontSize: 20, color: '#3388E7' }}>Bỏ qua</Text>
                </Pressable>
            </View>
            <View style={{ width: 310, height: 370, margin: 20 }}>
                <Image source={require('../img/HuongDan3.png')} style={{ width: 310, height: 370, resizeMode: 'contain' }} />
            </View>
            <View style={{ width: 350, height: 20, borderRadius: 15, margin: 20 }}>
                <center>
                    <Text style={{ fontSize: 15, color: '#7A7E86' }}>Bật chế độ Ghi Chú để thêm và xóa ghi chú</Text>
                </center>
            </View>
            <View style={{ width: 350, height: 80, borderRadius: 15, margin: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Pressable
                    onPress={() => navigation.navigate("HuongDan2")}
                    style={{ backgroundColor: 'blue', borderRadius: 90, width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </Pressable>
                <View style={{ flexDirection: 'row', width: 60, height: 30, alignItems: 'baseline', justifyContent: 'space-around', left: 100 }}>
                    <Octicons name="dot-fill" size={24} color="grey" />
                    <Octicons name="dot-fill" size={24} color="grey" />
                    <Octicons name="dot-fill" size={24} color="blue" />
                </View>
                <Pressable
                    onPress={() => navigation.navigate("CachChoi")}
                    style={{ backgroundColor: 'blue', borderRadius: 90, width: 50, height: 50, alignItems: 'center', justifyContent: 'center', left: 180 }}>
                    <AntDesign name="check" size={24} color="white" />
                </Pressable>
            </View>
        </View>
    );
}
export default HuongDan3;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8ECF4',
        alignItems: "center",
        justifyContent: "center",
    },

});