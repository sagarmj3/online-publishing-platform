import React from 'react';
import Publish from './Components/Publish.';
import View from './Components/View';
import Service from "./service";

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      authenticate: false,
      jwt: '',
      cards: [],
      user: '',
      publish: ''
    }

    this.handleLoginCall();
  }

  handleLoginCall = async () => {
    const response = await Service.post('auth/local', {
      identifier: "demouser@gmail.com",
      password: "Demousr@123"
    })
    
    if(response.status === 200){
      this.setState({authenticate: true, user: response.data.user.username, jwt: response.data.jwt});
      this.handleGetCall(response);
    }else{
      alert("Authentication failed");
    }
  }

  handleGetCall = async (response) => {
    if(response.status === 200 && response.data.jwt != null) {
      const getResponse = await Service.get('cubyts-best-practices', {
        headers: {
          Authorization: 'Bearer ' + response.data.jwt
        }
      })
        this.setState({cards: getResponse.data});
    }
}

  handleAddCall = (e) => {
    this.setState({publish: e});
  }

  prophandleSubmit = async (fields) => {

    let Title = fields.title;
    let Overview = fields.overview;
    let response = await Service.post('cubyts-best-practices', {
      headers: {
        Authorization: 'Bearer ' + this.state.jwt
      },
      data: { 
        Title, 
        Overview
      }
    });
    if(response){
        alert("Data added successfully");
    }

  }

  render(){
  return (
    <div>
      
      {
        this.state.publish === 'publish' ? 
         
        <Publish
           propUser={this.state.user}
           prophandleSubmit={(e) => {this.prophandleSubmit(e)}}
        />

        :

        <View 
          propUser={this.state.user}
          propHandleAdd={(e) => this.handleAddCall(e)}
          propAuthenticate={this.state.authenticate}
          propHandleCards={this.state.cards}
        />

      }
    </div>
  );
}
}

export default App;
