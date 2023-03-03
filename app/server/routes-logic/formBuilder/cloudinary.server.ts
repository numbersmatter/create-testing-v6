import cloudinary from "cloudinary";
import { writeAsyncIterableToWritable } from "@remix-run/node";

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.API_SECRET,
});

async function uploadImage(referenceId: string, data: AsyncIterable<Uint8Array>) {
  const uploadPromise = new Promise(async (resolve, reject) => {
    const uploadStream = cloudinary.v2.uploader.upload_stream(
      {
        folder: `${referenceId}`,
      },
      (error, result) => {
        if(!result){
          reject(error);
          return;
        }
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      }
    );
    await writeAsyncIterableToWritable(data, uploadStream);
  });

  return uploadPromise;
}

console.log("configs", cloudinary.v2.config());
export { uploadImage };