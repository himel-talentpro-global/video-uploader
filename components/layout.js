import { Component } from "react"
import SideBar from "./sidebar/side-bar"
import TopBar from "./top-bar"

export default class Layout extends Component{

    render(){
        return <main className='container grid grid-cols-12'>
            <SideBar/>
            <section className='col-span-10 min-h-screen bg-gray-100'>
                <TopBar/>
                {this.props.children}
            </section>
        </main>
    }
}