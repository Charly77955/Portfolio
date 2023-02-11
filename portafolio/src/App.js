import './App.css';
import Main from './MainScreen/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavBar from './Components/NavBar/NavBar'
import SkillSet from './Components/Skills/SkillSet';
import Contact from './Components/Contact/contact';
import Projects from './Components/Projects/projects';

function App() {
  return (
    <div className="App">
      <>
      <MainNavBar/>
      <a name="home"><Main/></a> 
      <a name="projects"><Projects/></a>
      <a name="skills"><SkillSet/></a> 
      <a name="contact"><Contact/></a> 
    </>
    </div>
  );
}

export default App;
