const React = require("react");
const DefaultLayout = require("./layout.jsx");

class Index extends React.Component {

  render () {
    return(
      <DefaultLayout title={this.props.title}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>Hi</h1>
              <h2>Welcome to {this.props.title}</h2>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }

}

module.exports = Index;
