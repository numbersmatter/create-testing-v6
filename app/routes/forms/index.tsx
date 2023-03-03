import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getForms } from "~/server/routes-logic/formBuilder/formBuilder.server";

 
export async function loader({params}:LoaderArgs) {
  const forms = await getForms() 

  return json({forms});
}

 
 
 export default function FormsLayout() {
   const { forms } = useLoaderData<typeof loader>();

  // const forms = []
  return (
     <article className="prose prose-xl">
       <h1>Welcome to FormsLayout</h1>
       <p>This is the  FormsLayout</p>
       <ul>

       {
         forms.map(form =><li key={form.formId}>
          <Link to={form.formId}>{form.name}</Link>
         </li> )
        }
        <li>
          <Link to='add-form'>Add Form</Link>
        </li>
        </ul>
     </article>
   );
 }