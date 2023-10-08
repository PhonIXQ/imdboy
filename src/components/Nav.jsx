import { Link } from "react-router-dom";
import styled from "styled-components";

import SearchBar from "./SearchBar";

const StyledNav = styled.nav`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   gap: 10px;
   padding: 10px 14px;
   background-color: #0d0d0d;

   a {
      &:focus,
      :hover {
         opacity: 0.8;
      }
   }
`;

const StyledIcon = styled.h1`
   font-size: 20px;
   font-weight: 900;
   color: #000;
   background-color: #f5c518;
   padding: 4px 6px;
   border-radius: 4px;
`;

const Nav = () => {
   return (
      <StyledNav>
         <Link to="/">
            <StyledIcon>IMDboy</StyledIcon>
         </Link>
         <SearchBar />
      </StyledNav>
   );
}

export default Nav;