const React = require("react");

class ErrorView extends React.Component {

  render () {
    console.log(this.props.error);
    return (
      <div>
        {this.props.message}
      </div>
    )
  }
}

module.exports = ErrorView;
