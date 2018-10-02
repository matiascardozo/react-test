/* eslint no-underscore-dangle: ["error", { "allow": ["article", "_links"] }] */
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,

} from 'react-router-dom';
import Article from './components/Article';
import ScrollToTop from './components/ScrollToTop';
import CompleteList from './components/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: [],
    };
  }

  componentDidMount() {
    const articlesPromise = axios.get(
      'https://thewirecutter.com/wp-json/wp/v2/posts',
    );

    articlesPromise
      .then((response) => {
        const articleList = response.data;
        const linkPromises = articleList.map(article => axios.get(article._links['wp:featuredmedia'][0].href));
        return Promise.all([articlesPromise, Promise.all(linkPromises)]);
      })
      .then(([articles, links]) => {
        const articleList = articles.data;
        articleList.forEach((article, index) => {
          article.img = links[index].data.link;
        });
        this.setState({ articleList });
      });
  }

  render() {
    const { articleList } = this.state;
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Route
              exact
              path="/"
              render={() => <CompleteList articleList={articleList} />}
            />
            <Route path="/article/:articleId" component={Article} />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}


export default App;
