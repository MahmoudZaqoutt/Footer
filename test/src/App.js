// import logo from './logo.svg';
import './App.css';
import Info from './LeftSide/Info';
import Container from './Container/Container';
import Center from './Center/Center';
import Direction from './Right/Direction';
// import './Center.css'
function App() {
  return (
    <div className="App">
      <Container>
        <Info />
         <Center />         
        <Direction contnet = "content" />
      </Container>
      <p className='copyright'>2022 - Copyright @</p>

    
    </div>
  );
}

export default App;
