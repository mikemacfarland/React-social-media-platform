const MenuItem = ({image})=>{
    
    let imgStyle={
        margin: '0px 30px',
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        // padding: 30
    }

    return(
        <img style={imgStyle} src={image} alt="menuImg" />
    )
}

export default MenuItem

