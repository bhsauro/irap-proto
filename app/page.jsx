import Image from "next/image";
import Form from "./ui/language-selection";
import Example from "./ui/eligibility-form";
import Steps from "./ui/steps"

export default function Home() {
  
  return (
   <>
  
    <header>
      <h1>Universal Self-Referral Prototype</h1>
    </header> 
    <body>
      <div className="formContainer">
      <h2></h2>
      <Form />  
      </div>
    </body>
      
  
   </>
  );
}
