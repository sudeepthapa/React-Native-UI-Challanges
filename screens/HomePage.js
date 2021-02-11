import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors'

const AppBar = props => {
  return (
    <View style={styles.appbar}>
        <Ionicons name="chevron-back" size={24} color="white" />
        <Ionicons name="md-notifications-outline" size={24} color="white" />
    </View>
  )
}

const TypeCard = props => {
  return (
    <View style={{...styles.typeCard, backgroundColor:props.color}}>
      <Ionicons name={props.icon} size={50} color={Colors.blue} />
      <Text style={styles.amount}>{ props.amount }</Text>
      <Text style={styles.title} >{ props.title }</Text>
    </View>
  )
}

const CustomButton = props => {
  return <View style={{...styles.button, backgroundColor:props.bgc}}>
    <Text style={{color:props.color}}>{ props.title }</Text>
  </View>
}

const TransactionCard = props => {
  
  return (
    <View style={styles.transaction}>
      <View style={styles.tranLeft}>
        <View style={{...styles.iconContainer, backgroundColor:props.color}}>
          <AntDesign name={props.icon} size={30} color='#fff' />
        </View>
        <View>
          <Text style={styles.transactionTitle}>{ props.title }</Text>
          <Text style={styles.transactionSubTitle}>{props.subtitle}</Text>
        </View>
      </View>
      <View style={styles.tranRight}>
        <Text>{props.amount}</Text>
      </View>
    </View>
  )
}

const HomePage = props => {
  return (
    <View style={styles.screen}>
      <StatusBar hidden />
      <View style={styles.container}>
        <AppBar />
        <Text style={styles.balanceHeading}>Your Balance</Text>
        <Text style={styles.balance}>$547000.00</Text>
        <View style={styles.typeCards}>
          <TypeCard color={Colors.lightBlue} icon='md-notifications-outline' title="Expenses" amount="$5000" />
          <TypeCard color={Colors.lightPink} icon='bicycle' title="Spend on Goals" amount="$4500"/>
        </View>
      </View>
      <View style={styles.transactionContainer}>
        <View style={{...styles.container, marginTop:15}}>
          <View style={styles.titleBar}>
            <Text style={styles.amount}>Transactions</Text>
            <CustomButton title="View All" color={Colors.blue} bgc="#eee" />
          </View>
          <View style={styles.transactions}>
            <TransactionCard icon='car' title="Car Purchase" subtitle="Auto Loan" amount="$250" color="#56d289"/>
            <TransactionCard icon='home' title="House Purchase" subtitle="Airbnb Home" amount="$2250" color="#3b58b8"/>
            <TransactionCard icon='gift' title="Transport" subtitle="Uber Pathao" amount="$250" color="#f65d4e"/>
          </View>
        </View>
      </View>
    </View>
  )
 }

const styles = StyleSheet.create({
  screen: {
    flex:1,
    backgroundColor: Colors.blue,
  },
  container: {
    paddingHorizontal:40,
    marginVertical:40
  },  
  appbar: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  balanceHeading: {
    marginTop: 40,
    fontSize: 20,
    color:'#aaa'
  },
  balance: {
    marginTop: 10,
    fontSize: 26,
    color: '#fff',
    fontWeight:'bold' 
  },
  typeCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:30
  },
  typeCard: {
    width: "48%",
    height: 180,
    borderRadius: 10,
    padding: 20,
    justifyContent:'center'
  },
  amount: {
    marginVertical:6,
    fontWeight: 'bold',
    color:'#000',
    fontSize:20,
  },
  title: {
    color:'#777'
  },
  transactionContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopEndRadius:40,
    borderTopLeftRadius:40,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  transactions: {
    
  },
  transaction: {    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:10
  },
  tranLeft: {
    flexDirection: 'row',
    alignItems:'center'
  },
  tranRight:{},
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius:30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:20
  },
  transactionTitle: {
    fontWeight: 'bold',
    fontSize:13
  },
  transactionSubTitle: {
    color:'#444',
    fontSize:12
  },
})

export default HomePage;