import './App.css';

import SectionOne from './containers/sectionOne';
import SectionTwo from './containers/sectionTwo';
import SectionThree from './containers/sectionThree';
import SectionFour from './containers/sectionFour';

function App() {

  return (
    <div className="App">
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
    </div>
  );
}

export default App;
