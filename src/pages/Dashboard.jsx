import React from 'react'


function Dashboard({logout}){
    return<>
    
        <div>
            <h1>Dashboard</h1>
            <p>welcome User</p>
            <button onClick={logout}>logout</button>
            
        </div>
    </>
        
}

export default Dashboard