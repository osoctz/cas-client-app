import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`api/users`)
      .then(res => {
        console.log(res)
        if ('code' in res.data){
          let code = res.data.code
          console.log(code)
          if (code==='302'){
            console.log(res.data.data)
            window.location = res.data.data; 
          }
        }else{
          const persons = res.data;
          this.setState({ persons });
        } 
        
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul>
    )
  }
}