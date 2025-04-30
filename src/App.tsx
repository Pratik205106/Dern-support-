import { RouterProvider } from "react-router"
import { route } from "./routes/Route"



const App = () => {
  return (
   <>
<RouterProvider router={route}/>
   </>
  )
}

export default App;