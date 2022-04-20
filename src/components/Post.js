import StyledRow from './styled/StyledRow';
import StyledColumn from './styled/StyledColumn';
import CircleImage from './CircleImage';
import StyledText from './styled/StyledText';
import StyledMenuBtn from './styled/StyledMenuBtn';
import images from '../assets';
import StyledSmall from './styled/StyledSmall';
import Spacer from './Spacer';

export const Post = ({body,userId}) => {
    return (
        <StyledColumn key={userId}>
            <StyledRow>
                <CircleImage image={images.demoUser} />
                <StyledColumn>
                    <StyledText style={{ margin: '0', fontWeight: 'bold' }}>name</StyledText>
                    <StyledSmall>location, time</StyledSmall>
                </StyledColumn>
                <StyledMenuBtn />
            </StyledRow>
            <Spacer height={10} />
            <StyledText>{body}</StyledText>
            <Spacer height={10} />
            <img src="" alt="" />
        </StyledColumn>
    );
};

export default Post