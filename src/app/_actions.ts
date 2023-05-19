"use server";

import axios from "axios";

export async function verifyCaptcha(token: string, ekey: string) {
    const res = await axios.post(
        "https://hcaptcha.com/siteverify",
        new URLSearchParams({
            secret: process.env.NEXT_PUBLIC_SECRET_KEY ?? "",
            response: token,
        })
    );
    return res.data.success;
}