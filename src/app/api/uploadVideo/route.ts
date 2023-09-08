import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
// import { getProviders } from "next-auth/react";


  // Append the video file to the FormData object
  
export async function POST(req: NextRequest) {
  const reqBody = req.body;
  axios.post("https://www.googleapis.com/upload/youtube/v3/videos",{snippet: {
        title: 'My Video',
        description: 'This is my video.',
      },
      status: {
        privacyStatus: 'private',
      },},{params:{
        part:"snippet,contentDetails",
        mine:true,media: {
            mimeType: 'video/mp4',
            body: reqBody?.video,
          },
    },headers:{
        Authorization:"Bearer "+token
    }}).then((res)=> console.log(res.data))
}
