import { Link } from "react-router-dom";

function Newnav(){
    return(
    <>
    <div className="grid grid-cols-6 shadow-lg pb-2 sticky w-full top-0 z-50 bg-white">
        {/* Image section */}
        <div className="grid justify-center items-center pt-2 col-span-5">
            <img className="w-20 h-20 " src="/logo.svg" alt="Computer_Engineering_Logo"></img>
            <div className="flex justify-center">
                <p>EIE 413</p>
            </div>
        </div>

        {/* Past Records Section */}
        <div className="flex justify-center items-center sm:pr-6">
            <Link to="/"><button className="bg-gray-100 p-3 rounded-lg shadow-md hover:bg-black hover:text-white ">Home</button></Link>
        </div>
    </div>
    </>
    );
}

export default Newnav