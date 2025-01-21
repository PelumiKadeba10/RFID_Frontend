import { FaSearch } from "react-icons/fa";

function Search(){
    return(
        <>
        <div className="bg-slate-50">
            <div className="grid grid-cols-1 space-y-10 text-center pt-10 pb-14 px-14 sm:grid-cols-1 sm:space-y-0">
                {/* Date */}
                <div className="items-center justify-center">
                    <p className="text-3xl pb-4 font-semibold">Enter Date</p>
                    {/* Search Bar */}
                    <input type="date" className="w-3/5 border-0 shadow-lg py-5 rounded-lg hover:border-slate-700" placeholder=""></input>
                </div>
            </div>

            {/* Search button */}
            <div className="flex justify-center pb-10">
                <button className=" flex border- shadow-lg space-x-4 px-5 py-4 rounded-xl hover:bg-slate-800 hover:text-white ">
                    <FaSearch />
                    <p className="py-0">Search</p>
                </button>
            </div>
        </div>
        </>
    );
}

export default Search