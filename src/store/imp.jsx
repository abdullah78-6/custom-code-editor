import { createContext, useState } from "react";

export const Helper=createContext();
export function Gives({children}){
    let[lang,setlang]=useState("empty");
    let[theme,settheme]=useState(false);
    let[codedetails,setcodedetails]=useState();
   function Coderun(){
    console.log(lang);
        if(!codedetails){
            alert("PLEASE WRITE SOME CODE ");
        }
        console.log(codedetails);
    }
    return <Helper.Provider value={{lang,setlang,theme,settheme,Coderun,setcodedetails}}>
        {children}
    </Helper.Provider>
}
