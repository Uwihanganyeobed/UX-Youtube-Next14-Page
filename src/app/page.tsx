import Link from 'next/link'
import React from 'react'
/*
Mu Ncamake, ibi ni ibyo ugomba kwitaho mu e-commerce web app yawe:

Kora neza routing y’urubuga.
Hitamo uburyo bwiza bwo kwerekana amakuru (SSR, SSG, cyangwa ISR).
Koresha caching ngo wongere umuvuduko.
Shyiramo authentication n’umutekano ukomeye.
Koresha API routes mu gutoragura no gutunganya amakuru.
Koresha imyambarire ishyira imbere performance nka Tailwind CSS.
Tegura tests za buri gace kugira ngo umenye ko ibintu byose bikora neza.
Shyira urubuga ku murongo ukoresheje Vercel cyangwa izindi platforms.
*/ 

const Home = () => {
  return (
    <div className='p-4 my-2 rounded-md border-b leading-8'>
      <div className=" font-bold ">
        Natural Language processing (NLP)
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore obcaecati voluptate consectetur magnam. Aspernatur perspiciatis asperiores veritatis totam nisi, voluptatibus velit iste rem odit. Eaque molestias laudantium quas magni temporibus.
      </div>
      <div className=' flex gap-4 mt-4 justify-end'>
        <Link className='bg-slate-200 px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest' href='/edit'>Edit</Link>
        <button className='bg-red-500 text-white px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest'>Delete</button>
      </div>
    </div>
  )
}

export default Home
