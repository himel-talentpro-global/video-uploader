export default function ImageListItem(){
    return (
        <div className="grid grid-cols-12 gap-4 mt-4 border-b-2 pb-4">
                        <div className="col-span-2 v_thumbnail w-full h-32 bg-slate-500">
                            &nbsp;
                        </div>
                        <div className="col-span-8 v_content relative">
                            <h3 className="font-bold text-slate-600">Title</h3>
                            <p className="text-slate-700">Description ....</p>
                            <span className="absolute bottom-2">
                                <span className="rounded-full p-2 bg-slate-200 h-7 mx-2">tag</span>
                                <span className="rounded-full p-2 bg-slate-200 h-7 mx-2">tag 1</span>
                            </span>
                        </div>
                        <div className="col-span-2 v_content_end">

                        </div>
                    </div>
    )
}