
import React, { useState } from 'react'

export default function SecondPhone() {
    // const validPhone = /^\d{10}$/;
    const validPhone = /^\d*$/;
    const [phone, setPhone] = useState('');
    const [focused, setFocused] = useState(false);
    
    const handleChange =(event)=>{
        const inPut = event.target.value;
        if(inPut.length <= 10 && validPhone.test(inPut)){
            setPhone(inPut)
        }
    }
  return (
    <div style={{ textAlign: "center", marginTop: "40px", marginBottom:'1cm' }}>
            <h2>Enter Your Phone Number:</h2>
            <input
                type="text"
                value={phone}
                onChange={handleChange}
                onFocus={()=>setFocused(true)}
                onBlur={()=> setFocused(false)}
                placeholder="Numbers only"
                style={{ padding: "8px", fontSize: "16px",backgroundColor: focused? 'blue': phone.length > 0 ? 'green' : 'white' }}
            />
        </div>
  )
}
