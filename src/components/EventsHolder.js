import StyledRow from "./styled/StyledRow"
import StyledColumn from "./styled/StyledColumn"
import StyledText from "./styled/StyledText"
import StyledMenuBtn from "./styled/StyledMenuBtn"
import FeaturedEvent from './FeaturedEvent'
import Events from "./Events"

const EventsHolder = ()=>{
    const eventsHolderStyle={
        backgroundColor:'#1a1c20',
        padding: '10px 20px',
        borderRadius: '15px',
        fontSize: '18px',
    }
    
    return(
        <div style={eventsHolderStyle}>
            {/* Events Header */}
            <StyledRow>
                <StyledText>Events</StyledText>
                <StyledMenuBtn/>
            </StyledRow>
            <FeaturedEvent/>
            {/* Recent Events Header */}
            <StyledRow style={{
            justifyContent:'space-between',
            margin: '20px auto 0 auto'
            }}>
            <StyledText>Recent Events</StyledText>
            <StyledText style={{color: 'rgb(24, 120, 240)'}}>All</StyledText>
        </StyledRow>
        <StyledColumn>
            <Events/>
        </StyledColumn>
            
        </div>
    )
}

export default EventsHolder