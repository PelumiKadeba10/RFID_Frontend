import React, { useEffect, useState } from 'react';

function Upload() {
    // State to store the uploaded logs
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch logs from the Flask API when the component mounts
    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const response = await fetch('https://rfid-backend-29um.onrender.com/gt_logs');
                if (!response.ok) {
                    throw new Error('Failed to fetch logs');
                }
                const data = await response.json();
                setLogs(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLogs();
    }, []);

    // If the data is still loading, show a loading message
    if (loading) {
        return <div className="bg-slate-50 grid grid-cols-1 justify-center p-6">Loading...</div>;
    }

    // If there was an error fetching data, show an error message
    if (error) {
        return <div className="bg-slate-50 grid grid-cols-1 justify-center p-6">Error: {error}</div>;
    }

    return (
        <div className="bg-slate-50 grid grid-cols-1 justify-center p-6">
            <h1 className="text-4xl font-semibold text-center mb-4">UPLOADS</h1>

            <div className='border border-r-8 p-6 shadow-inner mx-6'>
                {/* Render the uploaded logs */}
                <div>
                    {logs.length > 0 ? (
                        <div className="overflow-y-auto max-h-96"> {/* Scrollable container */}
                            <table className="table-auto w-full text-left">
                                <thead>
                                    <tr>
                                        <th className="border-b-2 py-2 px-4">Tag</th>
                                        <th className="border-b-2 py-2 px-4">Name</th>
                                        <th className="border-b-2 py-2 px-4">Matric</th>
                                        <th className="border-b-2 py-2 px-4">Timestamp</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {logs.map((log, index) => (
                                        <tr key={index}>
                                            <td className="border-b py-2 px-4">{log.tag || 'N/A'}</td>
                                            <td className="border-b py-2 px-4">{log.Name || 'Unknown'}</td>
                                            <td className="border-b py-2 px-4">{log.Matric || 'N/A'}</td>
                                            <td className="border-b py-2 px-4">{log.timestamp || 'N/A'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p>No logs uploaded yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Upload;
