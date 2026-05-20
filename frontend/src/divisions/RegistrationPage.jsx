import React from "react";
import RegistrationForm from "../components/ui/RegisterForm";

function RegistrationPageDivs (){
    return(
        <div className="realtive min-h-screen w-full bg-[url(./public/imgs/loginBG.jpg)] bg-center bg-cover bg-no-repeat">
            <div className="h-[49rem] w-[29rem] absolute bg-[#393a41]  text-[#e9e9ea] -translate-x-[-34rem] my-[1.2rem] rounded-xl shadow-lg">
                <RegistrationForm />
            </div>

            <img src="./public/imgs/dc-icon2.png" className="m-5 absolute " />

            <h1 className="text-[#8c9eff] text-[33px] mx-[4.8rem] my-[1.11rem] absolute  ">
                <b>Discord</b>
            </h1>
        </div>
    )
}

export default RegistrationPageDivs