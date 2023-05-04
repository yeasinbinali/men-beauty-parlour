import { RouterProvider } from "react-router";
import { router } from "./routes/Route/Route";
import { Toaster } from 'react-hot-toast';


function App() {
  return <>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
  </>
}

export default App;
