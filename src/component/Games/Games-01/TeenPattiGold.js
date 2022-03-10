
import React from 'react';
import "./teenPattiGold.css"

const TeenPattiGold = () => {
    return (
        
        <div >
                    <div className="BoardMainContent"> 
                            <span>start time</span>
                        <div className="button">
                            <div className="BoardContent">
                                {/* ==================== */}
                               <div className="boardTop">
                                    <div className='player' >
                                            <span >P=1</span>
                                        </div>   
                                        {/* ==================== */}
                                        <div className='player' >
                                            <span >P=2</span>
                                        </div> 
                                   </div>    
                                {/* ==================== */}
                                <h4>Total</h4>
                                <div className="">                                  
                                    <h1>Start your Games !!!!!!!!!!</h1>
                                </div>
                                
                                {/* ==================== */}
                                <div className="boardDown">
                                    <div className='player' >
                                    <span >P=3</span>
                                    </div> 
                                    {/* ==================== */}
                                    <div className='player' >
                                        <span >P=4</span>
                                    </div> 
                                    {/* ==================== */}
                                    <div className='player' >
                                        <span >P=5</span>
                                    </div> 
                                    {/* ==================== */} 
                                </div>
                            </div> 
                            <div className="">
                                {/* Show card box */}
                                <span>Show Card Section !!!!!!!</span>
                            </div>
                            <br/>
                            <button>Button=1</button> | <button>Button=2</button> | <span>Balance</span> | <button>Button=3</button> | <button> - </button> |<span>150</span>| <button> + </button>
                            
                        </div> 
      
                    </div>
        </div>
    );
};

export default TeenPattiGold;
