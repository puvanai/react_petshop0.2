import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home({login}){

    let navigate = useNavigate()

    return<>

    
    
        <div>
            <h1>This is Home page</h1>
            <button onClick={()=>{
                login();
                navigate('/dashboard')}}>
                login</button>
            {/*location.state*/}
        </div>
    </>
        
}

export default Home