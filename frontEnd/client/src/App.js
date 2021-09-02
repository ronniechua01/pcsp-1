import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import {getPosts} from './Actions/posts';
//import Posts from './Components/ReporPage/ReportPage';
import ReportPage from './Components/ReportPage/ReportPage'
import NavbarComp from './Components/NavBar/NavbarComp';
import HomePage from './Components/HomePage/HomePage';
// import HomePage from './Components/Home Page/Homepage';


function App() {
  return (
    <div>
      <NavbarComp/>
      {/* <HomePage/> */}
      {/* <img src="/images/infographics.jpg" alt=""/> */}
    </div>
  );
}

export default App;
