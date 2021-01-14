import React from 'react';
import Header from './Header';
import Content from './Content';

const View = (props) => {
    
    const {propUser, propHandleAdd, propAuthenticate, propHandleCards} = props;
  return (
    
    <div>
        <Header
          propUser={propUser}
          propHandleAdd={(e) => propHandleAdd(e)}
        />

        
        {propAuthenticate && 
                <div className="container">
                    <Content propHandleCards={propHandleCards} />
                </div>
        }
    </div>
    
  );

}

export default View;
