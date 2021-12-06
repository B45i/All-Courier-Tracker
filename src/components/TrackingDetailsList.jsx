const TrackingDetailsList = ({ data }) => {
    return (
        <div className="courier-items">
            <h2>Details</h2>
            <ul className="mt-1">
                {(data || []).map((detail, i) => (
                    <li className="courier-item" key={i}>
                        <div className="courier-detail-location">
                            {detail.location}
                        </div>

                        <div className="courier-item-info title-case">
                            {detail.detail.toLowerCase()}
                        </div>

                        <div>
                            <h5>Robu.in</h5>
                            <h3>Z63039258</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrackingDetailsList;
