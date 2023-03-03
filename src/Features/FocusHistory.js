import React from "react";
import {View,Text,StyleSheet,FlatList} from 'react-native';
import {colors} from "../utils/colors";
import {fontSizes,spacing} from "../utils/sizes";


export const FocusHistory=({history}) => {
  const item=({item}) => <Text style={styles.item}> -  {item}</Text>
  
  if(!history.length || !history) return(<Text style={styles.title}> We haven't Focussed on Anything</Text>)
  return(
    <View style={styles.container}>
    <Text style={styles.title}>
    Things we're Focussed on:
    </Text>
    <FlatList data={history} renderItem={item} />
    </View>
  )
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:spacing.md
  },
  title:{
    color:colors.white,
    fontSize:fontSizes.ml,
    fontWeight:"bold"
  },
  item:{
    flex:1,
    color:colors.white,
    fontSize:spacing.md,
    paddingTop:spacing.md
  }


});

