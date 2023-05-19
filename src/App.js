// import logo from './logo.svg';
import './App.css';
import Info from './LeftSied/Info';
import Container from './Container/Container';
import Center from './Center/Center';
import Direction from './Right/Direction';
function App() {
  return (
    <div className="App">
      <Container>
        <Info />
         <Center />         
        <Direction />
      </Container>
      <p className='copyright'>2022 - Copyright @</p>

    
    </div>
  );
}

export default App;
