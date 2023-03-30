import React from "react";
import Custom from "../custom";
const AmIabove18 = true
const myage = 9

function Header(){
    return (<header>
        <h1 className="head">This is a header</h1>
        <div>
        {AmIabove18 ? <p>I am above 18</p>:null}
    </div>
        {myage>10 && <p>I am more than 10</p>}
        <Custom/>
    </header>
    
    
    )

}

export default Header