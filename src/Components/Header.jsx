import React from 'react';
import { SearchIcon } from '@primer/octicons-react'


const Header = (props) => {

  const handlePublish = (e) => {
    props.propHandleAdd(e);
  }
  return (
    
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
            <p className="navbar-brand">{props.propUser}</p>
            <p className="navbar-brand">29 followers</p>
            <p className="navbar-brand">About</p>
        </div>

        
        <p className="navbar-brand">
            <button type="button" className="btn btn-success" onClick={()=> handlePublish('publish')}>Publish</button>
        </p>
        <p className="navbar-brand">
            <SearchIcon size={24} />
        </p>
        <p className="navbar-brand">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" style={{width: "30px", height: "30px", floot: "right"}} alt="Avatar" className="md-avatar rounded-circle"/>
        </p>
        <p className="navbar-brand">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Y8QSFYw2fTmn2wI9jPcX504ArAX9_W518g&usqp=CAU" width="30" height="30" className="d-inline-block align-top" alt=""/>
        </p>
    </nav>
  );
}

export default Header;
