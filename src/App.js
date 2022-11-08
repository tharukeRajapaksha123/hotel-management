
import './App.css';
import "antd/dist/antd.css";
import styled from "styled-components"
import Header from './Header';
import HomeBody from './HomeBody';
import Package from './Package';

const Container = styled.div`
  height : 100vh;
`

function App() {
  return (
    <Container>
        <Header/>
        <HomeBody/>
        <Package/>
    </Container>
  );
}

export default App;
