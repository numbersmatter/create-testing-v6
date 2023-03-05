import { ActionArgs, json, LinksFunction, LoaderArgs } from "@remix-run/node";
import { useCallback } from "react";
import { bucket, cloudStorage, getRestConfig } from "~/server/firebase.server";
import QuestionPanel from "~/server/routes-logic/formBuilder/ui/elements/QuestionPanel";
import { formidable } from "formidable"
import { ref} from "firebase/storage";
// import { storage } from "firebase-admin";

export const links: LinksFunction = () =>{
  return [
    {
      href:"https://upload-widget.cloudinary.com/global/all.js"
    }
  ]
}

export async function action({params}:ActionArgs) {
  
  return json({});
}




export const loader = async ({ request }: LoaderArgs) => {
  const imageRef = bucket.storage
  const fileTest = bucket.file("testFile")

  
  
  const { apiKey, domain } = getRestConfig();
  return json({ apiKey, domain },);
};




export default function LocalImage() {

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // To avoid rate limiting, we sign in client side if we can.
      // const login = await firebaseRest.signInWithPassword(
      //   {
      //     email: event.currentTarget.email.value,
      //     password: event.currentTarget.password.value,
      //     returnSecureToken: true,
      //   },
      //   restConfig
      // );


      // if (firebaseRest.isError(login)) {
      //   setClientAction({ error: login.error.message });
      //   return;
      // }
      // submit({ idToken: login.idToken }, { method: "post" });
    },

    // [submit, restConfig]
    []
  );
  
  return (
    <QuestionPanel name="Client upload" text= "client upload" >


    </QuestionPanel>
  );
}
