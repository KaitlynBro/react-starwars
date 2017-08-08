import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
  handleClick() {
    const searchQuery = this.searchInput.value;
    if (this.peopleInput.checked) {
      this.fetchData('people', searchQuery);
    } else if (this.planetsInput.checked) {
      this.fetchData('planets', searchQuery);
    } else if (this.starshipsInput.checked) {
      this.fetchData('starships', searchQuery);
    }
  }

  fetchData(object, searchQuery) {
    const url = `https://swapi.co/api/${object}/?search=${searchQuery}`;
    $.get({
      url,
      dataType: 'json',
      // once I have data, then display results with starwars.display function
    }).then((response) => {
      this.props.receiveResults(response.results);
    });
  }

  render() {
    return (
      <section id="searchInputs">
        <div id="starwarsContainer">
          <h2>
            {"I'm looking for:"}
          </h2>
          <ul className="inputs">
            <li>
              {/* Assign property peopleInput of the class to be the below input */}
              <input
                type="radio"
                ref={(input) => {
                  this.peopleInput = input;
                }}
                name="radio"
                id="people"
              />
              People
            </li>
            <li>
              <input
                type="radio"
                ref={(input) => {
                  this.planetsInput = input;
                }}
                name="radio"
                id="planets"
              />
              Planets
            </li>
            <li>
              <input
                type="radio"
                ref={(input) => {
                  this.starshipsInput = input;
                }}
                name="radio"
                id="starships"
              />
              Starships
            </li>
          </ul>
          <input
            type="search"
            ref={(input) => {
              this.searchInput = input;
            }}
            id="searchMe"
            placeholder="Search"
          />
          <button id="go" onClick={() => this.handleClick()}>
            Go!
          </button>
        </div>
      </section>
    );
  }
}

export default Search;
