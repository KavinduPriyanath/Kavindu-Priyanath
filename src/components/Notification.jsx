import React, { useEffect } from 'react';

function Notification({ message, onRemove }) {
    useEffect(() => {
        const timer = setTimeout(onRemove, 2000); // Remove after 2 seconds
        return () => clearTimeout(timer);
    }, [onRemove]);

    return (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg mb-2">
            {message}
        </div>
    );
}

export default Notification;
