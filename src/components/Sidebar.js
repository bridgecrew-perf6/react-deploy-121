import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { ImSearch } from "react-icons/im";
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import {InputGroup , Input, Button }from 'reactstrap';
const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
   
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
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
`;

const Searchbar = styled.div`
width :33% ;
position : absolute;
top: 20px;
right :30px;

`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
 
  return (
    <>
      <IconContext.Provider  value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaArtstation onClick={showSidebar} />

            <Searchbar > 
            <InputGroup>
            <Button >
           <ImSearch /> Search
            </Button>
            <Input  placeholder ='Search your product.........'/>
            </InputGroup>
            </Searchbar>
            
          </NavIcon>
        </Nav>
        


        <SidebarNav sidebar={sidebar}>
          <SidebarWrap onClick={showSidebar} >
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>

            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;

            })}
            
          </SidebarWrap>
        </SidebarNav>



        
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
