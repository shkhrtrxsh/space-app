import { Component,Fragment } from "react";
import './App.css';
import {Card} from "./components/Cards";
import {Modal} from "./components/Modal";
class App extends Component{
  constructor() {
    super();
    this.state={
      launchpads: []
    }
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v4/launchpads")
    .then((response)=>response.json())
    .then(launchpads=> this.setState({launchpads: launchpads}))
  }
  render(){
    return (
      <div className="container">
      <h1>SpaceX Launchpads</h1>
      <div className="row">
        {this.state.launchpads.map((launchpad)=> (
          <Fragment>
          <Card launchpad={launchpad}/>
          <Modal launchpad={launchpad}/>
</Fragment>
        ))}
      </div>
      </div>

    );
  }

}

export default App;
