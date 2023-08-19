import mongoDB from "@/app/libs/mongoDB";
import Contact from "@/app/models/contactSch";
import { NextResponse } from "next/server";

export async function POST(request) {

    const { username, useremail, usernumber, usermessage } = await request.json()

    await mongoDB();

    await Contact.create({ username, useremail, usernumber, usermessage })

    return NextResponse.json(
        {
            message: "contact added"
        },
        {
            status:200
        }
    )
}