//shared
export const mainBoxStyle = {
    marginTop:'2.5rem',
    display:'grid',
    placeItems:'center',
    justifyContent:'space-around',
    width:'100vw',
}

export const headerBoxStyle = {
    width:{xs:'18.5rem',sm:'32.5rem',md:'35rem',lg:'40rem'},
    height:{xs:'5rem',sm:'6rem',md:'7.5rem'},
    borderRadius:'10px',
    backgroundColor:'#007ea7',
    display:'grid',
    justifyContent:'center',
    placeItems:'center',
    color:'white'
}

export const itemsBoxStyle = {
    width:{xs:'18.5rem',sm:'32.5rem',md:'35rem',lg:'40rem'},
    borderRadius:'10px',
    backgroundColor:'white',
    display:'grid',
    justifyContent:'center',
    placeItems:'center',
    padding:{xs:'1.2rem 0', sm:'1.25rem 0', md:'1.25rem 0'},
    margin:'auto',
    rowGap:'1rem',
}

//Sidebar styles
export const sidebarBoxStyle = {
    width:{xs:'15vw',sm:'10vw',md:'17.5vw',lg:'15vw'},
    height:'100vh',
    backgroundColor:'#182747',
    position:'fixed',
    borderTopRightRadius:'7.5px',
    borderBottomRightRadius:'7.5px'
}

export const titleLogoStyle = {
    display:'flex',
    alignItems:'center',
    justifyContent:'space-evenly',
    padding:'1rem 0'
}

export const logoStyle = {
    width:{xs:'2.5rem',sm:'2.9rem',lg:'3.25rem'},
    cursor:'pointer'
}

export const titleStyle = {
    fontFamily: "'Merriweather Sans', sans-serif",
    color:'white',
    fontSize:{md:'1rem',lg:'1.35rem'},
    cursor:'pointer',
    width:'max-content'
}

export const itemNameStyle = {
    fontFamily:"'Roboto', sans-serif",
    color:'white',
    fontSize:{md:'.9rem',lg:'1.25rem'},
    cursor:'pointer',
    width:'max-content'
}

export const sidebarItemStyle = {
    width:{xs:'15vw',sm:'10vw',md:'17.5vw',lg:'15vw'},
    '&:hover':{backgroundColor: '#007ea7',transition: 'ease-in-out 350ms'},
    display:'flex',
    alignItems:'center',
    justifyContent:{xs:'center',md:'flex-start'},
    padding:{xs:'1.25rem 0',md:'1.5rem 1.25rem'},
    columnGap:{md:'1rem'},
    textDecoration:'none'
}

export const ItemLogoStyle = {
    display:{xs:'flex', md:'none'},
    width:{xs:'2rem',sm:'2.25rem', md:'2.75rem'}
}