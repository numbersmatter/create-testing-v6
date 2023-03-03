import QuestionPanel from "~/server/routes-logic/formBuilder/ui/elements/QuestionPanel";
import TextField from "~/server/routes-logic/formBuilder/ui/StackedFields/TextField";





export default function FormbuilderIndex() {


  return (
    <main className=" max-w-6xl  px-5">
      
      <QuestionPanel name="test" text="more text for now">
          <TextField
            fieldId="discord"
            label="Discord Username"
            defaultValue="MarkMutt" 
          />


      </QuestionPanel>
    </main>
  );
}