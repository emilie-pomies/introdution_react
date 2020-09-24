//tjrs importer REACT pour l'extends
import React from 'react';

//import de la feuille de style css
import "./Counter.css";

class Counter extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = { // état initial de timer - STATE tjrs un objet JS
            timer : 0,
            showStartButton : false
        }
        this.stopTimer = this.stopTimer.bind(this);//on peut se passé du bind si on passepar une fct fléché voir lignes 54 à 57
        
        
    }
 
    componentDidMount()
    {
        this.timerId = setInterval(()=>{
            this.setState({ timer: this.state.timer + 1 })
        },1000)
    }

    render()
    {
        return  <div id="timer">
                    <div>{this.state.showStartButton && "This timer is stopped"}</div>
                    <div>This timer started at {this.props.startTime}</div>
                    <div>Timer interval is {this.props.interval}</div>
                    <div>Current count is : {this.state.timer}</div>
                    {/* //<div><button onClick={this.stopTimer}>Stop !</button></div> */}
                    <div>{this.state.showStartButton ?  <button onClick={this.startTimer}>Start !</button> : 
                                                        <button onClick={this.stopTimer}>Stop !</button>}</div>
                    
                            
                </div>
    }

    componentWillMount()
    {
        clearInterval(this.timerId);
    }

    stopTimer() 
    {
         clearInterval(this.timerId);
         this.setState({ showStartButton: true });
         this.props.timerStopped(this.state.timer, this.props.name);
    }

    // stopTimer = () =>{
    //     clearInterval(this.timerId);
    //      this.setState({ showStartButton: true });
    // }

    // voir lignes 54 à 57
         
    startTimer = ()=>
    {
        this.setState({ showStartButton: false });
        this.timerId = setInterval(() => {
            this.setState({ timer: this.state.timer + 1 }) 
        }, this.props.interval);
    }
       
}

export default Counter;