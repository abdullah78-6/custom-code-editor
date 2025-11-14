import { createContext, useState } from "react";


export const Helper=createContext();
export function Gives({children}){
    let[lang,setlang]=useState("javascript");
    let[theme,settheme]=useState(false);
    let[codedetails,setcodedetails]=useState();
    let [results,setresult]=useState();
   function Coderun(){
    console.log(lang);
        if(!codedetails){
            alert("PLEASE WRITE SOME CODE ");
            return;
        }
        if(lang.toLowerCase()==="javascript"){
            try{
                let output="";
                const storelogs=(...args)=>{
                    output+=args.join("")+"\n";

                }
                console.log=storelogs;
                const result=eval(codedetails);
                if(result!=undefined){
                    output+=result;
                }
                setresult(output);


            }
            catch(err){
                console.log(err);
                alert("this is a ",err);
                setresult(err);

            }
        }
        else{
            setresult("NOT SUPPORTED LANGUAGE");
        }
        console.log("this is details of our code ",codedetails);
        

    }
    return <Helper.Provider value={{lang,setlang,theme,settheme,Coderun,setcodedetails,results,setresult,codedetails}}>
        {children}
    </Helper.Provider>
}
