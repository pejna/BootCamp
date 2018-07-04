import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import NewsDetails from './screens/NewsDetails';
import NewsList from './screens/NewsList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewsSelected: false
    };


  }

  render() {
    return (
      <View>
        {this.state.isNewsSelected && <NewsDetails />}
        {!this.state.isNewsSelected && <NewsList artices={this.state.artices}/>}
      </View>
    );
  }

  componentDidMount(){
    fetch('http://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&api-key=718c5c8e6f1e4af3afcc4611eb5d690c')
    .then((response) => response.json()).then((responseJson) => this.parseArticles(responseJson));
  }

  parseArticles(articleJson){
    let parsedArticles;

    this.setState({articles: parsedArticles});
  }
}



const styles = StyleSheet.create({

})