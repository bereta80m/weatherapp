import { NextResponse } from "next/server";
import axios from "axios";

const API_KEY = "87998f44ea138cfc20f2eba1bc92bb6c";

export async function GET() {
  const res = await fetch( `https://api.openweathermap.org/data/2.5/forecast?q=${"santo domingo"}&appid=${API_KEY}`);
  const data = await res.json();
  return NextResponse.json({ data });
}
