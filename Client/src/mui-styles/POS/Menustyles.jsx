
// Home styles

export const productsBoxStyle = {
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    width:{xs:'17rem',sm:'32.5rem',md:'40rem',lg:'60rem'},
    borderRadius:'10px',marginBottom:'2.5rem'
}

// MenuCard component styles

export const menuCardStyle = { 
    maxWidth: 345,
    height:{xs:480,md:475, lg:425}
}

export const menuCardContentStyle = {
    height:{xs:250,md:250, lg:200},
    display:'grid',
    rowGap:'.75rem'
}

//Tabs component styles
export const tabsWrapperStyle = {
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    width:{xs:'17rem',sm:'32.5rem',md:'40rem',lg:'60rem'},
    height:{xs:'7rem',sm:'9.5rem',md:'11rem'},
    borderRadius:'10px'
}

export const tabStyle = {
    display:'grid',
    placeItems:'center',
    justifyContent:'space-around',
    width:{xs:'4rem', sm:'7rem', md:'9rem', lg:'14rem'},
    height:{xs:'5rem', sm:'7rem',md:'7.5rem'},
    textAlign:'center',fontWeight:'600',fontFamily:"'Roboto', sans-serif",
    fontSize:{xs:'.75rem',md:'.9rem'},
    '&:hover':{border:'2px solid #007ea7',transition: 'ease-in 100ms'}
}

export const tabImgStyle = {
    width:{xs:'3rem',sm:'5rem',md:'6rem'}
}