import { LoaderArgs, redirect } from "@remix-run/node";
import { getIntentDoc, getNextUrl } from "~/server/routes-logic/opportunities/opportunities.server";



export async function loader({params}:LoaderArgs) {
  const intentId = params.intentId ?? "no-intent";
  const intentDoc = await getIntentDoc(intentId);
  if(!intentDoc){
    throw new Response("Error no doc found", {status:404})
  }
  
  const nextURL= getNextUrl(intentDoc.questionOrder, intentDoc.questionStatus);

  const urlPrefix = "test"
 
  return redirect(`${urlPrefix}/nextURL`);
}
