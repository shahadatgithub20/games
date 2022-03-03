import React, { useEffect, useRef, useState } from 'react';
import "./card.css"
import Cards from './Cards';



const Card =()=>{
     const [card,setCard]=useState([]);
     const nameRef=useRef();
    const URLRef=useRef();
    
     const formSubmit=e=>{
          e.preventDefault();
          const name=nameRef.current.value;
          const url=URLRef.current.value; 
          console.log(url)
          const cards={name, url};
          fetch('http://localhost:5000/card',{
              method:'POST',
              headers:{
                 'content-type': 'application/json' 
              },
              body:JSON.stringify(cards)
  
          })
          .then()

  
     };
     useEffect(()=>{
          fetch('http://localhost:5000/card')
          .then(res=>res.json())
          .then(data=>setCard(data))
      },[])

    return (
        
     
        <div>
             <div>
               <form onSubmit={formSubmit}>
                    <input type="text" ref={nameRef}  placeholder="Your Name" />
                    <br/>
                    <input type="url" ref={URLRef} placeholder="Your Image URL"  />
                    <br/>
                    <input type="submit" value="Added Items" />

                </form>
             </div>
             <div >
                    <h3>Total Card: {card.length}</h3>
                  {
                    card.map(cards =><Cards
                         key={cards._Id}
                         card={cards}
                         >
                    </Cards>)
                    }

             </div>
           
        </div>
    );
};

export default Card;
    

