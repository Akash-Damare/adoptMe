import { Component } from "react";
import { withRouter } from "react-router";
// import { withRouter } from "react-router-dom";

class Details extends Component {
  constructor() {
    super();
    this.state = { loading: true, Date: new Date() };
  }
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );

    const json = await res.json();
    this.timeId = setInterval(() => {
      this.tick();
    }, 1000);
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  tick() {
    this.setState({
      Date: new Date(),
    });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading..</div>;
    }

    const { animal, breed, city, state, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <h2>It is {this.state.Date.toLocaleTimeString()}.</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
