//tjrs importer REACT pour l'extends
import React from 'react';

//import de la feuille de style css
import "./Calculator.css";
import Display from "./Display";
import Button from "./Button";

class Calculator extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { // STATE tjrs un objet JS
            displayValue : ""
        }  
    }

    clear = () =>{
        this.setState({displayValue : ""});
    }

    calculate = () => {
        // alert(eval(this.state.displayValue));
        // eval estune chaine de caractere.
        this.setState({displayValue : eval(this.state.displayValue).toString()});
        //on convertie le eval en string afin d'enchainer les calcul
    }

    clickButton = (char) => {
        //alert(char);
        this.setState({displayValue : this.state.displayValue.concat(char)});
    }
    render()
    {
            return  <div className="calculator">
                {/* avec la methosde map 
                {["0","1","2","3","4","5", "+", "-", "*"].map(character =>{
                    return <Button char={character} click={this.clickButton}/>
                })} */}
                        <Display  display={this.state.displayValue}/>
                        <div id="lign">
                            <Button char="7" click={this.clickButton}/>
                            <Button char="8" click={this.clickButton}/>
                            <Button char="9" click={this.clickButton}/>
                            <Button char="/" click={this.clickButton}/>
                        </div>
                        <div id="lign">
                            <Button char="4" click={this.clickButton}/>
                            <Button char="5" click={this.clickButton}/>
                            <Button char="6" click={this.clickButton}/>
                            <Button char="*" click={this.clickButton}/>
                        </div>
                        <div id="lign">
                            <Button char="1" click={this.clickButton}/>
                            <Button char="2" click={this.clickButton}/>
                            <Button char="3" click={this.clickButton}/>
                            <Button char="-" click={this.clickButton}/>
                        </div>
                        <div id="lign">
                            {/* <Button char="%" click={this.clickButton}/> */}
                            <Button char="0" click={this.clickButton}/>
                            <Button char="=" click={this.calculate}/>
                            <Button char="clear" click={this.clear}/>
                            <Button char="+" click={this.clickButton}/>
                        </div>                   
                    </div>
    }
}
export default Calculator;