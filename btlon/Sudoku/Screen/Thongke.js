import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons, AntDesign, MaterialIcons } from '@expo/vector-icons';
const Tab = createMaterialTopTabNavigator();

function EasyScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Trò chơi</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                        <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                            <AntDesign name="table" size={32} color="#3388E7" />
                            <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Trò chơi Đã bắt đầu</Text>
                        </View>
                        <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                    </View>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                        <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                            <MaterialCommunityIcons name="crown-outline" size={32} color="#3388E7"/>
                            <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Trò chơi Đã thắng</Text>
                        </View>
                        <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                    </View>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                        <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                            <MaterialCommunityIcons name="flag-outline" size={32} color="#3388E7" />
                            <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Tỉ lệ Thắng</Text>
                        </View>
                        <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                    </View>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                        <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                            <MaterialCommunityIcons name="flag-remove-outline" size={32} color="#3388E7" />
                            <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Thắng không Lỗi</Text>
                        </View>
                        <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                    </View>
                </View>
                <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Thời gian</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                        <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                            <MaterialCommunityIcons name="clock-out" size={32} color="#3388E7" />
                            <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Thời gian Tốt nhất</Text>
                        </View>
                        <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                    </View>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                        <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                            <MaterialCommunityIcons name="clock-end" size={32} color="#3388E7" />
                            <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Thời gian Trung bình</Text>
                        </View>
                        <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                    </View>
                </View>
                <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Điểm số</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                        <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                            <MaterialCommunityIcons name="star-plus-outline" size={32} color="#3388E7" />
                            <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Điểm Cao nhất</Text>
                        </View>
                        <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                    </View>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                        <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                            <MaterialCommunityIcons name="star-check-outline" size={32} color="#3388E7" />
                            <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Điểm Trung bình</Text>
                        </View>
                        <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                    </View>
                </View>
                <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Chuỗi</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                        <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                            <AntDesign name="arrowright" size={32} color="#3388E7" />
                            <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Chuỗi Thắng hiện tại</Text>
                        </View>
                        <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                    </View>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                        <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                            <MaterialIcons name="double-arrow" size={32} color="#3388E7" />
                            <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Chuỗi Thắng tốt nhất</Text>
                        </View>
                        <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
  }
  
  function MediumScreen() {
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Trò chơi</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <AntDesign name="table" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Trò chơi Đã bắt đầu</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="crown-outline" size={32} color="#3388E7"/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Trò chơi Đã thắng</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="flag-outline" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Tỉ lệ Thắng</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="flag-remove-outline" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Thắng không Lỗi</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Thời gian</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="clock-out" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Thời gian Tốt nhất</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="clock-end" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Thời gian Trung bình</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Điểm số</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="star-plus-outline" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Điểm Cao nhất</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="star-check-outline" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Điểm Trung bình</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Chuỗi</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <AntDesign name="arrowright" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Chuỗi Thắng hiện tại</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialIcons name="double-arrow" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Chuỗi Thắng tốt nhất</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    );
  }

  function DifficultScreen() {
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Trò chơi</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <AntDesign name="table" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Trò chơi Đã bắt đầu</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="crown-outline" size={32} color="#3388E7"/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Trò chơi Đã thắng</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="flag-outline" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Tỉ lệ Thắng</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="flag-remove-outline" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Thắng không Lỗi</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Thời gian</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="clock-out" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Thời gian Tốt nhất</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="clock-end" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Thời gian Trung bình</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Điểm số</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="star-plus-outline" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Điểm Cao nhất</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="star-check-outline" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Điểm Trung bình</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Chuỗi</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <AntDesign name="arrowright" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Chuỗi Thắng hiện tại</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialIcons name="double-arrow" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Chuỗi Thắng tốt nhất</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    );
  }
  
  function ExpertScreen() {
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Trò chơi</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <AntDesign name="table" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Trò chơi Đã bắt đầu</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="crown-outline" size={32} color="#3388E7"/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Trò chơi Đã thắng</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="flag-outline" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Tỉ lệ Thắng</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="flag-remove-outline" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Thắng không Lỗi</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Thời gian</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="clock-out" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Thời gian Tốt nhất</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="clock-end" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Thời gian Trung bình</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Điểm số</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="star-plus-outline" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Điểm Cao nhất</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="star-check-outline" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Điểm Trung bình</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Chuỗi</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <AntDesign name="arrowright" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Chuỗi Thắng hiện tại</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialIcons name="double-arrow" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Chuỗi Thắng tốt nhất</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    );
  }
  function MasterScreen() {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Trò chơi</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <AntDesign name="table" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Trò chơi Đã bắt đầu</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="crown-outline" size={32} color="#3388E7"/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Trò chơi Đã thắng</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="flag-outline" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Tỉ lệ Thắng</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="flag-remove-outline" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Thắng không Lỗi</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Thời gian</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="clock-out" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Thời gian Tốt nhất</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="clock-end" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Thời gian Trung bình</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Điểm số</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="star-plus-outline" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Điểm Cao nhất</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialCommunityIcons name="star-check-outline" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Điểm Trung bình</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Chuỗi</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <AntDesign name="arrowright" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Chuỗi Thắng hiện tại</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, height:100, backgroundColor:'#f1f5fb', borderRadius: 20}}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', margin:20 }}>
                        <MaterialIcons name="double-arrow" size={32} color="#3388E7" />
                        <Text style={{fontSize: 15, fontWeight: 'bold', margin: 8}}>Chuỗi Thắng tốt nhất</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight:'bold', margin:20, marginBottom: 60}}>-</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    );
  }



function Thongke() {

    return (
        <View style={{backgroundColor: '#fff'}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-evenly', left: 70}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginTop: 10}}>Thống kê</Text>
                <MaterialCommunityIcons name="format-list-checkbox" size={25} color="#3388E7" />
            </View>
            <Tab.Navigator initialRouteName="Dễ"
                screenOptions={{
                    tabBarLabelStyle: { textTransform: 'none' },
                    tabBarActiveTintColor: '#3388E7', 
                    tabBarInactiveTintColor: 'grey'
                  }}
            >
                <Tab.Screen name="Dễ" component={EasyScreen}/>
                <Tab.Screen name="Trung bình" component={MediumScreen}/>
                <Tab.Screen name="Khó" component={DifficultScreen}/>
                <Tab.Screen name="Chuyên gia" component={ExpertScreen}/>
                <Tab.Screen name="Bậc thầy" component={MasterScreen}/>
            </Tab.Navigator>
        </View>
        
      );
}
export default Thongke

const styles = StyleSheet.create({
    container: {
        height: 540,
        backgroundColor: '#fff',
        
    },
});