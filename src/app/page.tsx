"use client";
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { useState } from "react"
import { verifyCaptcha } from "./_actions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page() {
    const [result, setResult] = useState<string>("認証してください。")
    async function handleCaptcha(token: string, eky: string) {
        if (await verifyCaptcha(token, eky)) {
            setResult("認証に成功しました。")
            const audio = new Audio("tada.wav");
            audio.play();
            toast.success("認証に成功しました。");
        }
    }
    return (
        <>
            <h2 className="text-2xl font-semibold">概要</h2>
            <p>hCaptchaを使ったサーバーアクションの例です。</p>
            <p>ソース</p>
            <br />
            <form>
                <HCaptcha
                  sitekey="aeadc4f2-732b-4e06-883c-d19a1fd079c3"
                  onVerify={handleCaptcha}
                />
            </form>
            <p>{result}</p>
            <ToastContainer />
        </>
    )
}