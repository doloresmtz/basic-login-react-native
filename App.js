import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { LoginStruct, LoginOptions } from "./app/components/forms/testForm";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      testFormValue: {
        user: "",
        password: ""
      },
      testFormError: ""
    };
  }
  onChange = testFormValue => {
    console.log(this.state.testFormValue);
    this.setState({
      testFormValue
    });
  };
  sendFormTest = () => {
    console.log(this.state);
    const validate = this.refs.formTest.getValue();

    if (validate) {
      this.setState({
        testFormError: ""
      });
      console.log("Login correcto");
    } else {
      console.log("Login fallido");
      this.setState({
        testFormError: "Rellena todos los campos."
      });
    }
  };
  render() {
    const { testFormValue, testFormError } = this.state;
    return (
      <View style={styles.container}>
        <Form
          ref="formTest"
          type={LoginStruct}
          options={LoginOptions}
          onChange={v => this.onChange(v)}
        />
        <Button title="Login" onPress={this.sendFormTest.bind(this)} />
        <Text style={styles.testFromErrorText}>{testFormError}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40
  },
  testFromErrorText: {
    color: "#f00",
    textAlign: "center",
    paddingTop: 50
  }
});
