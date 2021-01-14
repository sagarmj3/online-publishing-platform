import React from 'react';
import Content from './Components/Content';
import Header from './Components/Header';
import Service from "./service";

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      authenticate: false,
      cards: []
    }

    this.handleLoginCall();
  }

  handleLoginCall = async () => {
    const response = await Service.post('auth/local', {
      identifier: "demouser@gmail.com",
      password: "Demousr@123"
    })
    
    if(response.status === 200){
      this.setState({authenticate: true});
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

  render(){
  return (
    <div>
      <Header/>
      {
      this.state.authenticate && <div className="container">
        <Content 
          propHandleCards={this.state.cards}
        />
      </div>
      } 

    </div>
  );
}
}

export default App;
