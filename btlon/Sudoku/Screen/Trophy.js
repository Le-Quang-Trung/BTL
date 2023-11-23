import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Pressable, StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from "react-native";
const Tab = createMaterialTopTabNavigator();

function ChallengeScreen(){
    return(
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>2023</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/11.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Mười Một</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 30</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/10.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Mười</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/9.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Chín</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 30</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/8.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Tám</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/7.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Bảy</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/6.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Sáu</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 30</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/5.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Năm</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/4.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Tư</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 30</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/3.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Ba</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/2.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Hai</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 28</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/1.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Một</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
            </View>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>2022</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/12.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Mười Hai</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/11.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Mười Một</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 30</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/10.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Mười</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/9.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Chín</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 30</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/8.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Tám</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/7.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Bảy</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/6.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Sáu</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 30</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/5.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Năm</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/4.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Tư</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 30</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/3.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Ba</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/2.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Hai</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 28</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/1.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Một</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
            </View>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>2021</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/12.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Mười Hai</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/11.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Mười Một</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 30</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/10.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Mười</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/9.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Chín</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 30</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/8.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Tám</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/7.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Bảy</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/6.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Sáu</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 30</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/5.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Năm</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/4.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Tư</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 30</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/3.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Ba</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/2.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Hai</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 28</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/1.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Một</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
            </View>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>2020</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/12.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Mười Hai</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/11.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Mười Một</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 30</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/10.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Mười</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/9.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Chín</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 30</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/8.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Tám</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/7.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Bảy</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/6.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Sáu</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 30</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/5.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Năm</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/4.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Tư</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 30</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/3.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Ba</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/2.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Hai</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 29</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/1.png")}/> 
                    <Text style={{color: '000000'}}>Tháng Một</Text>
                    <View style={{borderRadius: 10, backgroundColor:'#E9EDF3', width: 60, height: 7, margin: 10}}></View>
                    <Text style={{color: '#A1A1A6'}}>0 / 31</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    );
}

function EventsScreen(){
    return(
        <View style={styles.container}>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start', margin: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>2021</Text>
            </View>
            <View style={{justifyContent: 'flex-start', alignItems:'flex-start'}}>
                <Image style={{width:129, height:150}} resizeMode='contain' source={require("../img/event.png")}/> 
                <Text style={{color: '000000', textAlign: 'center'}}>Cuộc phiêu lưu<br></br>Sudoku</Text>
                <Text style={{color: '#A1A1A6',textAlign: 'center'}}>26/12/2021</Text>
            </View>
        </View>
    );
}

function Trophy({navigation}) {
  return (
    <View style={{backgroundColor: '#fff'}}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-evenly', left: 70}}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginTop: 10}}>Giải thưởng</Text>
            <Pressable onPress={()=> navigation.navigate('Chính')}>
                <Text style={{fontSize: 15, color:'#3388E7'}}>Xong</Text>
            </Pressable>
        </View>
        <Tab.Navigator initialRouteName="Thử thách"
            screenOptions={{
                tabBarLabelStyle: { textTransform: 'none' },
                tabBarActiveTintColor: '#3388E7', 
                tabBarInactiveTintColor: 'grey',
                }}
            tabBarStyle={{
                borderRadius: 20,
                backgroundColor: '#3388E7'
            }}
            >
            <Tab.Screen name="Thử thách" component={ChallengeScreen}/>
            <Tab.Screen name="Sự kiện" component={EventsScreen}/>
        </Tab.Navigator>
    </View>
  );
}
export default Trophy
const styles = StyleSheet.create({
    container: {
        height: 600,
        backgroundColor: '#fff',
        
    },
});
