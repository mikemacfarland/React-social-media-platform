import {Link} from 'react-router-dom'

const MenuItem = ({link ='/',image})=>{
    
    let imgStyle={
        margin: '0px 30px',
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        // padding: 30
    }

    return(
        <Link to={link}>
        <img style={imgStyle} src={image} alt="menuImg" />
        </Link>
    )
}

export default MenuItem

