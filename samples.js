import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements'

class SampleList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          backgroundColor="#ff5622"
          title='普通のボタン'
          style={styles.button}/>
        <Button
          backgroundColor="#ff5622"
          title='onPress/onLongPress'
          style={styles.button}
          onPress={() => console.log('押されたよ')}
          onLongPress={() => console.log('長く押されたよ')}/>
        <Button
          raised
          backgroundColor="#009588"
          title='RAISED（ちょっと浮き上がる）'
          style={styles.button}/>
        <Button
          icon={{name: 'cached'}}
          backgroundColor="#9c26b0"
          title='アイコン付き'
          style={styles.button}/>
        <Button
          large
          backgroundColor="#8ac34a"
          title='largeだとこのくらいの大きさ'
          style={styles.button}/>
        <Button
          large
          backgroundColor="#8ac34a"
          title='largeだとこのくらいの大きさ'
          style={styles.button}/>
        <Button
          large
          iconRight={{name: 'code'}}
          backgroundColor="#ffc107"
          title='右にもアイコンを付けられる'
          style={styles.button}/>
        <Button
          large
          backgroundColor="#25292f"
          icon={{name: 'mark-github', type: 'octicon'}}
          title='OCTICONも使える'
          style={styles.button}/>
        <Button
          large
          backgroundColor="#25292f"
          icon={{name: 'mark-github', type: 'octicon'}}
          title='OCTICONも使える'
          style={styles.button}/>
        

        <Button
          large
          backgroundColor="#25292f"
          icon={{name: 'mark-github', type: 'octicon'}}
          title='OCTICONも使える'
          style={styles.button}/>

        <Button
          large
          backgroundColor="#25292f"
          icon={{name: 'mark-github', type: 'octicon'}}
          title='OCTICONも使える'
          style={styles.button}/>

        <Button
          large
          backgroundColor="#25292f"
          icon={{name: 'mark-github', type: 'octicon'}}
          title='OCTICONも使える'
          style={styles.button}/>

        <Button
          large
          backgroundColor="#25292f"
          icon={{name: 'mark-github', type: 'octicon'}}
          title='OCTICONも使える'
          style={styles.button}/>

        <Button
          large
          backgroundColor="#25292f"
          icon={{name: 'mark-github', type: 'octicon'}}
          title='OCTICONも使える'
          style={styles.button}/>

        <Button
          large
          backgroundColor="#25292f"
          icon={{name: 'mark-github', type: 'octicon'}}
          title='OCTICONも使える'
          style={styles.button}/>                
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10
  }
});

export default SampleList;  
  