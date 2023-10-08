import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import { Feed, SearchFeed } from "./sections";

import styled from 'styled-components'

const StyledContentMain = styled.main`
   max-width: 800px;
   margin: 0 auto;
`;

function App() {
   return (
      <Router>
         <StyledContentMain>
            <Nav />
            <Routes>
               <Route path="/" exact element={<Feed />} />
               <Route path="/search" element={<SearchFeed />} />
            </Routes>
         </StyledContentMain>
      </Router>
   );
}

export default App;