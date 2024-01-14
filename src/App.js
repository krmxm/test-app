import { Component } from 'react';
import './App.css';

class WhoAmI extends Component { // возможнсть работать с пропсами нам приходит от реакт компонента от которого мы наследуем WhoAmI
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      position: ''
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

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const {name, surname, link} = this.props;
    const {position, years} = this.state;
    return (
      <div className="App">
        <button onClick={this.nextYear}>+++</button>
        <h1>My name is {name}, surname - {surname},
         age - {years},
         position - {position}</h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onInput={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
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
