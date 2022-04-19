import HomeUser from "../../components/HomeUser"
import MessangerHolder from "../../components/MessangerHolder"
import Spacer from "../../components/Spacer"
import EventsHolder from "../../components/EventsHolder"

const PageHolder = ()=>{
    let pageHolderStyle={
        // backgroundColor: 'white',
        display: 'flex',
        padding: 10,
        alignItems:'center'
    }

    return(
        <div style={pageHolderStyle}>
            {/* user information */}
            <div style={{width: '20%'}}>
                <HomeUser/>
                <Spacer height={20}/>
                <MessangerHolder/>
            </div>
            {/* routing page */}
            <div style={{flex:1}}></div>
            {/* events */}
            <div style={{width: '20%',marginRight:'40px'}}>
                <EventsHolder/>
            </div>
            
        </div>
    )
}

export default PageHolder