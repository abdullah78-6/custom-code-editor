import { useContext } from "react";
import { Helper } from "../../../store/imp";
import { FaPlay } from "react-icons/fa";
function Editor(){
    const{Coderun,setcodedetails,setlang}=useContext(Helper);
    return <div className="mt-5  ">
        <h1 className="ml-5 text-3xl text-center">RUN YOUR CODE HERE </h1>
        <div className="flex gap-4 items-center justify-center">
            <form>
                <label className="text-2xl capitalize">select your progamming language</label>
        <input type="text" list="language" className="border-2 border-black rounded-4xl p-2" placeholder="CHOOSE-LANGUAGE" onChange={(e)=>setlang(e.target.value)}/>
        <datalist  id="language">
            <option   value="javascript"/>
             <option value="C"/>
              <option value="C++"/>
              
        </datalist>
       
        </form>
       
        <button className="text-2xl mt-5" onClick={Coderun}><FaPlay/>RUN</button>
        </div>
        <div className="flex justify-center items-center flex-wrap">
        <div className="mt-3">
            
            
            <textarea placeholder="WRITE YOUR CODE" className="border-2 border-black w-150 h-160 text-white text-3xl ml-3 overflow-y-scroll overflow-visible" onChange={(e)=>setcodedetails(e.target.value)} >
           </textarea>
          

        </div>
        <div>
            
            <textarea placeholder="CODE-OUTPUT" className="border-2 border-black w-150 h-160 text-white text-3xl ml-3 overflow-y-scroll overflow-visible" onChange={(e)=>setcodedetails(e.target.value)} readOnly>
           </textarea>



        </div>
        </div>


    </div>

}
export default Editor;