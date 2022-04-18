import {BrowserRouter,Routes,Route} from 'react-router-dom'

const SinglePageApplication =()=>{
    let appStyle ={
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        minWidth: '100vw'
    }
    
    return(
        <BrowserRouter>
            
        
        <div style={appStyle}>

        </div>
        </BrowserRouter>
    )
}

export default SinglePageApplication