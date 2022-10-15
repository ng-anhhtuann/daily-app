/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import axios from 'axios';
import {ActivityIndicator, View, Image, Text} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    user: null,
    isLoading: false,
    hasError: false,
  };
  async componentDidMount() {
    console.log('componentDidMount');
    try {
      this.setState({isLoading: true});
      setTimeout(async () => {
        const response = await axios('https://api.github.com/users/facebook');
        this.setState({user: response.data, isLoading: false});
      }, 5000);
    } catch (err) {
      this.setState({hasError: true, isLoading: false});
    }
  }

  render() {
    const hasUSer = !this.state.isLoading && this.state.user;
    console.log(this.state);
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        {this.state.isLoading && (
          <View>
            <ActivityIndicator animating={true} />
            <Text>Loading...</Text>
          </View>
        )}
        {hasUSer && (
          <View>
            <Text>{this.state.user.name}</Text>
            <Image
              source={this.state.user.avatar_url}
              style={{height: 100, width: 100}}
            />
          </View>
        )}
      </View>
    );
  }
}

export default App;
