import Image from "next/image";
import { Component } from "react";

export default class TopBar extends Component{
    render(){
        return <section className='content-topbar sticky top-0 z-10 bg-white h-16 border-b-2 '>
            <div className="flex justify-end items-center self-center mx-4 ">
            <div className="flex justify-center  items-center bg-blue-500 my-1.5 text-white border-2 p-2 rounded-full w-12 h-12">
                MH
            </div>
            </div>
        </section>
    }
}