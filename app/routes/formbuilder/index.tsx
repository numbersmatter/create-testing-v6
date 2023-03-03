import QuestionPanel from "~/server/routes-logic/formBuilder/ui/elements/QuestionPanel";
import SelectField from "~/server/routes-logic/formBuilder/ui/StackedFields/SelectField";
import TextField from "~/server/routes-logic/formBuilder/ui/StackedFields/TextField";


const options = [
  { label: "discord", value: "discord" },
  { label: "twitter", value: "twitter" },
  { label: "email", value: "email" },
]


export default function FormbuilderIndex() {


  return (
    <main className=" max-w-6xl  px-5">

      <QuestionPanel name="test" text="more text for now">
        <TextField
          fieldId="discord"
          label="Discord Username"
          defaultValue="MarkMutt"
        />
        <SelectField
          fieldId="contact"
          label="Preferred Contact Method"
          options={options}
          defaultValue={options[0].value}
        />


      </QuestionPanel>
    </main>
  );
}