//Order styles

export const orderInfoBoxStyle = {
    width:{xs:'18.5rem',sm:'32.5rem',md:'35rem',lg:'40rem'},
    borderRadius:'10px',
    backgroundColor:'white',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:{xs:'center',sm:'flex-start'},
    padding:{xs:'.35rem', sm:'1.25rem', md:'1.25rem 1.75rem'},
    margin:'auto',
    rowGap:'1rem'
}

export const calculationBoxStyle = {
    marginTop:{xs:'1rem',sm:0},
    border:'1px solid #e4e9eb',
    padding:{xs:'1.25rem .25rem',md:'.5rem'},
    paddingRight:'0',
    display:'grid',
    rowGap:'1rem',
    width:'15rem'
}

export const calculationBoxItemStyle = {
    display:'flex',
    justifyContent:'space-between'
}

export const customerInfoBoxStyle = {
    border:'1px solid #e4e9eb',
    padding:{xs:'1.25rem .25rem',md:'.5rem'},
    paddingRight:'0',
    display:'grid',
    rowGap:'1rem',
    width:'15rem'
}

export const radioBoxStyle = {
    width:'6rem',
    marginTop:'1rem', 
    display:'flex', 
    rowGap:'1.25rem',
    flexDirection:'column',
    fontFamily: "'PT Sans', sans-serif",
    fontSize:'1.1rem',
    alignItems:'center',
    justifyContent:'center'
}

export const buttonBoxStyle = {
    width:{xs:'16.3rem',sm:'30rem',md:'31.5rem',lg:'36.5rem'},
    margin:'.5rem 0',
    display:'grid',
    placeItems:'center'
}

// OrderCard component styles
export const orderCardStyle = {
    display:'flex',
    width:{xs:'16.5rem',sm:'30rem',md:'32.5em',lg:'37.5rem'},
    height:{xs:'6.5rem',sm:'6rem',md:'7.5rem'},
    backgroundColor:'white'
}

export const orderCardMediaStyle = {
    padding:'.5rem',
    width:{xs:'5.5rem',sm:'5rem',md:'6.5rem'}
}

export const orderCardContentStyle = {
    display:'flex',
    width:{xs:'11rem',sm:'25em',md:'26rem',lg:'37.5rem'},
    padding:'0',
    overflow:'hidden'
}

export const orderCardContentNameBoxStyle = {
    height:{xs:'5.5rem',sm:'6rem',md:'7.5rem'},
    padding:{xs:'.5rem'},
    display:'grid',
    justifyContent:'space-between'
}

export const orderCardProductNameStyle = {
    fontSize:{xs:'.9rem',sm:'1.25rem'},
    fontWeight:'400'
}

export const orderCardProductPriceStyle = {
    width:{xs:'3.5rem',sm:'5rem'},
    fontSize:{xs:'.75rem',sm:'1.1rem'},
    fontWeight:'500',
    textAlign:'center',
    padding:'1rem 0'
}
