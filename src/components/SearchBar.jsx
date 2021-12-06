import { useState } from 'react';
import { useLocation } from 'wouter';

const courierProviders = [
    'EKart',
    'ECom',
    'Delhivery',
    'XpressBees',
    'Bluedart',
    'DTDC',
    'Gati',
    'ShadowFax',
];

const SearchBar = () => {
    const [provider, setProvider] = useState('');
    const [trackingNumber, setTrackingNumber] = useState('');

    const setLocation = useLocation()[1];

    const handleSubmit = () => {
        setLocation(`/track/${provider}/${trackingNumber}`);
    };

    return (
        <div className="search">
            <h2>Track your courier</h2>
            <p>Enter tracking number and choose courier partner to search</p>

            <div className="search-bar">
                <select
                    name="provider"
                    value={provider}
                    onChange={e => setProvider(e.target.value)}
                >
                    <option value=""></option>

                    {courierProviders.map(p => (
                        <option value={p} key={p}>
                            {p}
                        </option>
                    ))}
                </select>

                <input
                    name="trackingNumber"
                    value={trackingNumber}
                    type="text"
                    placeholder="Tracking number"
                    onChange={e => setTrackingNumber(e.target.value)}
                />
                <button
                    onClick={handleSubmit}
                    disabled={!(trackingNumber && provider)}
                >
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
