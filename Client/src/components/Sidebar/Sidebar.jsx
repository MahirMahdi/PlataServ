import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { CardMedia,Typography, Box } from '@mui/material';
import plataserv from '../../assets/plataserv.png'
import { logoStyle } from '../../mui-styles/SharedStyles';
import useAuth from '../../hooks/useAuth';

const Nav = styled.div`
  background: #15171c;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  font-size: 1.5rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  row-gap: 2rem ;
  font-family: 'Roboto', sans-serif;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [user] = useAuth();

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <Box sx={{display:'flex',justifyContent:'space-around',alignItems:'center',width:{xs:'12.5rem', md:'17.5rem'},fontFamily: "'Roboto', sans-serif"}}>
            <NavIcon to='#'>
                <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
            <CardMedia component="img" image={plataserv} sx={logoStyle}/>
            <Typography sx={{color:'white',fontSize:{xs:'1.25rem',md:'1.75rem'}}} noWrap component="div">
                PlataServ
            </Typography>
          </Box>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.filter(item => item.roles.includes(user.user.user_metadata.role)).map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
