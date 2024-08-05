import React, { } from 'react'
import { Text, View, ScrollView, Button } from 'react-native'
import { useList, useListDispatch, Todo } from '../ToDoContext';

function ToDoItem({ listItem }: { listItem: Todo }) {
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
  const list = useList()
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
        list?.map((item) => <ToDoItem listItem={item} />)
      }
    </ScrollView>
  )
}