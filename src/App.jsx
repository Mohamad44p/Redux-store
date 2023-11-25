import {Route, createBrowserRouter , createRoutesFromElements , RouterProvider } from 'react-router-dom';
import Product from './components/Product';
import Dashborard from './components/Dashborard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';
import NavBarPanel from './components/NavBarPanel';

function App(){
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path = "/" element = {<RootLayout/>}>
      <Route index element = {<Dashborard/>}></Route>
      <Route path = "/cart" element = {<Cart/>}></Route>
    </Route>
  ))
  return(
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}
export default App;
