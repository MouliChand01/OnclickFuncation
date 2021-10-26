import React, { useState } from 'react'

function OnchangeComp() {
    var[val,setVal]=useState("");
    return (
        <div>
            <h1>onChange event example</h1>
            <input type="text" placeholder="enter any str" value={val} onChange={(e)=>setVal(e.target.value)}>
                </input>
                <h2>your string is :{val}</h2>
        </div>
    )
}

export default OnchangeComp
