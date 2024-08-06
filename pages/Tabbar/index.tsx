import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { useStatus, statusNumber } from '../ToDoContext'

interface ButtonProps {
  txt: string,
  id: statusNumber,
}

function TabButton({ txt, id }: ButtonProps) {
  const { status, setStatus } = useStatus()
  const onPress = () => {
    setStatus(id)
  }

  return <TouchableOpacity onPress={onPress}>
    <View style={styles.btn}>
      <Text style={{
        ...styles.btnTxt,
        backgroundColor: status === id ? '#03c1fd' : '#e6fdff',
      }}>
        {txt}
      </Text>
    </View>
  </TouchableOpacity>
}

export default function Tabbar() {
  return (
    <View style={styles.tabbar}>
      <TabButton txt='未完成' id={'0'} />
      <TabButton txt='已完成' id={'1'} />
      <TabButton txt='已删除' id={'-1'} />
    </View>
  )
}

