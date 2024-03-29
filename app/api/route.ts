import { conn } from "@/utils/db";
import { userModel } from "@/models/userModel"; 
import { NextResponse } from "next/server";

export async function GET(res: Response) {
    await conn();

    const info = await userModel.find();
    return NextResponse.json(info);
}
