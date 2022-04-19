const HeaderSearch = () =>{
    
    let inputStyle ={
        height: 45,
        width: 250,
        border: 'none',
        borderRadius: 25,
        backgroundColor: '#ffffff1a',
        color: 'white',
        paddingLeft: '1rem',
        outline: 'none',
    }

    let searchBtnStyle={
        color: 'white',
        marginLeft: 10,
        height: 45,
        width: 100,
        fontSize: '1rem',
        borderRadius: 25,
        backgroundColor: '#1878f0',
        border: 'none',
        outline: 'none',
        cursor: 'pointer'

    }
    
    return(
        <div style={{marginLeft:20}}>
            <input style={inputStyle}type="text" placeholder="Search"/>
            <button style={searchBtnStyle}>Search</button>
        </div>
    )
}

export default HeaderSearch