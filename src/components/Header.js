import MenuItems from "./MenuItems"
import HeaderSearch from "./HeaderSearch"
import images from "../assets"



const Header = ()=>{

    let headerStyle={
        margin: '0px 50px',
        padding: '20px 20px',
        backgroundColor: 'black',
        borderBottom: '2px solid #ffffff2a',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }

    let h1Style={
        margin: 0,
        color: 'white',
        fontSize: 30,
        fontWieght: 'bold'
    }
    
    let divStyle={
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }

    return(
        <header style={headerStyle}>
            <h1 style={h1Style}>My Social</h1>
            <div style={divStyle}>
                <div style={{margin:'auto'}}>
                    <MenuItems image={images.home}/>
                    <MenuItems image={images.video}/>
                    <MenuItems image={images.group}/>
                    <MenuItems image={images.faq}/>
                    <MenuItems image={images.games}/>
                </div>
                <HeaderSearch/>
            </div>
        </header>
    )
}

export default Header