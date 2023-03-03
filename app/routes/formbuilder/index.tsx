import QuestionContainer from "~/server/routes-logic/formBuilder/ui/forms/QuestionContainer";
import QuestionPanel from "~/server/routes-logic/formBuilder/ui/forms/QuestionPanelOLD";





export default function FormbuilderIndex() {
  
  return (
    <main className= "">

        <QuestionContainer questionName="test" questionText="more text for now">

        </QuestionContainer>
    </main>
  );
}