import HomeUser from "../../components/HomeUser"
import MessangerHolder from "../../components/MessangerHolder"
import Spacer from "../../components/Spacer"
import EventsHolder from "../../components/EventsHolder"
import {Routes,Route} from 'react-router-dom'

// SCREENS
import FaqScreen from "./FaqScreen"
import GameScreen from "./GamesScreen"
import GroupChatScreen from "./GroupChatScreen"
import PostsScreen from "./PostsScreen"
import VideosScreen from "./VideosScreen"


const PageHolder = ()=>{
    let pageHolderStyle={
        // backgroundColor: 'white',
        display: 'flex',
        padding: 10,
        alignItems:'flex-start'
    }

    return(
        <div style={pageHolderStyle}>
            {/* USER INFORMATION */}
            <div style={{width: '20%'}}>
                <HomeUser/>
                <Spacer height={20}/>
                <MessangerHolder/>
            </div>
            {/* ROUTING PAGE */}
            <div style={{flex:1}}>
                <Routes>
                    <Route path='/' element={<PostsScreen/>}/>
                    <Route path='/faq' element={<FaqScreen/>}/>
                    <Route path='/game' element={<GameScreen/>}/>
                    <Route path='/videos' element={<VideosScreen/>}/>
                </Routes>
            </div>
            {/* EVENTS */}
            <div style={{width: '20%',marginRight:'40px'}}>
                <EventsHolder/>
            </div>
        </div>
    )
}

export default PageHolder