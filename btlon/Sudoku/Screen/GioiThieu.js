import React from "react";
import { Button, Pressable, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const GioiThieu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ width: 350, height: 40, borderRadius: 15, alignItems: 'center', flexDirection: 'row' }}>
                <Pressable
                    onPress={() => navigation.navigate('TuyChon')}
                >
                    <AntDesign name="left" size={24} color="#3388E7" />
                </Pressable>
                <View style={{ width: 200 }}><Text style={{fontSize:20, fontWeight:'bold',left:70}}>Giới thiệu Trò chơi</Text></View>
                
                <Pressable
                    onPress={() => navigation.navigate("TuyChon")}
                    style={{ marginLeft: 80 }}>

                    <Text style={{ fontSize: 20, color: '#3388E7' }}>Xong</Text>
                </Pressable>
            </View>
            <View style={{ width: 350, height: 120, borderRadius: 15, margin: 20, backgroundColor:'#fff' ,flexDirection:'row'}}>
                <Image source={require('../img/ThongTinSP.png')} style={{ width: 90, height: 90, resizeMode: 'contain',margin:10 }} />
                <View style={{width:250, height:70, flexDirection:'column',}}>
                    <Text style={{ alignItems: 'center', fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Sudoku.com - Câu đố kinh điển</Text>
                    <Text style={{ alignItems: 'center', fontSize: 15, marginLeft: 10 }}>Phiên bản 5.7.1</Text>
                    <Text style={{ alignItems: 'center', fontSize: 15, marginLeft: 10,color:'#7A7E86' }}>@2017-2023 Easybrain Ltd. <br></br>Mọi quyền được bảo lưu.</Text>
                </View>
            </View>
            <View style={{ width: '350', height: 120, borderRadius: 15, margin: 20, backgroundColor: '#fff' }}>
                    <Pressable
                        
                        style={styles.btn1}>
                        
                        <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30, width: 290 }}>Trò chơi Khác từ Easybrain,com</Text>

                        <View><AntDesign name="right" size={20} color="#7A7E86"
                        />
                        </View>

                    </Pressable>
                    <Pressable
                       
                        style={styles.btn2}>
                        
                        <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30, width: 290 }}>Truy cập Easybrain.com</Text>

                        <View><AntDesign name="right" size={20} color="#7A7E86"
                        />
                        </View>
                    </Pressable>
                    <Pressable style={styles.btn3}>
                        <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30, width: 290 }}>Easybrain trên Facebook</Text>

                        <View><AntDesign name="right" size={20} color="#7A7E86"
                        />
                        </View>
                    </Pressable>
            </View>
            <View style={{ width: '350', height: 160, borderRadius: 15, margin: 20, backgroundColor: '#fff' }}>
                    <Pressable
                        
                        style={styles.btn1}>
                        
                        <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30, width: 290 }}>Điều khoản Dịch vụ</Text>

                        <View><AntDesign name="right" size={20} color="#7A7E86"
                        />
                        </View>

                    </Pressable>
                    <Pressable
                       
                        style={styles.btn2}>
                        
                        <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30, width: 290 }}>Chính sách Quyền riêng tư</Text>

                        <View><AntDesign name="right" size={20} color="#7A7E86"
                        />
                        </View>
                    </Pressable>
                    <Pressable style={styles.btn3}>
                        <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30, width: 290 }}>Cài đặt Quyền riêng tư</Text>

                        <View><AntDesign name="right" size={20} color="#7A7E86"
                        />
                        </View>
                    </Pressable>
                    <Pressable style={styles.btn4}>
                        <Text style={{ alignItems: 'center', fontSize: 18, marginLeft: 30, width: 290 }}>Giấy phép</Text>

                        <View><AntDesign name="right" size={20} color="#7A7E86"
                        />
                        </View>
                    </Pressable>
            </View>
        </View>
    );
}
export default GioiThieu;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8ECF4',
        alignItems: "center",
        //justifyContent: "center",
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