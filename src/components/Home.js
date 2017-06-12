import React from "react";

export class Home extends React.Component {
  render() {

    let status = true;
    let content = "";

    if (status) {
      content = "Haloooo!";
    }

    return(
      <div>
      <h1>Home Component</h1>
      <p> Your name is {this.props.name} , your age is {this.props.age}</p>
      <p>User Object => Name: {this.props.user.name}</p>

      <div>
        <ul>
          {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
        </ul>
      </div>

      <hr/>
      {this.props.children}
      </div>
    )
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  user:  React.PropTypes.object
};
