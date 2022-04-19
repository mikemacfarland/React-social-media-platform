import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from '../components/Header'
import PageHolder from './subScreens/PageHolder'
import Spacer from '../components/Spacer'

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
                <Header/>
                <Spacer height={20}/>
                <PageHolder/>
            </div>
        </BrowserRouter>
    )
}

export default SinglePageApplication