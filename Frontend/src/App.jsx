import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home,SignIn,Login,ImageGenerator } from "./pages";
import {Navbar} from './components';

const  App = () => {
  return (
    <>
      <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/Login"
            element={<Login />}
          />
           <Route
            path="/SignIn"
            element={<SignIn />}
          />
          <Route
            path="/AIimage"
            element={<ImageGenerator />}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
