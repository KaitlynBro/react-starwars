import React from 'react';
import $ from 'jquery';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      result: {},
    };
  }

  componentDidMount() {
    const url = `https://swapi.co/api/${this.props.match.params.object}/${this.props.match.params
      .object_id}`;
    $.get({
      url,
      dataType: 'json',
    }).then((response) => {
      this.setState({ result: response });
    });
  }

  goBackHome() {
    this.props.history.push('/');
  }

  renderAttributes() {
    const result = this.state.result;
    const resultKeys = Object.keys(result);
    const resultLength = resultKeys.length;

    if (!resultLength) {
      return false;
    }
    return $.map(resultKeys, (attribute, index) => {
      if (Array.isArray(result[attribute])) {
        return true;
      }
      return (
        <li key={index}>
          <div className="attributeName">
            {attribute}:
          </div>
          <div className="attributeValue">
            {result[attribute]}
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <button id="refresh" onClick={() => this.goBackHome()}>Go Back</button>
        <section id="resultsContainer">
          <ul className="resultsInfo">
            {this.renderAttributes()}
          </ul>
        </section>
      </div>
    );
  }
}

export default Details;
