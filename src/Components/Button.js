//tjrs importer REACT pour l'extends
import React from 'react';
import "./Calculator.css";

class Button extends React.Component{

    onClickButton = () =>{
        this.props.click(this.props.char);
    }

    render(){
        return <button className="buttons" onClick={this.onClickButton}>{this.props.char}</button>
    }

    
}

export default Button;