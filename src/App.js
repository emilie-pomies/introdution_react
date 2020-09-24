import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import { Fragment } from 'react';
import Calculator from './Components/Calculator';
import PersonList from './Components/PersonList';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
    }
  

  timerStopped= (stopTime, counterId) =>
  {
    this.setState({counterId : counterId, stopTime : stopTime},
    () => 
        {
        alert(`un timer ${this.state.counterId} à stoppé à la valeur:  ${stopTime}`);
        });
  }

  render(){
    const persons = [{id: 1, name: "Bertrand"}, {id: 2, name: "Nicolas"}, {id: 3, name: "Benjamin"}];
    
    return (
      <Fragment> 
        <Counter startTime={10} interval={1000} name="counter1" timerStopped={this.timerStopped}/>
        <Counter startTime={1} interval={500} name="counter2" timerStopped={this.timerStopped}/>
        <Counter startTime={5} interval={2000} name="counter3" timerStopped={this.timerStopped}/>
      
        <Calculator/>
        <PersonList personList={persons}/>
      </Fragment>
    );
  }
}


  


export default App;
