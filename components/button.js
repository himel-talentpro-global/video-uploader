export function Button({click,className,children}){
    const defaultClass = "bg-blue-500 text-white rounded p-2 "
    return <button 
                className={defaultClass+className} 
                type="button" 
                onClick={()=>click()}>{children}</button>
}