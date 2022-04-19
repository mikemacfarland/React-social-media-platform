
import StyledGrayCard from "./styled/StyledGreyCard"
import StyledRow from "./styled/StyledRow"
import StyledColumn from "./styled/StyledColumn"
import StyledText from './styled/StyledText'
import CircleImage from "./CircleImage"
// import images from "../assets"
import MessangerUser from "./MessangerUser"

const MessangerHolder = ()=>{
    return(
        <StyledGrayCard>
            <StyledRow style={{justifyContent:'space-between'}}>
                <StyledText>Messanger</StyledText>
                <StyledText style={{color: 'rgb(24, 120, 240)'}}>All</StyledText>
            </StyledRow>
            <StyledColumn>
                <MessangerUser/>
                <MessangerUser online/>
                <MessangerUser online/>
                <MessangerUser/>
            </StyledColumn>
        </StyledGrayCard>
    )
}

export default MessangerHolder