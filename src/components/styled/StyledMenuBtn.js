import styled from "styled-components"

// EXAMPLE OF USING PSUEDO ELEMENTS TO CREATE A STYLED & DYNAMIC MORE 
// BUTTON AND USE IT INSIDE COMPONENT

let color = 'rgba(255, 255, 255, 0.165)'
let diameter = 10
let spacing = 15

const MenuBtn = styled.div`
    position: relative;
    width: ${diameter}px;
    height: ${diameter}px;
    border-radius: 50%;
    background-color: ${color};
    ::before{
        position: absolute;
        left: -${spacing}px;
        content: '';
        width: ${diameter}px;
        height: ${diameter}px;
        border-radius: 50%;
        background-color: ${color};
    }
    ::after{
        position: absolute;
        left: ${spacing}px;
        content: '';
        width: ${diameter}px;
        height: ${diameter}px;
        border-radius: 50%;
        background-color: ${color};
    }
`

const StyledMenuBtn = ()=>{
    const menuBtnStyle={
        margin: 'auto 10px auto auto',
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
        width: 'fit-content',
        padding: '10px 15px',
        backgroundColor: 'transparent',

    }

    return(
        <button style={menuBtnStyle}>
            <MenuBtn/>
        </button>
    )
}

export default StyledMenuBtn