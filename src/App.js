import { SideBar } from './components/SideBar';
import styled from "styled-components";
import { Main } from "./pages";
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const Center = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #F2F2F2;
  overflow: auto;
`

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Center>
          <SideBar/>
          <Routes>
            <Route path="/" element={<Main/>}/>
          </Routes>
        </Center>
      </BrowserRouter>
  );
}

export default App;
