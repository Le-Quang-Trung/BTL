import React from "react";
import { Button, Pressable, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const TuyChon = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'center', backgroundColor:'#fff', height: 45}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginTop: 10}}>Tùy chọn</Text>
                <Pressable onPress={()=> navigation.navigate('Chính')}>
                    <Text style={{fontSize: 15, color:'#3388E7', left: 120}}>Xong</Text>
                </Pressable>
            </View>
            <ScrollView>
                <View style={{ width: 350, height: 120, borderRadius: 15, margin: 20 , backgroundColor: '#fff'}}>
                    <Pressable
                        onPress={() => navigation.navigate("CaiDat")}
                        style={styles.btn1}>
                        <Image source={require('../img/settingred.png')} style={{ width: 35, height: 35 }} />
                        <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30, width: 290 }}>Cài đặt</Text>

                        <View><AntDesign name="right" size={20} color="#7A7E86"
                        />
                        </View>

                    </Pressable>
                    <Pressable
                        onPress={() => navigation.navigate("CachChoi")}
                        style={styles.btn2}>
                        <Image source={require('../img/cachchoi.png')} style={{ width: 35, height: 35 }} />
                        <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30, width: 290 }}>Cách chơi</Text>

                        <View><AntDesign name="right" size={20} color="#7A7E86"
                        />
                        </View>
                    </Pressable>
                    <Pressable style={styles.btn3}>
                        <Image source={require('../img/luatChoi.png')} style={{ width: 35, height: 35 }} />
                        <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30, width: 290 }}>Luật chơi</Text>

                        <View><AntDesign name="right" size={20} color="#7A7E86"
                        />
                        </View>
                    </Pressable>
                </View>
                <View style={{ width: '350', height: 120, borderRadius: 15, margin: 20, backgroundColor: '#fff' }}>
                    <Pressable style={styles.btn1}>
                        <Image source={require('../img/Trogiup.png')} style={{ width: 35, height: 35 }} />
                        <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30, width: 290 }}>Trợ giúp</Text>

                        <View><AntDesign name="right" size={20} color="#7A7E86"
                        />
                        </View>
                    </Pressable>
                    <Pressable style={styles.btn2}>
                        <Image source={require('../img/VeCuaToi.png')} style={{ width: 35, height: 35 }} />
                        <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30, width: 290 }}>Vé của tôi</Text>

                        <View><AntDesign name="right" size={20} color="#7A7E86"
                        />
                        </View>
                    </Pressable>
                    <Pressable
                        onPress={() => navigation.navigate("GioiThieu")}
                        style={styles.btn3}>

                        <Image source={require('../img/gioiThieu.png')} style={{ width: 35, height: 35 }} />
                        <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30, width: 290 }}>Giới thiệu</Text>

                        <View><AntDesign name="right" size={20} color="#7A7E86"
                        />
                        </View>                    </Pressable>
                </View>
                <View style={{ width: '350', height: 40, borderRadius: 15, margin: 20, backgroundColor: '#fff' }}>
                    <Pressable style={styles.btn4}>
                        <Image source={require('../img/TrodoToanHoc.png')} style={{ width: 35, height: 35 }} />
                        <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30, width: 290 }}>Trò đố toán học</Text>

                        <View><AntDesign name="right" size={20} color="#7A7E86"
                        />
                        </View>                    </Pressable>
                </View>
                <View style={{ width: '350', height: 80, borderRadius: 15, margin: 20, backgroundColor: '#fff' }}>
                    <Pressable style={styles.btn1}>
                        <Image source={require('../img/GoQC.png')} style={{ width: 35, height: 35 }} />
                        <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30, width: 290 }}>Gỡ quảng cáo</Text>

                        <View><AntDesign name="right" size={20} color="#7A7E86"
                        />
                        </View>                    </Pressable>
                    <Pressable style={styles.btn3}>
                        <Image source={require('../img/KhoiPhucMua.png')} style={{ width: 35, height: 35 }} />
                        <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30, width: 290 }}>Khôi phục mua</Text>

                        <View><AntDesign name="right" size={20} color="#7A7E86"
                        />
                        </View>                    </Pressable>
                </View>
                <View style={{ width: '350', height: 40, borderRadius: 15, margin: 20, backgroundColor: '#fff' }}>
                    <Pressable style={styles.btn4}>
                        <Image source={require('../img/thuKillerSudoku.png')} style={{ width: 35, height: 35 }} />
                        <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30, width: 290 }}>Thử Killer Sudoku</Text>

                        <View><AntDesign name="right" size={20} color="#7A7E86"
                        />
                        </View>                    
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
}
export default TuyChon;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8ECF4',
        height: 670,
    },
    btn1: {
        width: 350,
        backgroundColor: "FFFFFF",
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
        backgroundColor: "FFFFFF",
        height: 40,
        //borderTopLeftRadius:15, 
        //borderTopRightRadius:15, 
        alignItems: "center",
        //justifyContent: "center" ,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#E8ECF4'
    },
    btn3: {
        width: 350,
        backgroundColor: "FFFFFF",
        height: 40,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: "center",
        //justifyContent: "center" ,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#E8ECF4'

    },
    btn4: {
        width: 350,
        backgroundColor: "FFFFFF",
        height: 40,
        borderRadius: 15,
        alignItems: "center",
        //justifyContent: "center" ,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#E8ECF4'

    },
});