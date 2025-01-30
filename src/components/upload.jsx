import React, { useEffect, useState, useMemo } from 'react';
import { io } from 'socket.io-client';
import { useTable } from 'react-table';

const socket = io('https://rfid-backend-29um.onrender.com/log'); // Initialize socket outside the component

function Upload() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // Listen for access_log events from the server
        socket.on('access_log', (logEntry) => {
            setLogs((prevLogs) => [...prevLogs, logEntry]);
        });

        // Clean up the socket connection on component unmount
        return () => {
            socket.off('access_log');
        };
    }, []);

    const columns = useMemo(
        () => [
            {
                Header: 'Tag',
                accessor: 'Matric',
            },
            {
                Header: 'Name',
                accessor: 'Name',
            },
            {
                Header: 'Status',
                accessor: 'Status',
            },
            {
                Header: 'Time',
                accessor: 'timestamp',
                Cell: ({ value }) => new Date(value).toLocaleString(), // Format timestamp
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: logs });

    return (
        <div className="bg-slate-50 grid grid-cols-1 justify-center p-6">
            <h1 className="text-4xl font-semibold text-center mb-4">UPLOADS</h1>

            <div className='border border-r-8 p-6 shadow-inner mx-6'>
                
            </div>
        </div>
    );
}

export default Upload;
