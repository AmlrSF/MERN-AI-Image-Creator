import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home,SignIn,Login,ImageGenerator,Profile, EditPage } from "./pages";
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
                path="/Profile/:id"
                element={<Profile />}
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
              <Route 
                path="/Profile/edit/:id"
                element={<EditPage />}
              />
            </Routes>
          </div>
          
      </UserContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App
