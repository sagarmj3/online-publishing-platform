import React from 'react';

const Content = (props) => {
    
    
  return (
    
    <div className="card text-center w-75" style={{margin: "0 auto", float: "none", marginBottom: "10px"}}>
        <div className="card-body">
        
        {props.propHandleCards.map(card => {
                console.log(card.HeaderImage);
                return (
                    <div>
                        <h1>{card.Title}</h1>
                    
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" className="card-img-top" alt="..."/>
                        <p className="card-text">{card.Overview}</p>
                    </div>
                );
            })
        }
        
        </div>
    </div>
    
  );

}

export default Content;
