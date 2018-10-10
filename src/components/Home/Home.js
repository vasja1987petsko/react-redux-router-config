import React, { Component } from 'react';
import api from 'api';

class Home extends Component {
     constructor(props) {
              super(props);
              this.state = {
                  welcome: "Добро пожаловать на сайт!",
                  arr:[{name:"username"}]

              };
     }
      componentDidMount() {
          api({
              method: 'get',
              url: 'https://jsonplaceholder.typicode.com/users',
              headers: {
                  'Content-type': 'application/json'
              }
          }).then((response)=>{
              console.log('api', response.data);
              this.setState({arr: response.data});
          }).catch((error)=>{
              console.log('api', error);
          });
      }
      render() {
        return (
          <div className="home App">
              <h1> home {this.state.welcome}</h1>
              <h1> response {this.state.arr[0].name}</h1>
          </div>
        );
      }
}

export default Home;
