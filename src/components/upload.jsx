function Upload(){
    return(
        <>
        <div className="bg-slate-50 grid grid-cols-1 justify-center ">
            {/* Text section */}
            <h1 className="text-4xl p-6 font-semibold text-center">LIVE UPLOAD</h1>
            
            {/* Table Section */}
            <div className="border-2 rounded-lg p-4 mb-10 sm:mx-20 ">
                <table className="border-separate border-spacing-2 border border-slate-500">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>TIME</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
        </>
    );
}

export default Upload