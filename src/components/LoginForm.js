import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
      email: '',
      password: '',
      loading: false,
      error: '',
    };
  onButtonPress() {
    console.log('LoginForm: onButtonPress');
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />
    }else {
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Login
        </Button>
      );
    }
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    aliginSelf: 'center',
    color: 'red',
  }
};

export default LoginForm;
