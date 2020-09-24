//tjrs importer REACT pour l'extends
import React from 'react';
import "./Calculator.css";

class Display extends React.Component{

    render(){
        return <div className="calcInput">{this.props.display}</div>
    }
    
}

export default Display;