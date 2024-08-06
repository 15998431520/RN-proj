import React, { } from 'react'
import { Text, View, ScrollView, Button } from 'react-native'
import { useList, useListDispatch, Todo, useStatus } from '../ToDoContext';

function ToDoItem({ listItem, index }: { listItem: Todo, index: number }) {
  const dispatch = useListDispatch()
  const { text, id } = listItem || {}
  return <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
      marginLeft: 20,
    }}
  >
    <Text>{index + 1}、</Text>
    <Text>{text || ''}</Text>
    <Button
      title='删除'
      color={'red'}
      onPress={() => dispatch({
        type: 'delete',
        id,
      })}
    />
  </View>
}

export default function Main(): React.JSX.Element {
  const { status } = useStatus()
  const list = useList()?.filter(item => item.status === status)
  return (
    <ScrollView
      style={{
        backgroundColor: '#dfdfdf',
        paddingBottom: 12,
        paddingTop: 10,
        flex: 1,
      }}
    >
      {
        list?.map((item, index) => <ToDoItem listItem={item} index={index} />)
      }
    </ScrollView>
  )
}