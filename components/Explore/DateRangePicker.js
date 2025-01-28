import { StyleSheet, Text, View, Button} from 'react-native'
import React, {useState} from 'react'
import DatePicker from 'react-native-date-picker';

const DateRangePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [openStart, setOpenStart] = useState(false);
    const [openEnd, setOpenEnd] = useState(false);

  return (
    <View style={styles.container}>
        {/*Boton para seleccionar la fecha de inicio */}
        <Button
            title='Seleccionar fecha de inicio'
            onPress={() => setOpenStart(true)}
        />
        <DatePicker
        modal
        open={openStart}
        date={startDate}
        mode="date"
        onConfirm={(date) => {
            setOpenStart(false);
            setStartDate(date);
        }}
        onCancel={() => setOpenStart(false)}
        />
    {/*  Boton para seleccionar fecha de fin*/}
    <Button
     title='Seleccionar fecha de fin'
     onPress={() => setOpenEnd(true)}
     style={styles.button}
    />
     <DatePicker
        modal
        open={openEnd}
        date={endDate}
        mode="date"
        onConfirm={(date) => {
            setOpenEnd(false);
            setEndDate(date);
        }}
        onCancel={() => setOpenEnd(false)}
     />
     {/*  Mostrar fecha seleccionadas*/}
     <Text style={styles.text}>
        fecha de inicio: {startDate.toDateString()}
     </Text>
     <Text style={styles.text}> 
        Fecha de fin: {endDate.toDateString()}
     </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    text: {
        marginTop: 20,
        fontSize: 16,
        textAlign: "center",

    },
    button: {
        marginTop: 10,
    },
});

export default DateRangePicker

