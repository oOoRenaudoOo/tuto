import { StyleSheet, Text, View, Button, ScrollView, RefreshControl, FlatList, SectionList } from 'react-native'
import React, {useState} from 'react'


const App = () => {

  const [DATA, SetDATA] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2']
    }
  ])

  const [refreshing, SetRefreshing] = useState(false)

  const onRefresh = () => {
    SetRefreshing(true)
    SetDATA([...DATA, { title: 'Title ' +  (DATA.length + 1) , data: ['Item ' + (DATA.length + 1)  + '-1', 'Item ' + (DATA.length + 1) + '-2']}])
    SetRefreshing(false)
  }


  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item}</Text>
          </View>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.headerItem}>
          <Text style={styles.textHeader}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    />
  )
}

export default App

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#bcece6', 
  },
  headerItem: {
    backgroundColor: "#FFC300",
    alignItems: 'center',
    padding: 10,
    marginTop: 17,
    borderWidth: 1,
    borderRadius: 10
  },
  item: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  textHeader: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  textItem: {
    fontSize: 28
  }

})