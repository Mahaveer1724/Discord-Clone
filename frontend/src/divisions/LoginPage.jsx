import React from "react";
import LoginForm from "../components/ui/LoginForm";
import QRBox from "../components/ui/qrBox";

function LoginPageDivs(){
    return(
           <div className="realtive min-h-screen w-full bg-[url(./public/imgs/loginBG.jpg)] bg-center bg-cover bg-no-repeat">
                <div className="absolute flex rounded-xl h-[28rem]  w-[50rem] bg-[#393a41] mx-92 my-50 shadow-lg">
                    <LoginForm />
                    <QRBox />
                </div>

                <img src="./public/imgs/dc-icon2.png" className="m-5 absolute " />

                <h1 className="text-[#8c9eff] text-[33px] mx-[4.8rem] my-[1.11rem] absolute  ">
                    <b>Discord</b>
                </h1>
           </div>

    )
}

export default LoginPageDivs