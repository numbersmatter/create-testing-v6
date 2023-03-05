import type { ActionArgs, LoaderArgs, UploadHandler } from "@remix-run/node";
import {
  json,
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
} from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { uploadImage } from "~/server/routes-logic/formBuilder/cloudinary.server";
import QuestionPanel from "~/server/routes-logic/formBuilder/ui/elements/QuestionPanel";



export const action = async ({ params, request }: ActionArgs) => {
  const uploadHandler: UploadHandler = composeUploadHandlers(
    async ({ name, data }) => {
      if (name !== "img") {
        return undefined;
      }

      const uploadedImage = await uploadImage("test-upload", data);
      return uploadedImage.secure_urlz;
    },
    createMemoryUploadHandler()
  );

  const formData = await parseMultipartFormData(request, uploadHandler);
  const imgSrc = formData.get("img");
  const imgDesc = formData.get("desc");
  if (!imgSrc) {
    return json({ error: "something wrong" });
  }

  return json({ imgDesc, imgSrc });
};

export async function loader({params}:LoaderArgs) {
  

  return json({});
}


export default function Index() {
  const data = useActionData<typeof action>();

  return (
    <div>
      <Form method="post" encType="multipart/form-data">
        <QuestionPanel name="Reference Upload" text="Upload your references" >
          <div className="sm:col-span-6">
            <label htmlFor="img-field" className="block text-sm font-medium leading-6 text-gray-900">
              Image Upload
            </label>
            <div className="mt-2">
              <input id="img-field" type="file" name="img" accept="image/*" />
            </div>
          </div>
          <button type="submit">upload to cloudinary</button>
        </QuestionPanel>
        <label htmlFor="img-field">Image to upload</label>
        {/* <input id="img-field" type="file" name="img" accept="image/*" /> */}
      
      </Form>
      {data?.error ? <h2>{data.error}</h2> : null}

      {data?.imgSrc ? (
        <>
          <h2>uploaded image</h2>
          <img src={data.imgSrc} alt={data.imgDesc || "Upload result"} />
        </>
      ) : null}
    </div>
  );
}