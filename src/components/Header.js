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
        justifyContent: 'space-between'
    }

    let h1Style={
        margin: 0,
        color: 'white',
        fontSize: 30,
        fontWieght: 'bold'
    }
    
    let divStyle={
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }

    return(
        <header style={headerStyle}>
            <h1 style={h1Style}>My Social</h1>
            <div style={divStyle}>
                <div>
                    <MenuItems image={images.home}/>
                    <MenuItems image={images.video}/>
                    <MenuItems image={images.group}/>
                    {/* add 2 more menu items, use wire emblems instead of solid */}
                </div>
                <HeaderSearch/>
            </div>
        </header>
    )
}

export default Header