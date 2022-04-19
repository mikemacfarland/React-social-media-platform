import images from '../assets'
import StyledGrayCard from './styled/StyledGreyCard'
import CircleImage from './CircleImage'

const HomeUser = ()=>{
    
    let homeUserStyle ={
        display: 'flex',
        flexDirection: 'row',
    }
    
    let homeUserPStyle ={
        margin: 'auto 1rem',
        fontSize: 18
    }

    return(
        <StyledGrayCard style={homeUserStyle}>
            <CircleImage image={images.demoUser} alt="" />
            <p style={homeUserPStyle}>Username</p>
        </StyledGrayCard>
    )
}

export default HomeUser