import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ 
    image: { maxFileSize: "32MB", maxFileCount: 3 }, 
    video: { maxFileSize: "32MB", maxFileCount: 1 }
  })
    .onUploadComplete(({ file }) => {
      console.log("Upload complete! File URL:", file.ufsUrl);
      // You can save the file URL to your database here if needed
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;