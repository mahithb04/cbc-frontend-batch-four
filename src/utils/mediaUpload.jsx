import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://ehqkebnsemfbwxaiankw.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVocWtlYm5zZW1mYnd4YWlhbmt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4MzUzOTMsImV4cCI6MjA2MTQxMTM5M30.rTKJ2hyMvzhmXnmTYdT7z_XWiwGHcsekVHbThg2SWEU")

export default function mediaUpload(file){
    const promise = new Promise(
        (resolve,reject)=>{
            if(file == null){
                reject("No file selected")
            }
            const timeStamp = new Date().getTime()
            const newFileName = timeStamp+file.name

            supabase.storage.from("images").upload(newFileName, file, {
                cacheControl: "3600",
                upsert: false,
            }).then(
                ()=>{
                    const url = supabase.storage.from("images").getPublicUrl(newFileName).data.publicUrl
                    resolve(url)
                }
            ).catch(
                (error)=>{
                    console.log(error)
                    reject("File upload failed")
                }
            )
        }
    )

    return promise;

}