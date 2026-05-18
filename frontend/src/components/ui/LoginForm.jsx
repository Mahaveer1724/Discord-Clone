import React from "react";

function LoginForm(){
    return(
        <form className="h-[28rem] w-[30rem] rounded-xl bg-[#393a41]  text-[#e9e9ea]">
            <h2 className="text-[23px] font-semibold -translate-x-[-11rem] mt-7">
                Welcome back!
            </h2>

            <h4 className="mb-5 -translate-x-[-8.4rem] mt-3">
                We're so excited to see you again!
            </h4>

            <h3 className="mb-1.5 font-medium -translate-x-[-2rem]">
                Email or Phone Number 
            </h3>

            <input className="rounded-lg border-[0.1px] border-[#6e6b6b] w-[26.5rem] h-[2.6rem] mb-5 bg-[#35353c] focus:ring-0 focus:outline-0 transition-colors delay-50 focus:border-[#3c8ebb] -translate-x-[-2rem]" />

            <h3 className="mb-1.5 font-medium -translate-x-[-2rem]">
                Password
            </h3>

            <input className="rounded-lg border-[0.1px] border-[#6e6b6b] w-[26.5rem] h-[2.6rem] mb-2 bg-[#35353c] focus:ring-0 focus:outline-0 transition-colors delay-50 focus:border-[#4451da] -translate-x-[-2rem]" />

            <h5 className="text-[0.9rem] text-[#7987c8] mb-5 -translate-x-[-2rem] hover:cursor-pointer">
                Forgot your password?
            </h5>

            <button className="w-[26.5rem] h-[2.6rem] bg-[#5865f2] rounded-lg mb-2 hover:cursor-pointer hover:bg-[#4452bb] transition-colors delay-50 active:bg-[#3a48a3] font-semibold -translate-x-[-2rem]">
                Log In
            </button>

            <h5 className="text-[0.9rem] -translate-x-[-2rem]">
                Need an account? <a className="text-[#7987c8]" href="/">Register</a>
            </h5>                      
        </form>
    )
}

export default LoginForm