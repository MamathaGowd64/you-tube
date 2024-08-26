import Head from './components/Head';
import Body from './components/Body';
import Maincontainer from './components/Maincontainer'
import Watch from './components/Watch'
import './App.css';
import store from './utils/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [{
        path: "/",
        element: <Maincontainer />,
        
    },
      {
        path: 'watch',
        element:<Watch/>
      }],
    }
  ])
  return (
    <Provider store={store}>
      <div>
      <Head />
      <RouterProvider router={appRouter}/>
      </div>
    </Provider>
      
  );
}

export default App;
