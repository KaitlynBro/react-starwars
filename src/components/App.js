import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import Details from './Details';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
    };
  }

  receiveResults(data) {
    this.setState({ searchResults: data });
  }

  render() {
    return (
      <div className="App">
        {/* Bind this.receiveResults to the App component and pass it as a
          prop to the Search component */}
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                (<div>
                  <Header />
                  <Search receiveResults={data => this.receiveResults(data)} />
                  {this.state.searchResults.length
                    ? <Results results={this.state.searchResults} />
                    : null}
                </div>)}
            />
            <Route exact path="/details/:object/:object_id" component={Details} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
