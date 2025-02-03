import React from 'react'

export default function Button() {
      const Handler =(name)=>{
        alert(`You clicked me ${name}`);
      }
    return (
    <div>
      <button onClick={()=>{Handler('Gedeon')}}>ClickMe</button>
    </div>
  );
}
