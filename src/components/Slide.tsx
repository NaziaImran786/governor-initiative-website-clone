import React from 'react'
import Image from 'next/image'

function Slide(props: {mySrc: {img1: string, img2: string}}) {
  return (
    <>
      <div className='bg-[#ffffff] h-[600px] w-[100%] flex gap-4 rounded-2xl'>
        <div className='h-[100%] w-[50%] rounded-2xl'>
            <Image src={`/images/${props.mySrc.img1}`} alt="picture1" width={500} height={550} className='w-[100%] h-full'/>
        </div>
        <div className='h-[100%] w-[50%] rounded-2xl'>
         <Image src={`/images/${props.mySrc.img2}`} alt="picture2" width={500} height={550} className='w-[100%] h-full'/>
        </div>
      </div>
    </>
  )
}

export default Slide
