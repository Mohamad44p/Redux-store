// RootLayout.jsx
import {Outlet} from 'react-router-dom';
import NavBarPanel from './NavBarPanel';
import { Provider } from 'react-redux';
import store from '../store/store';
const RootLayout = () => {
  return ( 
    <>
    <Provider store={store}>
      <NavBarPanel />
      <main>
        <Outlet /> {/* This will render the matching child route */}
      </main>
      </Provider>
    </>
  );
}
 
export default RootLayout;
