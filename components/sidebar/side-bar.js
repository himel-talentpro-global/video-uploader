import Link from "next/link";
import { useRouter } from "next/router";
import { Component } from "react";
import { Button } from "../button";
import { handleClick } from "./events";



const SideBar = ()=> {
    const router = useRouter();
    const currentPath = router.pathname
    return <aside className='col-span-2 grid grid-cols-4 min-h-screen self-start sticky top-0 left-0 border-r-2'>
        <section className='col-span-1 place-content-center bg-blue-500'>
            <h1 className='flex mx-2.5 my-2.5 absolute  justify-center items-center bg-white rounded-full w-10 h-10 text-black text-center font-bold text-2xl text-blue-700'>V</h1>
        </section>
        <section className='col-span-3 px-2'>
            <h2 className='text-2xl mx-2.5 h-16  flex justify-center items-center bg-white text-blue-600'>
                <em><Link href="/">Videos</Link></em>
            </h2>
            <Button  click={()=>handleClick(router)} className='flex justify-center w-40 mx-auto mt-2'>Upload Video</Button>
            <ul className="w-40 mx-auto mt-10 hover:text-blue-700">
                <li><Link href="/videos" className={currentPath=='/videos'?'active:text-blue-700':'text-slate-700'}>My Videos</Link></li>
                <li><Link href="/fitness" className={currentPath=='/fitness'?'active:text-blue-700':'text-slate-700'}>Fitness</Link></li>
            </ul>
        </section>
        </aside>
    
}

export default SideBar;
