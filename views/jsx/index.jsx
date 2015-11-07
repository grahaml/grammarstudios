const React = require("react");
const DefaultLayout = require("./layout.jsx");

class Index extends React.Component {

  render () {
    return(
      <DefaultLayout title={this.props.title}>
        <h1>Hi</h1>
        <h2>Welcome to {this.props.title}</h2>
      </DefaultLayout>
    );
  }

}

module.exports = Index;
