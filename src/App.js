import { Component } from 'react';
import './App.css';

class WhoAmI extends Component { // возможнсть работать с пропсами нам приходит от реакт компонента от которого мы наследуем WhoAmI
  constructor(props) {
    super(props);
    this.state = {
      years: 27
    }
  }

  nextYear = () => {
    console.log('+++');
    // this.setState({
    //   years: this.state.years + 1
    // })
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  render() {
    const {name, surname, link} = this.props;
    return (
      <div className="App">
        <button onClick={this.nextYear}>+++</button>
        <h1>My name is {name }, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    );
  }
}

function App() {
  return (
    <div className="app">
      <WhoAmI name="John" surname="Smith" link="vk.com"/>
    </div>
  )
}

export default App;
