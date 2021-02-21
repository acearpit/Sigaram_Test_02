import "./App.css";

import InfiniteScroll from "react-infinite-scroller";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 1,
    };
  }

  showItems() {
    var items = [];
    for (var i = 0; i < this.state.times; i++) {
      items.push(
        <div className="App" key={i}>
          <h1>Hello World</h1>
        </div>
      );
    }
    return items;
  }

  loadMore() {
    this.setState({ times: this.state.times + 20 });
  }

  render() {
    return (
      <InfiniteScroll pageStart={0} loadMore={this.loadMore.bind(this)} hasMore={true}>
        {this.showItems()}
      </InfiniteScroll>
    );
  }
}

export default App;
