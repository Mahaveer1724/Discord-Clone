import React from "react";

function RegistrationForm (){
    return(
        <form className="">
            <h2 className="text-[23px] font-semibold -translate-x-[-8.8rem] mt-7 mb-4">
                Create an account
            </h2>

            <h3 className="mb-1.5 font-medium -translate-x-[-2rem]">
                Email
            </h3>

            <input className="rounded-lg border-[0.1px] border-[#6e6b6b] w-[24.9rem] h-[2.5rem] mb-5 bg-[#35353c] focus:ring-0 focus:outline-0 transition-colors delay-50 focus:border-[#3c8ebb] -translate-x-[-2rem]" />
        
            
            <h3 className="mb-1.5 font-medium -translate-x-[-2rem]">
                Display Name
            </h3> 

            <input className="rounded-lg border-[0.1px] border-[#6e6b6b] w-[24.9rem] h-[2.5rem] mb-5 bg-[#35353c] focus:ring-0 focus:outline-0 transition-colors delay-50 focus:border-[#3c8ebb] -translate-x-[-2rem]" />
           
            <h3 className="mb-1.5 font-medium -translate-x-[-2rem]">
                Username
            </h3>

            <input className="rounded-lg border-[0.1px] border-[#6e6b6b] w-[24.9rem] h-[2.5rem] mb-5 bg-[#35353c] focus:ring-0 focus:outline-0 transition-colors delay-50 focus:border-[#3c8ebb] -translate-x-[-2rem]" />
            
            <h3 className="mb-1.5 font-medium -translate-x-[-2rem]">
                Password
            </h3>

            <input className="rounded-lg border-[0.1px] border-[#6e6b6b] w-[24.9rem] h-[2.5rem] mb-5 bg-[#35353c] focus:ring-0 focus:outline-0 transition-colors delay-50 focus:border-[#3c8ebb] -translate-x-[-2rem]" />
            
             <h3 className="mb-1.5 font-medium -translate-x-[-2rem]">
                Date Of Birth
            </h3>

            <div className="w-[24.9rem] h-[2.5rem] bg-[#393a41] mb-5">
                <div>
                    
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>

            <div className="[24.9rem] h-[5rem] bg-[#393a41] mb-1.5 flex">
                <input type="checkbox" className="" />
            </div>

            <p className="text-[0.9rem] mb-2.5 -translate-x-[-2rem] w-[24.9rem]">
                By clicking "Create Account", you agree to Discord's <a className="text-[#7987c8] hover:underline" href="#">Terms of Service</a> and have read the <a className="text-[#7987c8] hover:underline" href="#">Privacy Policy</a>
            </p>

            
            <button className="w-[24.9rem] h-[2.6rem] bg-[#5865f2] rounded-lg mb-2 hover:cursor-pointer hover:bg-[#4452bb] transition-colors delay-50 active:bg-[#3a48a3] font-semibold -translate-x-[-2rem]">
                Create Account
            </button>

            <h5 className="text-[0.9rem] text-[#7987c8] mb-5 -translate-x-[-2rem] hover:cursor-pointer hover:underline">
                Already have an account? Log In
            </h5>
        </form>
    )
}

export default RegistrationForm