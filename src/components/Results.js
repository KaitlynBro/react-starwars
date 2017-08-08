import React from 'react';

class Results extends React.Component {
  getResultUrl(result) {
    const apiUrl = result.url; // "https://swapi.co/api/planets/1/"
    const regexMatches = apiUrl.match(/api(\/.*)/);
    return `/react-starwars/details${regexMatches[1]}`; // "/react-starwars/details/planets/1/"
  }

  addResultHtml() {
    return this.props.results.map(result =>
      (<div key={result.url} className="queryResults">
        <h2>
          <li>
            <a href={this.getResultUrl(result)}>
              {result.name}
            </a>
          </li>
        </h2>
      </div>),
    );
  }

  render() {
    return (
      <div>
        <section id="resultsContainer">
          {this.addResultHtml()}
        </section>
      </div>
    );
  }
}

export default Results;
