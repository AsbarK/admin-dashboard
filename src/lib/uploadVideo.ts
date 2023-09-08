import axios from "axios";


export async function uploadYtVideo(token:string,video) {
    // const formData = new FormData(video);

    // Add the file to the FormData object
    // formData.append("file", );
    
    // Create a new XMLHttpRequest object
    // const xhr = new XMLHttpRequest();
    
    // Set the request method to POST
    // xhr.open("POST", "https://www.googleapis.com/upload/youtube/v3/videos");
    
    // Set the request headers
    // xhr.setRequestHeader("Content-Type", "multipart/form-data");
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
            body: video,
          },
    },headers:{
        Authorization:"Bearer "+token
    }}).then((res)=> console.log(res.data))
}