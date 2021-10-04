
import './App.css';
// Bootstrap Css 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import Courses from './component/Courses/Courses';
import Home from './component/Home/Home';
import Blogs from './component/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/courses'>
            <Courses></Courses>
          </Route>
          <Route path='/blogs'>
            <Blogs></Blogs>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
