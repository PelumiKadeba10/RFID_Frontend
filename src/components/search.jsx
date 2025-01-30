import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
    const [date, setDate] = useState("");  // Track the date selected by the user
    const [events, setEvents] = useState([]);  // Store the results from the database
    const [error, setError] = useState("");  // To display any error message

    const handleSearch = async () => {
        if (!date) {
            alert("Please select a date");
            return;
        }

        try {
            const response = await fetch(`https://rfid-backend-29um.onrender.com/search`);
            const data = await response.json();

            if (response.ok) {
                // If the request was successful, update the events state
                setEvents(data);
                setError("");  // Clear any previous errors
            } else {
                // If no events are found or there's an error
                setEvents([]);
                setError(data.message || "An error occurred");
            }
        } catch (error) {
            setError("Failed to fetch data from the server.");
        }
    };

    return (
        <div className="bg-slate-50">
            <div className="grid grid-cols-1 space-y-10 text-center pt-10 pb-14 px-14 sm:grid-cols-1 sm:space-y-0">
                {/* Date */}
                <div className="items-center justify-center">
                    <p className="text-3xl pb-4 font-semibold">Enter Date</p>
                    <input
                        type="date"
                        className="w-3/5 border-0 shadow-lg py-5 rounded-lg hover:border-slate-700"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
            </div>

            {/* Search button */}
            <div className="flex justify-center pb-10">
                <button
                    onClick={handleSearch}
                    className="flex border shadow-lg space-x-4 px-5 py-4 rounded-xl hover:bg-slate-800 hover:text-white"
                >
                    <FaSearch />
                    <p className="py-0">Search</p>
                </button>
            </div>

            {/* Show search results or error */}
            <div className="text-center">
                {error && <p className="text-red-500 text-4xl">{error}</p>}

                {events.length > 0 ? (
                    <div>
                        <h3 className="text-xl font-semibold">Found {events.length} Event(s)</h3>
                        <ul>
                            {events.map((event, index) => (
                                <li key={index}>{event.name} on {event.date}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p className="p">No events found for this date.</p>
                )}
            </div>
        </div>
    );
}

export default Search;
