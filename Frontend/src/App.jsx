import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "./pages";
import {Navbar} from './components';

const  App = () => {
  return (
    <>
      <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
