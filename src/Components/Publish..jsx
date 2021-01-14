import React from 'react';
import DraftHeader from './DraftHeader';
import DraftPublish from './DraftPublish';

const Publish = (props) => {
    
    return (
    
    <div>
        <DraftHeader
          propUser={props.propUser}
        />

        <DraftPublish
            prophandleSubmit={(e) => {props.prophandleSubmit(e)}}
        />
        
    </div>
    
  );

}

export default Publish;
