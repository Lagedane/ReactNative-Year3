import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type AppHeaderProps = {
    title:string;
    year?:number; // optional
}


const AppHeader = ({title, year}: AppHeaderProps): React.JSX.Element  => {
  return (
    <View>
      <Text>{title} {year && year+543}</Text>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({})