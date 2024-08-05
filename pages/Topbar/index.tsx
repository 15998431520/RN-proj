import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import { useListDispatch } from '../ToDoContext'

export default function Topbar(): React.JSX.Element {
  const [text, setText] = useState('')
  const dispatch = useListDispatch()
  function handleCreate() {
    if (!text) return
    dispatch({
      type: 'add',
      text,
    })
    setText('')
  }

  return (
    <View
      style={{
        backgroundColor: '#9c9c9c',
        paddingBottom: 12,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          height: 36,
          fontSize: 20,
          lineHeight: 36,
          marginBottom: 6,
        }}
      >TO DO List</Text>
      <View
        style={{
          flexWrap: 'nowrap',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <TextInput
          placeholder='请输入'
          style={{
            backgroundColor: '#fff',
            height: 36,
            padding: 12,
            borderRadius: 36,
            width: '60%'
          }}
          onChangeText={txt => setText(txt)}
          value={text}
        />
        <View
          style={{
            width: 60,
            backgroundColor: '#ff0',
            height: 36,
            borderRadius: 20,
            marginLeft: 20
          }}
        >
          <Text
            style={{
              lineHeight: 36,
              textAlign: 'center',
            }}
            onPress={handleCreate}
          >创建</Text>
        </View>
      </View>
    </View>
  )
}