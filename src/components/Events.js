import StyledRow from "./styled/StyledRow"
import StyledText from "./styled/StyledText"
import StyledColumn from './styled/StyledColumn'
import StyledSmall from "./styled/StyledSmall"

const events = [
    {
        eventId: '32s8',
        name:'Concert At Theatre',
        location: 'Los Angeles, Ca',
        image:'https://source.unsplash.com/random/200x200/?concert'
    },
    {
        eventId: '9s8$',
        name:'Street Cleanup',
        location:'Federal Blvd',
        image:'https://source.unsplash.com/random/200x200/?street'
    },
    {
        eventId: '9*3d',
        name:'Jeffs Going away Party',
        location:'Jeffs house',
        image:'https://source.unsplash.com/random/200x200/?house'
    },
    {
        eventId: 'n32#',
        name:'MTB Race',
        location:'Pine Trail, Co',
        image:'https://source.unsplash.com/random/200x200/?bike'
    }
]


const Events = ()=> events.map((event) =>{
    const eventsImgStyle={
        width: 110,
        height: 110,
        borderRadius: 10,
    }
    const eventsRowStyle={
        marginBottom:'1.5rem'
    }
    const eventInfoStyle={
        margin: 'auto 1rem'
    }

    return(
        <StyledRow key={event.eventId} style={eventsRowStyle}>
            <img style={eventsImgStyle} src={event.image} alt="" />
            <StyledColumn style={eventInfoStyle}>
                <StyledText>{event.name}</StyledText>
                <StyledSmall >{event.location}</StyledSmall>
            </StyledColumn>
        </StyledRow>
        )
    })

export default Events