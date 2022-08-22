import { SideBar } from './components/SideBar';
import styled from "styled-components";
import { Churn, Report } from "./pages";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useResponsive } from "./hooks/useResponsive";
import { SiteDataApi } from "./apis/SiteDataApi";

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #F2F2F2;
  overflow: auto;
`

const Contents = styled.div`
  width: 100%;
  padding-left: ${(props) => (props.isHideSideBar ? '0px' : '260px')};
`

function App() {
    const isHideSideBar = useResponsive();
    // SiteDataApi();

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Body>
                <SideBar/>
                <Contents isHideSideBar={isHideSideBar}>
                    <Routes>
                        <Route path="/" element={<Churn/>}/>
                        <Route path="/report" element={<Report/>}/>
                    </Routes>
                </Contents>
            </Body>
        </BrowserRouter>
    );
}

export default App;
