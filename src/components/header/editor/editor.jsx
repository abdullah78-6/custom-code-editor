import { useContext } from "react";
import { Helper } from "../../../store/imp";
import { FaPlay } from "react-icons/fa";
import Editor from "@monaco-editor/react";

function Editors() {
  const { Coderun, setcodedetails, setlang, lang, results, codedetails } =
    useContext(Helper);

  return (
    <div className="mt-5 px-4">
      <h1 className="text-3xl text-center mb-5">RUN YOUR CODE HERE</h1>

      
      <div className="flex flex-wrap gap-3 justify-center items-center text-center">
        <label className="text-xl sm:text-2xl capitalize">
          JAVASCRIPT CODE EDITOR
        </label>

        <input
          type="text"
          className="border-2 border-black rounded-xl p-2 text-sm sm:text-base"
          placeholder="CHOOSE-LANGUAGE"
          value="javascript"
          readOnly
        />

        <button
          className="text-xl bg-blue-500 text-white px-4 py-2 rounded-xl mt-2 flex items-center gap-2"
          onClick={Coderun}
        >
          <FaPlay /> RUN
        </button>
      </div>

     
      <div className="flex flex-col md:flex-row justify-center items-start gap-4 mt-5 w-full">

     
        <div className="w-full md:w-[45%] h-[40vh] md:h-[60vh] border rounded-xl">
          <Editor
            width="100%"
            height="100%"
            language={lang}
            defaultValue="//WRITE YOUR JAVASCRIPT CODE"
            value={codedetails}
            onChange={(value) => setcodedetails(value)}
          />
        </div>

     
        <textarea
          placeholder="CODE OUTPUT"
          className="w-full md:w-[45%] h-[40vh] md:h-[60vh] border-2 border-black rounded-xl p-3 bg-black text-white text-xl overflow-y-scroll"
          readOnly
          value={results}
        />
      </div>
    </div>
  );
}

export default Editors;
