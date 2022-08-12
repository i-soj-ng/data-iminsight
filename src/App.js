import { SideBar } from './components/SideBar';
import styled from "styled-components";
import { Churn, Report } from "./pages";
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #F2F2F2;
  overflow: auto;
`

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Body>
              <SideBar/>
              <Routes>
                  <Route path="/" element={<Churn/>}/>
                  <Route path="/report" element={<Report/>}/>
              </Routes>
          </Body>
      </BrowserRouter>
  );
}

export default App;
