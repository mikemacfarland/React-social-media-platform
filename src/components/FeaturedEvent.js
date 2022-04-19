import StyledText from "./styled/StyledText"
import StyledColumn from "./styled/StyledColumn"


const FeaturedEvent = ()=>{
    return(
    <StyledColumn style={{
        height: 200,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundImage: 'url(https://source.unsplash.com/random/200x200/?party)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
        }}>
        <StyledText style={{
            backgroundColor: 'rgba(0,0,0,.5)',
            padding: '2px 6px',
            borderRadius: '5px',
            fontSize:16,
            fontWeight: 700
            }}>Community Outreach</StyledText>
        <StyledText style={{
            fontSize: 12,
            textAlign:'center',
            backgroundColor: 'rgba(0,0,0,.5)',
            padding: '2px 6px',
            borderRadius: '5px',
            // margin:'auto auto 10px auto'
            }}>Cool opportunity for community involvment</StyledText> 
    </StyledColumn>
    )
}

export default FeaturedEvent