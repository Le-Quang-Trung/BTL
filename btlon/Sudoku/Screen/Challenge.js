import * as React  from 'react';
import { StyleSheet, Text, View, Pressable ,Image, ImageBackground } from 'react-native';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
function Challenge({navigation}) {
    const [value, setValue] = React.useState(dayjs('2023-11-23'));

    return (
        <View style={styles.container}>
            <View style={{width:400, height: 200 ,alignItems: "center", justifyContent: "center"}}>
                <ImageBackground  source={require('../img/background.png')} style={{alignItems: 'center', width: 400, height: 200}}>
                    <Text style={{color:'#fff', textAlign:'center', }}>Thử thách Hàng ngày</Text>
                    <Image style={{width:129, height:142, margin: 20}} resizeMode='contain' source={require("../img/11challenge.png")}/> 
                </ImageBackground>
            </View>
            <View style={{alignItems: "center", justifyContent: "center"}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                        <DemoItem>
                        <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
            </View>
            <View style={{alignItems: "center", justifyContent: "center"}}> 
                <Pressable onPress={()=> navigation.navigate('GamePlay')}>
                    <Text style={{display: "flex", width: 350, height: 40,alignItems: "center", justifyContent: "center", backgroundColor: "#2E86ED", color: "#F1FFFF", borderRadius: 20}}>Chơi</Text>
                </Pressable>
            </View>
        </View>
    );
    
}
export default Challenge

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
});