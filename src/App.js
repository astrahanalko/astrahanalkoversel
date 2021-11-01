import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import MainWrapper from './components/MainWrapper';

function App() {
  return (
    <div className="App">
      <MainWrapper>
        <Header />
        <MainContent />
        <Footer />
      </MainWrapper>
    </div>
  );
}

export default App;
