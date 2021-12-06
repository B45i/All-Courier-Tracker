import { useState, useEffect } from 'react';
import TrackingDetailsList from './TrackingDetailsList';

const TrackingDetails = ({ params }) => {
    const [trackingDetails, setTrackingDetails] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const provider = (params.provider || '').toLowerCase();
        const number = (params.number || '').toLowerCase();

        try {
            const response = await fetch(
                `https://api.allorigins.win/raw?url=https://indian-courier-api-premium.vercel.app/api/${provider}/${number}`
            );

            const data = await response.json();

            if (data.status === 'success') {
                setTrackingDetails(data.data);
            } else {
                // todo handle errors
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            {trackingDetails.length && (
                <TrackingDetailsList data={trackingDetails} />
            )}
        </div>
    );
};

export default TrackingDetails;
