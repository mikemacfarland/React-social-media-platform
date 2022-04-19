import StyledRow from "./styled/StyledRow"
import CircleImage from "./CircleImage"
import images from '../assets'
import StyledText from "./styled/StyledText"

const MessangerUser = ({online = false})=>{
    const onlineDiv={
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: online ? 'green': '#ffffff2a',
        margin: 'auto 10px auto auto'
    }

    return(
        <StyledRow>
            <CircleImage image={images.demoUser}/>
            <StyledText style={{fontWeight:'bold'}}> Username</StyledText>
            <div style={onlineDiv}></div>
        </StyledRow>
    )
}

export default MessangerUser