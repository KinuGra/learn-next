import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: "データを取得",
        hoge: "hello, world",
    });
}