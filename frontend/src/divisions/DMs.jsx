import React from "react";
import Messages from "../components/ui/Message";
import Friends from "../components/ui/Friends";
import Information from "../components/ui/FriendsInfo";

function DMsDivs (){
    return(
        <div className="realtive flex min-h-screen w-full bg-[#000000]">
            <Friends />
            <Messages />
            <Information />
        </div>
    )
}

export default DMsDivs