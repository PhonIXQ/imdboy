import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const StyledForm = styled.form`
   display: flex;
   flex-direction: row;
   width: 100%;
`;

const InputSearch = styled.input`
   width: 100%;
   font-size: 16px;
   font-weight: 300;
   padding: 6px 10px;
   border-radius: 6px 0 0 6px;
   border: none;
`;

const ButtonSearch = styled.button`
   font-size: 16px;
   font-weight: 500;
   padding: 4px 8px;
   border-radius: 0 6px 6px 0;
   border: none;
   background-color: #f5c518;
   transition: 0.3s;
   opacity: 0.8;
   cursor: pointer;

   &:focus,
   :hover {
      opacity: 1;
   }
`;

const SearchBar = () => {

   const [xqTerm, setXqTerm] = useState('');

   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();

      if (xqTerm) {
         navigate(`/search?q=${xqTerm}`);
      }
   }

   return (
      <StyledForm onSubmit={handleSubmit}>
         <InputSearch
            type="search"
            value={xqTerm}
            onChange={(e) => setXqTerm(e.target.value)}
            placeholder="Search IMDboy"
         />
         <ButtonSearch type="submit">
            Search
         </ButtonSearch>
      </StyledForm>
   )
}

export default SearchBar;