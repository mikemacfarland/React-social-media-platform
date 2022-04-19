const CircleImage = ({image})=>{
    const circleImageStyle ={
        height: 50,
        width: 50,
        marginRight: 20,
        borderRadius: '50%',
        border: '2px solid green',
        margin: 10,
    }
    
    return(
        <img style={circleImageStyle} src={image} alt='imagename' />
    )
}

export default CircleImage