import React from 'react'
import { Link } from 'react-router-dom'

function User(){
    return<>
    
        <div>
            <h1>This is User page</h1>
            <Link to="/" state={"From user page"}>กลับไปหน้าแรก</Link>
        </div>
    </>
        
}

export default User