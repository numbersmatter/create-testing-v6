import { json, LoaderArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Field } from "~/server/routes-logic/formBuilder/types";
import QuestionPanel from "~/server/routes-logic/formBuilder/ui/elements/QuestionPanel";
import StackedField from "~/server/routes-logic/formBuilder/ui/elements/StackedField";

export async function loader({params}:LoaderArgs) {
  const questionId = params.questionId ?? "no-questionId";
  const question = await getQuestionbyId(questionId);
  const fieldValues = await getFieldValues(questionId);

  if(!question){
    return redirect("../")
  }


  return json({question, fieldValues});
}




export default function QuestionId() {
  const { question, fieldValues} = useLoaderData()
  
  return (
    <div className="max-w-5xl">
      <QuestionPanel name={question.name} text ={question.text}>
        {
          question.fields.map((field: Field)=>{
            const fieldValue = field.fieldId in fieldValues ? fieldValues[field.fieldId] : ""

            return <StackedField key={field.fieldId} field={field} defaultValue={fieldValue} />
          }
          )
        }

      </QuestionPanel>

    </div>
  );
}