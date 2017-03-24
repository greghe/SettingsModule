/*
 * @providesModule SettingsView
 * @flow
 * 
 */

import React from 'react';

import {
  View,
  Text,
  Settings,
  TextInput
} from 'react-native';

const kStringKey = "stringKey";
const kFloatKey = "floatKey";
const kBooleanKey = "booleanKey";
const kEditableValueKey = "editableValueKey";
const kNativePrefsKey = "nativePrefsKey";

export default 
class SettingsView extends React.Component {

  watchId: number;
  inputText: string;

  constructor(props) {
    super(props);
    this.inputText = "ABC";
    this.state = {observedKey: "A", inputText: this.inputText, editableValue: this.inputText,
            observedKey: Settings.get(kNativePrefsKey)};
  }

  componentWillMount() {
    Settings.set({[kStringKey]: "One"});
    Settings.set({[kFloatKey]: 2.0});
    Settings.set({[kBooleanKey]: true});
    Settings.set({[kEditableValueKey]: "ABC"});

    this.watchId = Settings.watchKeys('nativePrefsKey', 
        ()=>this.setState({observedKey: Settings.get('nativePrefsKey').toString()}));
  }

  componentWillUnmount() {
    Settings.clearWatch(this.watchId);
  }

  render() {
    return (
      <View style={{padding: 20}}>
        <Text>First Key:</Text>
         <Text>{"String Pref: " + Settings.get(kStringKey)}</Text>
         <Text>{"Float Pref: " + Settings.get(kFloatKey).toString()}</Text>
         <Text>{"Boolean Pref: " + Settings.get(kBooleanKey).toString()}</Text>
        <Text>{"Editable String Pref: " + this.state.editableValue}</Text>

        <TextInput 
          value={this.state.inputText}
          onChangeText={(text)=>{ this.setState({inputText: text}) }}
          onEndEditing={()=> {
              Settings.set({[kEditableValueKey]: this.state.inputText})
              this.setState({editableValue: Settings.get(kEditableValueKey)});
          }}>
        </TextInput>

        <Text>{"Watched Native Pref: " + this.state.observedKey}</Text>

      </View>
    );
  }

}