import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ICDate} from '../../assets';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({onPress}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Select Date');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();

    setText(fDate);
  };

  const showMode = currentDate => {
    setShow(true);
    setMode(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={{marginRight: 4}}>
          <TouchableOpacity onPress={() => showMode('date')}>
            <ICDate />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.date}>{text}</Text>
          {/* {date.toLocaleString()} */}
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
  date: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
