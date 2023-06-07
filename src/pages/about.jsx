import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function About(){

    let navigate = useNavigate()
    return<>
    
        <div>
            <h1>This is About page</h1>
            
            <button onClick={()=> navigate("/",{state:"From the About page"})}>Redirect</button>
        </div>
    </>
        
}

export default About