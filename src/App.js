import Footer from './components/footer/footer'
import Home from './page/home'
import Signin from './page/signinpage'
import User from './page/user'
import Error from './page/error'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/user' element={<User />} />
          <Route path='/*' element={<Error />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
