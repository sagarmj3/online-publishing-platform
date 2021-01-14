import React from 'react';

const Content = (props) => {
    
    
  return (
    
    <div className="card text-center w-75" style={{margin: "0 auto", float: "none", marginBottom: "10px"}}>
        <div className="card-body">
        
        <div id="accordion">
            <div className="card">

        {props.propHandleCards.map(card => {
                return (
                    <div key={card.id}>
                            <div className="card-header" id={card.id}>
                                <button className="btn" data-toggle="collapse" data-target={'#' + card.id} aria-expanded="true" aria-controls="collapseOne">
                                <h1 > {card.Title}</h1>
                                </button>
                            </div>
                            
                            <div id={card.id} className="collapse show" aria-labelledby={card.id} data-parent="#accordion">
                                <div className="card-body">
                                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" className="card-img-top" alt="..."/>
                                    <p className="card-text">{card.Overview}</p>    
                                </div>
                            </div>
                        
                    </div>
                );
            })
        }
        </div>
                        </div>
        
        </div>
    </div>
    
  );

}

export default Content;
