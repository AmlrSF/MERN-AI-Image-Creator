import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home,SignIn,Login,ImageGenerator } from "./pages";
import {Navbar} from './components';
import { UserContextProvider } from "./context/context";
const  App = () => {
  return (
    <>
    <BrowserRouter>
      <UserContextProvider>
        
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
          
      </UserContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App
