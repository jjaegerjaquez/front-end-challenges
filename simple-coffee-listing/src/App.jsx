import './App.css';
import SubHeader from './components/header/SubHeader';
import CoffeeListing from './feature/coffee-listing/CoffeeListing';

function App() {
  return (
    <div className="mb-[calc(-10vh)]">
      <div className="bg-header h-[40vh] bg-cover bg-center bg-no-repeat"></div>
      <div className="bg-[#1B1D1F] relative xl:w-[85%] md:w-[70%] sm:w-[60%] w-[95%] mx-auto top-[calc(-18vh)] py-20 rounded-lg text-center">
        <SubHeader />
        <CoffeeListing />
      </div>
    </div>
  );
}

export default App;
