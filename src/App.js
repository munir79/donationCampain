import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Component/Main';
import Home from './Component/Home';
import Donation from './Component/Donation';
import Statistics from './Component/Statistics';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/donation',
          element:<Donation></Donation>
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
   
    </div>
  );
}

export default App;
