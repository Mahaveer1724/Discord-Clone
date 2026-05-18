import React from 'react'

function QRBox (){
    return(
        <div className="h-[28rem] w-[20rem] rounded-xl bg-[#393a41] p-8 text-[#e9e9ea]">          
                <img src="./public/imgs/qr.jpg" className='h-[13rem] w-[13rem] mt-8 mx-6' />
                <img src="./public/imgs/TopLogo.png" className='absolute h-[4rem] w-[4rem] mb-[6rem] -translate-y-[8.2rem] -translate-x-[-6rem]' />
                <p className='text-[1.3rem] font-semibold -translate-x-[-2rem] mt-3 mb-2.5'>
                    Log In with Qr Code
                </p>
                <p>
                    <center>Scan this with the <b>Discord Mobile App</b> to Log In instantly</center>
                </p>
        </div>
    )
}

export default QRBox