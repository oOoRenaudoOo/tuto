import { StyleSheet, Text, View, Button, ScrollView, RefreshControl, FlatList, SectionList } from 'react-native'
import React, {useState} from 'react'


const App = () => {

  const [items, SetItems] = useState([
    { name: 'item 1' },
    { name: 'item 2' },
    { name: 'item 3' },
    { name: 'item 4' },
    { name: 'item 5' },
    { name: 'item 6' },
    { name: 'item 7' },
    { name: 'item 10' },
    { name: 'item 20' },
    { name: 'item 21' },
    { name: 'item 9' },
    { name: 'item 30' }
  ])

  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2']
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2']
    },
    {
      title: 'Title 3',
      data: ['Item 3-1', 'Item 3-2']
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2']
    },
    {
      title: 'Title 5',
      data: ['Item 5-1', 'Item 5-2']
    }
  ]

  const [refreshing, SetRefreshing] = useState(false)

  const onRefresh = () => {
    SetRefreshing(true)
    SetItems([...items, { name:'item69' }])
    SetRefreshing(false)
  }


  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({ item }) => (

          <Text style={styles.text}>{item}</Text>

      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    />
    // <FlatList
    //   
    //   data={items}
    //   renderItem={({ item }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }
    // />
    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }
    //   >
    //     {
    //       items.map((object) => {
    //         return (
    //           <View style={styles.item} key={object.key}>
    //             <Text style={styles.text}>{object.item}</Text>
    //           </View>
    //         )
    //       })
    //     } 
    //   </ScrollView>  
  )
}

export default App

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#bcece6', 
  },
  item: {
    backgroundColor: "#FFC300",
    alignItems: 'center',
    padding: 10,
    margin: 17,
    borderWidth: 2,
    borderRadius: 10
  },
  text: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic'
  }

})