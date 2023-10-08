import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { fetchData } from "../utils/fetchData";

import styled from "styled-components";

const StyledSearchFeed = styled.section`
  
`;

const StyledItem = styled.ul`
   list-style: none;
   border-bottom: 1px solid #333;

   &:focus,
   :hover {
      background-color: #0d0d0d;
   }

   li {
      padding: 4px 14px;
   }

   a {
      display: flex;
      flex-direction: row;
      align-items: center;
   }
`;

const StyledImg = styled.img`
   width: 48px;
`;

const StyledResult = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 14px;
   gap: 4px;

   h2 {
      font-size: 16px;
      font-weight: 500;
      color: #fff;
   }

   h3,
   h4 {
      font-size: 14px;
      font-weight: 400;
      color: #fff;
      opacity: 0.8;
   }
`;

const SearchFeed = () => {
   const [series, setSeries] = useState([]);

   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const xqTerm = queryParams.get('q');

   // useEffect(() => {
   //    fetchData(`title/find?q=${searchTerm}`)
   //       .then((data) => setSeries(data.results));
   // }, [searchTerm]);

   useEffect(() => {
      fetchData(`${xqTerm}`)
         .then((data) => setSeries(data));
   }, [xqTerm]);

   return (
      <StyledSearchFeed>
         {series.map((serie, idx) => (
            <StyledItem key={idx}>
               <li>
                  <Link to='#'>
                     <StyledImg src="https://m.media-amazon.com/images/M/MV5BNzdlMGY1NDMtNzNjNi00YjE5LTlhZmUtNGNiNWQ1NTMxMTdmXkEyXkFqcGdeQXVyMjI2ODE1NTA@._V1_QL75_UY562_CR21,0,380,562_.jpg" alt="Till" />
                     <StyledResult>
                        <h2>Till the End of the Moon</h2>
                        <h3>2023</h3>
                        <h4>{serie.id} is ID</h4>
                     </StyledResult>
                  </Link>
               </li>
            </StyledItem>
         ))}

      </StyledSearchFeed>
   );
}

export default SearchFeed;