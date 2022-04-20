import StyledRow from "./styled/StyledRow"
import StyledText from "./styled/StyledText"
import StyledColumn from './styled/StyledColumn'

const events = [
    {
        name:'Concert At Theatre',
        location: 'Los Angeles, Ca',
        image:'https://source.unsplash.com/random/200x200/?concert'
    },
    {
        name:'Street Cleanup',
        location:'Federal Blvd',
        image:'https://source.unsplash.com/random/200x200/?street'
    },
    {
        name:'Jeffs Going away Party',
        location:'Jeffs house',
        image:'https://source.unsplash.com/random/200x200/?house'
    },
    {
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
        <StyledRow style={eventsRowStyle}>
            <img style={eventsImgStyle} src={event.image} alt="" />
            <StyledColumn style={eventInfoStyle}>
                <StyledText>{event.name}</StyledText>
                <small style={{
                    fontWeight: 'normal',
                    color: '#ffffff6a'
                }}
                >{event.location}</small>
            </StyledColumn>
        </StyledRow>
        )
    })

export default Events