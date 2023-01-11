import { Component } from "react";

export default class Card extends Component{
    render(){
        return (
            <div className="card m-2 bg-white border-2 min-h-20">
                <h1 className="w-full text-slate-700  h-10 border-b-2 pl-2 pt-2">{this.props.title}</h1>
                <div className="text-slate-700">{this.props.children}</div>
            </div>
        )
    }
}