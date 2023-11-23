import React from "react";
import { Button, Pressable, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const HuongDan1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ width: 350, height: 40, borderRadius: 15, alignItems: 'center', flexDirection: 'row' }}>
                <Pressable
                    onPress={() => navigation.navigate('CachChoi')}
                >
                    <AntDesign name="left" size={24} color="#3388E7" />
                </Pressable>
                <View style={{ width: 100 }}><Text style={{ fontSize: 20, fontWeight: 'bold', left: 110 }}>Cách chơi</Text></View>
                <Pressable
                    onPress={() => navigation.navigate("TuyChon")}
                    style={{ marginLeft: 160 }}>

                    <Text style={{ fontSize: 20, color: '#3388E7' }}>Bỏ qua</Text>
                </Pressable>
            </View>
            <View style={{ width: 310, height: 310, margin: 20 }}>
                <Image source={require('../img/HuongDan1.png')} style={{ width: 310, height: 310 }} />
            </View>
            <View style={{ width: 350, height: 80, borderRadius: 15, margin: 20 }}>
                <center>
                    <Text style={{ fontSize: 15, color: '#7A7E86' }}>Trò đố sudoku bắt đầu bằng một lưới trong đó một số ô đã được điền số. Trò đố được hoàn thành khi mỗi số từ 1 đến 9 chỉ xuất hiện một lần trong mỗi một của 9
                        <Text style={{ fontSize: 15, color: '#F89B1B',fontWeight:'bold' }}> hàng </Text>
                        , <Text style={{ fontSize: 15, color: '#E12E75',fontWeight:'bold' }}> cột </Text>
                        và
                        <Text style={{ fontSize: 15, color: '#2AC259',fontWeight:'bold' }}> khối </Text>
                        . Hãy nghiên cứu lưới để tìm những số có thể phù hợp cho mỗi ô.</Text>
                </center>
            </View>
            <View style={{ width: 350, height: 80, borderRadius: 15, margin: 20, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', width: 60, height: 30, alignItems: 'baseline', justifyContent: 'space-around', left: 150 }}>
                    <Octicons name="dot-fill" size={24} color="blue" />
                    <Octicons name="dot-fill" size={24} color="grey" />
                    <Octicons name="dot-fill" size={24} color="grey" />
                </View>

                <Pressable
                    onPress={() => navigation.navigate("HuongDan2")}
                    style={{ backgroundColor: 'blue', borderRadius: 90, width: 50, height: 50, alignItems: 'center', justifyContent: 'center', left: 230 }}><AntDesign name="arrowright" size={24} color="white" /></Pressable>

            </View>
        </View>
    );
}
export default HuongDan1;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8ECF4',
        alignItems: "center",
        justifyContent: "center",
    },

});