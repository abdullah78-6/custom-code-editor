import { useContext } from "react";
import { Helper } from "../../../store/imp";
import { FaPlay } from "react-icons/fa";
import Editor from "@monaco-editor/react"
function Editors(){
    const{Coderun,setcodedetails,setlang,lang,results,codedetails}=useContext(Helper);
    return <div className="mt-5  ">
        <h1 className="ml-5 text-3xl text-center">RUN YOUR CODE HERE </h1>
        <div className=" flex  gap-4 items-center justify-center">
            <div>
                <label className="text-2xl capitalize">JAVASCRIPT CODE EDITOR</label>
        <input type="text" list="language" className="border-2 border-black rounded-4xl p-2" placeholder="CHOOSE-LANGUAGE" onChange={(e)=>setlang(e.target.value)} value="javascript" readOnly />
        
       
        </div>
        
       
        <button className="text-2xl mt-5" onClick={Coderun}><FaPlay/>RUN</button>
   
        </div>
        
        <div className="flex justify-center items-center flex-wrap">
        <div className="mt-3">
        <Editor height="70vh" width="90vh" language={lang} defaultValue="//WRITE YOUR JAVASCRIPT CODE " value={codedetails}  onChange={(value)=>setcodedetails(value)} />
            
            
        
          

        </div>
        <div>
            
            <textarea placeholder="CODE-OUTPUT" className="border-2 border-black w-150 h-160 text-white text-3xl ml-3 overflow-y-scroll overflow-visible"  readOnly value={results} >

            </textarea>
            
           



        </div>
        </div>


    </div>

}
export default Editors;