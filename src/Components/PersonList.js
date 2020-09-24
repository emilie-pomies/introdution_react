import React, {Fragment} from 'react';

class PersonList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            personList: this.props.personList
        }
    }

    deleteUser = (userId) =>{
        alert(userId);
        this.setState({personList: this.state.personList.filter( person => person.id !== userId )})

    }

    render() {
      return (
        <Fragment>
          {this.props.personList.map((person) => {
            return <Person personData={person} deleteUser={this.deleteUser} />
          })}
        </Fragment>
      );
    }
  }

class Person extends React.Component{

    delete = () =>{
        this.props.deleteUser(this.props.personData.id);
    }


    render(){
        return <div>
        <span>{this.props.personData.id}</span> - <span>{this.props.personData.name}</span>
        <button onClick={this.delete}> delete user </button>
      </div>
    }
}


  export default PersonList;