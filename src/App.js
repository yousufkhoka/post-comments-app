
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import PostDetail from './components/PostDetail/PostDetail';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    
        < BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/post/:postId' element={<PostDetail/>} />
            <Route  path="*" element={<NoMatch/>} />
          </Routes>
        </ BrowserRouter>
      
     

  );
}

export default App;
