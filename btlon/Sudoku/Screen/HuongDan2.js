import React from "react";
import { Button, Pressable, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const HuongDan2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ width: 330, height: 40, borderRadius: 15, alignItems: 'center', flexDirection: 'row' }}>
                <Pressable
                    onPress={() => navigation.navigate('HuongDan1')}
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
                <Image source={require('../img/HuongDan2.png')} style={{ width: 310, height: 370, resizeMode: 'contain' }} />
            </View>
            <View style={{ width: 350, height: 20, borderRadius: 15, margin: 20 }}>
                <center>
                    <Text style={{ fontSize: 15, color: '#7A7E86' }}>Chọn một ô rồi chọn vào một số để điền vào ô đó</Text>
                </center>
            </View>
            <View style={{ width: 350, height: 80, borderRadius: 15, margin: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Pressable
                    onPress={() => navigation.navigate("HuongDan1")}
                    style={{ backgroundColor: 'blue', borderRadius: 90, width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </Pressable>
                <View style={{ flexDirection: 'row', width: 60, height: 30, alignItems: 'baseline', justifyContent: 'space-around', left: 100 }}>
                    <Octicons name="dot-fill" size={24} color="grey" />
                    <Octicons name="dot-fill" size={24} color="blue" />
                    <Octicons name="dot-fill" size={24} color="grey" />
                </View>

                <Pressable
                    onPress={() => navigation.navigate("HuongDan3")}
                    style={{ backgroundColor: 'blue', borderRadius: 90, width: 50, height: 50, alignItems: 'center', justifyContent: 'center', left: 180 }}>
                    <AntDesign name="arrowright" size={24} color="white" />
                </Pressable>

            </View>
        </View>
    );
}
export default HuongDan2;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8ECF4',
        alignItems: "center",
        justifyContent: "center",
    },

});