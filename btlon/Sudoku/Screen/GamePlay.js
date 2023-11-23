import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign, Entypo, SimpleLineIcons, Fontisto, MaterialCommunityIcons  } from '@expo/vector-icons';
const Gameplay = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { row, col } = route.params || { row: 0, col: 0 };

  const [board, setBoard] = useState(initializeBoard());
  const [selectedCell, setSelectedCell] = useState({ row, col });
  const [boardHistory, setBoardHistory] = useState([initializeBoard()]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (isBoardComplete(board)) {
      Alert.alert('Congratulations!', 'You won the game!');
     
    }
    setBoardHistory([...boardHistory, board]);
  }, [board]);

  function initializeBoard() {

    return [
      [6, 0, 0, 7, 4, 5, 0, 0, 0],
      [0, 5, 0, 0, 3, 2, 4, 0, 0],
      [4, 8, 0, 1, 9, 6, 7, 0, 3],
      [5, 1, 4, 0, 0, 0, 9, 6, 2],
      [0, 0, 7, 0, 2, 0, 1, 8, 0],
      [8, 2, 0, 5, 0, 0, 0, 0, 4],
      [0, 0, 0, 2, 0, 0, 0, 0, 0],
      [2, 0, 6, 9, 8, 0, 0, 3, 0],
      [0, 0, 0, 0, 1, 3, 8, 0, 0]
    ];
  }


  const handleNumberPress = (number) => {
    if (selectedCell.row !== undefined && selectedCell.col !== undefined) {
      const newBoard = [...board];
      newBoard[selectedCell.row][selectedCell.col] = number;
      setBoard(newBoard);
      setInputValue(number.toString());
    }
  };

  function isBoardComplete(board) {
   
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0 || !isValidMove(board, i, j, board[i][j])) {
          return false;
        }
      }
    }
    return true;
  }

  function isValidMove(board, row, col, num) {
 
    return (
      isRowValid(board, row, num) &&
      isColValid(board, col, num) &&
      isBoxValid(board, row - (row % 3), col - (col % 3), num)
    );
  }

  function isRowValid(board, row, num) {
    
    return !board[row].includes(num);
  }

  function isColValid(board, col, num) {
    
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) {
        return false;
      }
    }
    return true;
  }

  function isBoxValid(board, startRow, startCol, num) {

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startRow + i][startCol + j] === num) {
          return false;
        }
      }
    }
    return true;
  }

  const handleClearCell = () => {
    if (selectedCell.row !== undefined && selectedCell.col !== undefined) {
      const newBoard = [...board];
      newBoard[selectedCell.row][selectedCell.col] = 0;
      setBoard(newBoard);
    }
  };

  const handleUndo = () => {
    if (boardHistory.length > 1) {
      
      const newHistory = [...boardHistory];
      newHistory.pop();
      setBoardHistory(newHistory);
      
      setBoard(newHistory[newHistory.length - 1]);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={{alignItems:'center', justifyContent:'space-between', flexDirection: 'row'}}>
        <Pressable onPress={()=> navigation.navigate('Chính')}>
          <AntDesign name="left" size={24} color="#3388E7" />
        </Pressable>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: '#304863'}}>Sudoku.com</Text>
        <Pressable onPress={()=> navigation.navigate('TuyChon')}>
          <Image style={{width:30, height:30, margin: 5}} resizeMode='contain' source={require("../img/setting.png")}/>
        </Pressable>
      </View>  
      <View style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={{flexDirection: 'row'}}>
            {row.map((cell, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={[styles.cell, selectedCell.row === rowIndex && selectedCell.col === colIndex && styles.selectedCell]}
                onPress={() => setSelectedCell({ row: rowIndex, col: colIndex })}
              >
                <Text>{cell !== 0 ? cell : ''}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', margin: 5}}>
        <View>
          <MaterialCommunityIcons name="arrow-u-left-top" size={24} color="grey" onPress={handleUndo} />
          <Text>Hoàn tác</Text>
        </View>
        <View>
          <Fontisto name="eraser" size={24} color="grey" onPress={handleClearCell} />    
          <Text>Xóa</Text>
        </View>
        <View>
          <SimpleLineIcons name="pencil" size={24} color="grey" />      
          <Text>Ghi chú</Text>
        </View>
        <View>
          <Entypo name="light-bulb" size={24} color="grey" />    
          <Text>Gợi ý</Text>
        </View>
      </View>         
      <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItem: 'center',}}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <TouchableOpacity
            key={number}
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 5,}}
            onPress={() => handleNumberPress(number)}
          >
            <Text style={{fontSize: 30, color: '#3388E7'}}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{margin: 20}}>
        <Text>Input: {inputValue}</Text> 
      </View>
    </View>
  );
};
export default Gameplay;
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    height: 600,
  },
  cell: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#3F434E',
  },
  selectedCell: {
    backgroundColor: '#B2DEFC',
  },
});

