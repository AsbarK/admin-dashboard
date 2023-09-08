"use client"
import React, { useState } from "react";
import { ModeToggle } from "@/components/modeToggleButton";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";

export default function Home() {
  const session = useSession();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  if (session.data?.user) {
    const handleUpload = async () => {
      if (selectedFile) {
        try {
          // Create a FormData object to send the file
          const formData = new FormData();
          formData.append("video", selectedFile);

          // Send a POST request to your server with the FormData
          await axios.post("/api/auth/uploadVideo", formData);

          // Call your upload function on the client-side
          // uploadYtVideo(session.data.user?.access_token, selectedFile);
        } catch (error) {
          console.error("Error uploading video:", error);
        }
      }
    };

    return (
      <>
        <ModeToggle />
        <button onClick={() => signOut()}>Sign out</button>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </>
    );
  }

  return (
    <>
      <ModeToggle></ModeToggle>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
