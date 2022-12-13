import App from "./App";
import ReactDOM  from "react-dom/client";
import getImagesBySearch from "./api"

const el= document.getElementById("root")
const root = ReactDOM.createRoot(el)


getImagesBySearch()

root.render(<App/>) 