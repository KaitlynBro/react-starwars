//importing React, React Router, and all my components
import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import Details from './Details';

//main component where all of my smaller components will live
class App extends Component {
  constructor() {
    super();
    //this is the default state of the search results. it is empty when the page loads
      //therefore, the default state is just an empty array
    this.state = {
      searchResults: [],
    };
  }
  //creating function that holds the recieved query results in an object
    //setting default state to the results function
  receiveResults(data) {
    this.setState({ searchResults: data });
  }


  render() {
    return (
      <div className="App">
        {/*implementing Browser Router into App component that will handle requests*/}
        <BrowserRouter>
          <Switch>
            {/*applying Route to watch for a query string that will match the /react-starwars pathname and when there is a match, render component*/}
            <Route exact path="/" render={() => <Redirect to="/react-starwars" />} />
            <Route
              exact
              path="/react-starwars"
              render={() =>
                (<div>
                  <Header />
                  {/*binding this.recieveResults to the App component and passing it as a prop to the search component*/}
                  <Search receiveResults={data => this.receiveResults(data)} />
                  {this.state.searchResults.length
                    ? <Results results={this.state.searchResults} />
                    : null}
                </div>)}
            />
            <Route exact path="/react-starwars/details/:object/:object_id" component={Details} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
