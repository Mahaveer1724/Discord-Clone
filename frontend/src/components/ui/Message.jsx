import React from "react";

function Messages (){
    return(
        <div className="relative min-h-screen w-[55rem] -translate-x-[-20rem] bg-amber-200">
            <div className="w-[55rem] absolute h-[3rem] bg-amber-800">

            </div>

            <input className="h-[4rem] w-[53rem] absolute rounded-lg -translate-x-[-1rem] -translate-y-[-47rem] p-8 font-['gg_sans','Noto_Sans','Helvetica_Neue',Helvetica,Arial,sans-serif] bg-[#131416] text-[#888991]" defaultValue="Message Jailer">
            </input>
        </div>
    )
}

export default Messages