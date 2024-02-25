import { Text, View } from 'react-native'
import React, { Component } from 'react'

class ErrorBoundary extends Component {
    state = { error: false };
  
    static getDerivedStateFromError(error) {
      return { error: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // logErrorToMyService(error, errorInfo);
      console.log(errorInfo)
    }
  
    render() {
      if (this.state.error) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Something went wrong.</Text>
                <Text>{this.props.fallback}</Text>
            </View>
        );
      }
        return this.props.children; 
    }
  }

export default ErrorBoundary