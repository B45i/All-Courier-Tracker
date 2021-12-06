import { useState, useEffect } from 'react';
import TrackingDetailsList from './TrackingDetailsList';
import loadingAnimation from './loading.svg';

const TrackingDetails = ({ params }) => {
    const [trackingDetails, setTrackingDetails] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const provider = (params.provider || '').toLowerCase();
        const number = (params.number || '').toLowerCase();

        try {
            setLoading(true);
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
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <img src={loadingAnimation} alt="logo" />;
    }

    return (
        <div>
            {trackingDetails.length && (
                <TrackingDetailsList data={trackingDetails} />
            )}
        </div>
    );
};

export default TrackingDetails;
