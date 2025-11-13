import { Gives } from "./store/imp"
import Head from "./components/header/header.jsx";
import Editor from "./components/header/editor/editor.jsx";
import { useContext } from "react";
import { Helper } from "./store/imp";
function Inner(){
  const {theme}=useContext(Helper);
  return <div className={`${theme?"bg-gray-950 h-screen transition ease-in-out duration-500":"bg-blue-600 h-screen transition ease-in-out duration-500"} text-white`}>
    <Head/>
    <Editor/>

  </div>
}
function App() {
  return <Gives>
    <Inner/>
  </Gives>
}

export default App
