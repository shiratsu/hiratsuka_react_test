import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';
import axios from 'axios';

const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
  
  class SampleList extends Component {
    
    state = {
      worklists: null,
      listMeta: null
    }

    componentDidMount() {
       
      var param = {'a':'01','pr':'13','start':'1',}
  
      axios
      .get('https://api-front.shotworks.jp/api-front/app/worklist', { params: param　})
      .then((results) => {
          // 通信に成功してレスポンスが返ってきた時に実行したい処理
          console.log(results.data.Result);
          console.log(results.data.ResultSet);
          this.setState({ worklists: results.data.Result, listMeta: results.data.ResultSet });
      })
      .catch((error) => { 
          // 通信に失敗してレスポンスが返ってこなかった時に実行したい処理
          console.log('処理に失敗しました');
      });     
    }
   

    render() {
      return (
        <SafeAreaView style={styles.container}>
        <SectionList
          sections={this.state.worklists}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
      )
    }

    constructor(props) {
      super(props);
      this.state = {date: new Date()};
      console.log("constructor");
    }

    // componentWillUnmount(){
    //   console.log("componentDidMount");
    // }

    // componentWillMount(){
    //   console.log("componentWillMount");
    // }

    // componentDidMount(){
    //   console.log("componentDidMount");
    // }

    // componentDidUpdate(prevProps) {

    //   console.log("componentDidUpdate");
    // }
    
    // componentWillUpdate(prevProps) {

    //   console.log("componentWillUpdate");
    // }

    // componentWillUnmount() {

    //   console.log("componentWillUnmount");
    // }

    // static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    //   const name = nextProps.name.toUpperCase();
    //   if (prevState.name !== name) {
    //     return { isDerivered: true, name };
    //   }
    //   return;
    // }
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
      marginHorizontal: 10,
    },
    item: {
      backgroundColor: '#ffffff',
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 28,
    },
    title: {
      fontSize: 13,
    },
  });

export default SampleList;  
  