import StyledRow from "./styled/StyledRow"
import StyledText from "./styled/StyledText"
import StyledMenuBtn from "./styled/StyledMenuBtn"
import FeaturedEvent from './FeaturedEvent'


const EventsHolder = ()=>{
    const eventsHolderStyle={
        backgroundColor:'#1a1c20',
        padding: '10px 20px',
        borderRadius: '15px',
        fontSize: '18px',
        fontWeight: 'bold'
    }
    const eventsHolderImgStyle={
        height: 20,
        width: 30,
    }
    
    return(
        <div style={eventsHolderStyle}>
            <StyledRow>
                <StyledText>Events</StyledText>
                <StyledMenuBtn/>
            </StyledRow>
            <FeaturedEvent/>
            

        </div>
    )
}

export default EventsHolder