import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      num : "",
      tmp: 0,
      result : 0,   
    }
  }

  opSet(op)
  {
    if(op == "ac")
    {
      this.setState({result:0});
      this.setState({num:""});
      this.setState({tmp:0});
    }
    else if(op == ".")
    {
      this.setState({tmp:this.state.result+op});
      this.setState({num:this.state.num+op});
      this.setState({result:this.state.result+op})   
    }
    else if(op == "+")
    {
      this.setState({num:this.state.num+op});
      this.setState({result:0})
    }
    else if(op == "-")
    {
      this.setState({num:this.state.num+op});
      this.setState({result:0})
    }
    else if(op == "*")
    {
      this.setState({num:this.state.num+op});
      this.setState({result:0})
    }
    else if(op == "/")
    {
      this.setState({num:this.state.num+op});
      this.setState({result:0})
    }
    else if(op == "=")
    {
      var calcualte = (eval(this.state.num));
      this.setState({num:calcualte});
      this.setState({tmp:calcualte});
    }
  }
  numSet(num)
  {
    if(this.state.result == 0)
    {
      this.setState({tmp:(eval(this.state.result+num))});
      this.setState({result:(eval(this.state.result+num))});
      this.setState({num:this.state.num+num});     
    }
    else
    {
      this.setState({tmp:this.state.result+num});
      this.setState({result:this.state.result+num});
      this.setState({num:this.state.num+num});
    }   
  }

   render() {
      return (
          <View style = {{flex: 1, flexDirection: 'column', backgroundColor: 'black', padding: 10}}>
              <View style = {{flex: 3}}>
                  <View  style = {{flex: 1 , flexDirection: 'column'}}/>
                  <View  style = {{flex: 2 , flexDirection: 'column'}}>
                      <Text style={styles.txt4}>
                        {this.state.tmp}
                      </Text>
                  </View>
              </View>
              <View style = {{flex: 6}} >
                  <View  style = {{flex: 1 , flexDirection: 'row'}}>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_grey} onPress = { () => this.opSet("ac")}><Text style={styles.txt2_black}>AC</Text></TouchableOpacity>
                      </View>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_grey} onPress = { () =>this.opSet("* -1")}><Text style={styles.txt2_black}>+/-</Text></TouchableOpacity>
                      </View>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_grey} onPress = { () => this.opSet("/100")}><Text style={styles.txt2_black}>%</Text></TouchableOpacity>
                      </View>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_orange} onPress = { () => this.opSet("/")}><Text style={styles.txt1}>÷</Text></TouchableOpacity>
                      </View>
                  </View>
                  <View  style = {{flex: 1 , flexDirection: 'row'}}>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_darkgrey} onPress = { () => this.numSet("7")}><Text style={styles.txt2_white}>7</Text></TouchableOpacity>
                      </View>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_darkgrey} onPress = { () => this.numSet("8")}><Text style={styles.txt2_white}>8</Text></TouchableOpacity>
                      </View>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_darkgrey} onPress = { () => this.numSet("9")}><Text style={styles.txt2_white}>9</Text></TouchableOpacity>
                      </View>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_orange} onPress = { () => this.opSet("*")}><Text style={styles.txt1}>x</Text></TouchableOpacity>
                      </View>
                  </View>
                  <View  style = {{flex: 1 , flexDirection: 'row'}}>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_darkgrey} onPress = { () => this.numSet("4")}><Text style={styles.txt2_white}>4</Text></TouchableOpacity>
                      </View>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_darkgrey} onPress = { () => this.numSet("5")}><Text style={styles.txt2_white}>5</Text></TouchableOpacity>
                      </View>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_darkgrey} onPress = { () => this.numSet("6")}><Text style={styles.txt2_white}>6</Text></TouchableOpacity>
                      </View>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_orange} onPress = { () => this.opSet("-")}><Text style={styles.txt1}>-</Text></TouchableOpacity>
                      </View>
                  </View>
                  <View  style = {{flex: 1 , flexDirection: 'row'}}>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_darkgrey} onPress = { () => this.numSet("1")}><Text style={styles.txt2_white}>1</Text></TouchableOpacity>
                      </View>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_darkgrey} onPress = { () => this.numSet("2")}><Text style={styles.txt2_white}>2</Text></TouchableOpacity>
                      </View>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_darkgrey} onPress = { () => this.numSet("3")}><Text style={styles.txt2_white}>3</Text></TouchableOpacity>
                      </View>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_orange} onPress = { () => this.opSet("+")}><Text style={styles.txt1}>+</Text></TouchableOpacity>
                      </View>
                  </View>
                  <View  style = {{flex: 1 , flexDirection: 'row'}}>
                      <View  style = {{flex: 2 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_darkgrey} onPress = { () => this.numSet("0")}><Text style={styles.txt3}>0</Text></TouchableOpacity>
                      </View>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_darkgrey} onPress = { () => this.opSet(".")}><Text style={styles.txt2_white}>.</Text></TouchableOpacity>
                      </View>
                      <View  style = {{flex: 1 , flexDirection: 'column'}}>
                          <TouchableOpacity style = {styles.btn_orange} onPress = { () => this.opSet("=")}><Text style={styles.txt1}>=</Text></TouchableOpacity>
                      </View> 
                  </View>
              </View>
          </View>
      );
   }
}

const styles = StyleSheet.create({
      txt1: {
        fontSize: 45,
        color: 'white',
        alignSelf: 'center',
        paddingTop: 10
               
      },
      txt2_white: {
        fontSize: 35,
        color: 'white',
        alignSelf: 'center',
        paddingTop: 20
               
      },
      txt2_black: {
        fontSize: 35,
        color: 'black',
        alignSelf: 'center',
        paddingTop: 20
               
      },
      txt3: {
        fontSize: 35,
        color: 'white',
        alignSelf: 'flex-start',
        paddingTop: 20,
        paddingLeft: 30 
      },
      txt4: {
        fontSize: 75,
        color: 'white',
        alignSelf: 'flex-end',
        paddingBottom: 20,
        placeholder: "0" 
      },
      btn_orange: {
         backgroundColor: '#FF9900',
         height: '90%',
         width: '90%',
         borderBottomWidth: '0.5',
         borderRadius: 50
      },
      btn_grey: {
         backgroundColor: '#828282',
         height: '90%',
         width: '90%',
         borderBottomWidth: '0.5',
         borderRadius: 50 
      },
      btn_darkgrey: {
         backgroundColor: '#363636',
         height: '90%',
         width: '90%',
         borderBottomWidth: '0.5',
         borderRadius: 50 
      },

});
