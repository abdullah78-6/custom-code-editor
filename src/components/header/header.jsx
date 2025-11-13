import { useContext, useState } from "react";
import { Helper } from "../../store/imp";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
function Head(){
    const {theme,settheme}=useContext(Helper);
    return<div>
        <h1 className="text-center text-6xl" >CODE-EDITOR</h1>
     <div className="flex justify-end mr-10">
        
        {!theme?<button className="text-2xl" onClick={()=>settheme(true)}><GoSun/></button>:<button className="text-2xl" onClick={()=>settheme(false)}><FaMoon /></button>}
    </div>
    </div>

}
export default Head;