import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const CaiDat = ({ navigation }) => {
  const [soundToggle, setSoundToggle] = useState(false);
  const [autoToggle, setAutoToggle] = useState(false);
  const [timerToggle, setTimerToggle] = useState(false);
  const [scoreToggle, setScoreToggle] = useState(false);
  const [notificationToggle, setNotificationToggle] = useState(false);
  const [smartSuggestionToggle, setSmartSuggestionToggle] = useState(false);
  const [numberInputToggle, setNumberInputToggle] = useState(false);
  const [errorLimitToggle, setErrorLimitToggle] = useState(false);

  const [errorCheckToggle, setErrorCheckToggle] = useState(false);
  const [highlightDuplicatesToggle, setHighlightDuplicatesToggle] = useState(false);
  const [highlightSameNumbersToggle, setHighlightSameNumbersToggle] = useState(false);
  const [hideUsedNumbersToggle, setHideUsedNumbersToggle] = useState(false);
  const [autoClearNoteToggle, setAutoClearNoteToggle] = useState(false);

  const toggleButton = (toggleFunction) => {
    toggleFunction((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-between', backgroundColor:'#fff', height: 45}}>
            <Pressable onPress={() => navigation.navigate('TuyChon')}>
              <AntDesign name="left" size={24} color="#3388E7" />  
            </Pressable>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginTop: 10}}>Cài đặt</Text>
            <Pressable onPress={()=> navigation.navigate('TuyChon')}>
              <Text style={{fontSize: 15, color:'#3388E7'}}>Xong</Text>
            </Pressable>
        </View>
      {/* Auto Toggle */}
      <ScrollView>
        <View style={{width:350, height:180, margin:10}}>
          <View style={styles.row}>
            <Text style={styles.label}>Âm thanh</Text>
            <TouchableOpacity
              style={[styles.toggleBtn, soundToggle ? styles.activeBtn : null]}
              onPress={() => toggleButton(setSoundToggle)}
            >
              <View style={[styles.circle, soundToggle ? styles.activeCircle : null]} />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Tự động Khóa</Text>
            <TouchableOpacity
              style={[styles.toggleBtn, autoToggle ? styles.activeBtn : null]}
              onPress={() => toggleButton(setAutoToggle)}
            >
              <View style={[styles.circle, autoToggle ? styles.activeCircle : null]} />
            </TouchableOpacity>
          </View>

          {/* Timer Toggle */}
          <View style={styles.row}>
            <Text style={styles.label}>Đồng hồ bấm giờ</Text>
            <TouchableOpacity
              style={[styles.toggleBtn, timerToggle ? styles.activeBtn : null]}
              onPress={() => toggleButton(setTimerToggle)}
            >
              <View style={[styles.circle, timerToggle ? styles.activeCircle : null]} />
            </TouchableOpacity>
          </View>

          {/* Score Toggle */}
          <View style={styles.row}>
            <Text style={styles.label}>Điểm số</Text>
            <TouchableOpacity
              style={[styles.toggleBtn, scoreToggle ? styles.activeBtn : null]}
              onPress={() => toggleButton(setScoreToggle)}
            >
              <View style={[styles.circle, scoreToggle ? styles.activeCircle : null]} />
            </TouchableOpacity>
          </View>
        </View>
         {/* Notification Toggle */}
        <View style={styles.row2}>
          <View style={styles.row}>
            <Text style={styles.label}>Thông báo Thống kê</Text>
            <TouchableOpacity
              style={[styles.toggleBtn, notificationToggle ? styles.activeBtn : null]}
              onPress={() => toggleButton(setNotificationToggle)}
            >
              <View style={[styles.circle, notificationToggle ? styles.activeCircle : null]} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{textAlign: 'center', color:'#9BA0B0'}}>Hiển thị tin nhắn về số lượng người có thể giải bài</Text>
        {/* Smart Suggestion Toggle */}
        <View style={styles.row2}>
          <View style={styles.row}>
            <Text style={styles.label}>Gợi ý Thông minh</Text>
            <TouchableOpacity
              style={[styles.toggleBtn, smartSuggestionToggle ? styles.activeBtn : null]}
              onPress={() => toggleButton(setSmartSuggestionToggle)}
            >
              <View style={[styles.circle, smartSuggestionToggle ? styles.activeCircle : null]} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{textAlign: 'center', color:'#9BA0B0'}}>Các gợi ý hướng dẫn sẽ giúp bạn biết cách giải đố sudoku</Text>
        {/* Number Input Toggle */}
        <View style={styles.row2}>
          <View style={styles.row}>
            <Text style={styles.label}>Nhập số Trước</Text>
            <TouchableOpacity
              style={[styles.toggleBtn, numberInputToggle ? styles.activeBtn : null]}
              onPress={() => toggleButton(setNumberInputToggle)}
            >
              <View style={[styles.circle, numberInputToggle ? styles.activeCircle : null]} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{textAlign: 'center', color:'#9BA0B0'}}>Nhấn và giữ một số để khóa và sử dụng số đó cho nhiều ô</Text>
        {/* Error Limit Toggle */}
        <View style={styles.row2}>
          <View style={styles.row}>
            <Text style={styles.label}>Giới hạn Lỗi</Text>
            <TouchableOpacity
              style={[styles.toggleBtn, errorLimitToggle ? styles.activeBtn : null]}
              onPress={() => toggleButton(setErrorLimitToggle)}
            >
              <View style={[styles.circle, errorLimitToggle ? styles.activeCircle : null]} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{textAlign: 'center', color:'#9BA0B0'}}>Giới hạn số lần phạm lỗi có thể là 3 mỗi trò chơi</Text>
        {/* Error Check Toggle */}
        <View style={styles.row2}>
          <View style={styles.row}>
            <Text style={styles.label}>Tự động Kiểm tra Lỗi</Text>
            <TouchableOpacity
              style={[styles.toggleBtn, errorCheckToggle ? styles.activeBtn : null]}
              onPress={() => toggleButton(setErrorCheckToggle)}
            >
              <View style={[styles.circle, errorCheckToggle ? styles.activeCircle : null]} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{textAlign: 'center', color:'#9BA0B0'}}>Đánh dấu các số không khớp với đáp án sudoku</Text>
        {/* Highlight Duplicates Toggle */}
        <View style={styles.row2}>
            <View style={styles.row}>
              <Text style={styles.label}>Tô sáng Trùng lặp</Text>
              <TouchableOpacity
                style={[styles.toggleBtn, highlightDuplicatesToggle ? styles.activeBtn : null]}
                onPress={() => toggleButton(setHighlightDuplicatesToggle)}
              >
                <View style={[styles.circle, highlightDuplicatesToggle ? styles.activeCircle : null]} />
              </TouchableOpacity>
            </View>
        </View>
        <Text style={{textAlign: 'center', color:'#9BA0B0'}}>Tô sáng các số lặp lại trong mỗi hàng, cột và khối</Text>
        {/* Highlight Same Numbers Toggle */}
        <View style={styles.row2}>
          <View style={styles.row}>
            <Text style={styles.label}>Tô sáng các Số Giống nhau</Text>
            <TouchableOpacity
              style={[styles.toggleBtn, highlightSameNumbersToggle ? styles.activeBtn : null]}
              onPress={() => toggleButton(setHighlightSameNumbersToggle)}
            >
              <View style={[styles.circle, highlightSameNumbersToggle ? styles.activeCircle : null]} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{textAlign: 'center', color:'#9BA0B0'}}>Khi chọn một ô có một số, hãy tô sáng các số giống nhau trên toàn lưới</Text>
        {/* Hide Used Numbers Toggle */}
        <View style={styles.row2}>
          <View style={styles.row}>
            <Text style={styles.label}>Ẩn các Số đã Dùng</Text>
            <TouchableOpacity
              style={[styles.toggleBtn, hideUsedNumbersToggle ? styles.activeBtn : null]}
              onPress={() => toggleButton(setHideUsedNumbersToggle)}
            >
              <View style={[styles.circle, hideUsedNumbersToggle ? styles.activeCircle : null]} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{textAlign: 'center', color:'#9BA0B0'}}>Ẩn các số đã được đặt trong 9 ô khác nhau</Text>
        {/* Auto Clear Note Toggle */}
        <View style={styles.row2}>
          <View style={styles.row}>
            <Text style={styles.label}>Tự động Xóa Ghi chú</Text>
            <TouchableOpacity
              style={[styles.toggleBtn, autoClearNoteToggle ? styles.activeBtn : null]}
              onPress={() => toggleButton(setAutoClearNoteToggle)}
            >
              <View style={[styles.circle, autoClearNoteToggle ? styles.activeCircle : null]} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{textAlign: 'center', color:'#9BA0B0'}}>Xóa một số khỏi tất cả các ghi chú khi nó được đặt trong một ô</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8ECF4',
    height: 670,
  },
  row: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin:2,
    width: 350,
    borderRadius: 10,
  },
  label: {
    fontSize: 18,
  },
  toggleBtn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
    marginLeft: "auto",
    justifyContent: "center",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    marginHorizontal: 10,
  },
  activeBtn: {
    backgroundColor: '#3388E7',
    color: '#fff',
  },
  activeCircle: {
    transform: [{ translateX: 20 }],
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    width: 300,
    borderWidth:1,
    borderColor:'#E8ECF4',
    borderRadius:15
  },
});

export default CaiDat;
