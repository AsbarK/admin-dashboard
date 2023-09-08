import { NextRequest, NextResponse } from "next/server";
import fs from "fs";

export async function GET(req: NextRequest) {
  const reqBody = req.body
    const stream = fs.createReadStream(reqBody['video']);
    const chunks = [];

    for await (const chunk of stream) {
        chunks.push(chunk);
    }

    // Create a response object with the content
    const response = new Response(`Read ${chunks.join('')}`, {
        status: 200,
        headers: {
            "Content-Type": "text/plain",
        },
    });

    return response;
}
