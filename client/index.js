import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'

console.disableYellowBox = true;

const Toggle = ({value, options, label, onChange}) => {
  const textStyle = {
    fontSize: 9
  }
  const defaultOptionStyle = {
    padding: 2
  }
  const activeOptionStyle = Object.assign({}, defaultOptionStyle, {
    backgroundColor: 'gold',
  })
  return (
    <View style={{flexDirection: 'column', paddingBottom: 0, paddingTop: 10}}>
      <Text style={[textStyle, {padding: 4, color: 'blue'}]}>{label}</Text>
      <View style={{flexDirection: 'row'}}>
        {options.map((option) => {
          const optionStyle = option === value ? activeOptionStyle : defaultOptionStyle
          return (
            <TouchableOpacity
              style={optionStyle}
              onPress={() => onChange(option)}>
              <Text style={textStyle}>{option}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

export default class LayoutDemo extends Component {
  constructor() {
    super()
    this.state = {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignSelf: 'auto',
      flexWrap: 'nowrap',
      applyFlex: 'false',
      resizeMode: 'stretch',
      flex1: 1,
      flex2: 2,
      flex3: 1
    }
  }

  render() {
    const { flexDirection, alignItems, justifyContent, alignSelf, flexWrap, applyFlex, resizeMode, flex1, flex2, flex3 } = this.state;

    const style = {
      flex: 1
    }

    const layoutStyle = {
      flex: 1,
      backgroundColor: 'lightpink',
      flexDirection,
      justifyContent,
      alignItems,
      flexWrap
    }


    const renderBoxes = function() {
      if (applyFlex === 'true') {
        return (
          <View style={layoutStyle}>
            <View style={{flex: flex1, padding: 10, backgroundColor: 'skyblue'}} ><Text>flex=1</Text></View>
            <View style={{flex: flex2,  padding: 10, backgroundColor: 'steelblue', alignSelf: alignSelf}} ><Text>flex=2</Text></View>
            <View style={{flex: flex3, padding: 10, backgroundColor: 'skyblue'}} ><Text>flex=1</Text></View>
          </View>
        )
      } else if (applyFlex === 'false') {
          return (
            <View style={layoutStyle}>
              <View style={{padding:25, margin: 10, backgroundColor: 'powderblue'}} ><Image source={require('./assets/cat.png')} resizeMode={resizeMode}/></View>
              <View style={{padding: 25, margin: 10, backgroundColor: 'skyblue'}} ></View>
              <View style={{padding: 25, margin: 10, backgroundColor: 'steelblue', alignSelf: alignSelf}} ></View>
              <View style={{padding: 25, margin: 10, backgroundColor: 'cornflowerblue'}} ></View>
              <View style={{padding: 25, margin: 10, backgroundColor: 'lightsteelblue'}} ></View>
            </View>
          ) 
        } else {
            return (
              <View style={layoutStyle}>
                <View style={{padding: 25, backgroundColor: 'lightsteelblue'}} ><Image source={require('./assets/pizzacat.png')} resizeMode={resizeMode}/></View>
              </View>
            )
        }
      }


    return (
      <View style={style}>
        
        <Toggle
          label={'apply flex values to boxes?'}
          value={applyFlex}
          options={['true', 'false', 'pizza cat only']}
          onChange={(option) => this.setState({applyFlex: option})}
        />
        <Toggle
          label={'flexDirection: the main direction'}
          value={flexDirection}
          options={['column', 'row']}
          onChange={(option) => this.setState({flexDirection: option})}
        />
        <Toggle
          label={'justifyContent: align children in the main direction'}
          value={justifyContent}
          options={['flex-start', 'center', 'flex-end', 'space-around', 'space-between']}
          onChange={(option) => this.setState({justifyContent: option})}
        />
        <Toggle
          label={'alignItems: how children align in the cross direction'}
          value={alignItems}
          options={['stretch', 'flex-start', 'center', 'flex-end']}
          onChange={(option) => this.setState({alignItems: option})}
        />
        <Toggle
          label={'alignSelf: how child aligns in x dir, overrides parent alignItems (box 3)'}
          value={alignSelf}
          options={['auto', 'flex-start', 'center', 'flex-end', 'stretch']}
          onChange={(option) => this.setState({alignSelf: option})}
        />
        <Toggle
          label={'flexWrap'}
          value={flexWrap}
          options={['nowrap', 'wrap']}
          onChange={(option) => this.setState({flexWrap: option})}
        />
        <Toggle
          label={'resizeMode'}
          value={resizeMode}
          options={['cover', 'contain', 'stretch', 'repeat', 'center']}
          onChange={(option) => this.setState({resizeMode: option})}
        />

        {renderBoxes()} 
          
      </View>
    )
  }
}

