import React from 'react';

const DraftHeader = (props) => {
    
    return (
    
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
            <p className="navbar-brand">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Y8QSFYw2fTmn2wI9jPcX504ArAX9_W518g&usqp=CAU" width="30" height="30" className="d-inline-block align-top" alt=""/>
            </p>
        <div className="collapse navbar-collapse" id="navbarNav">
            <p className="navbar-brand">draft in {props.propUser}</p>
            
        </div>
        
        <p className="navbar-brand">
            <button type="button" className="btn btn-success disabled" >Publish</button>
        </p>
        
        <p className="navbar-brand">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" style={{width: "30px", height: "30px", floot: "right"}} alt="Avatar" className="md-avatar rounded-circle"/>
        </p>
        
    </nav>
  );

}

export default DraftHeader;
