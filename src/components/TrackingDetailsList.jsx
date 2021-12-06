import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const TrackingDetailsList = ({ data }) => {
    return (
        <div className="courier-items">
            <h2>Details</h2>
            <ul className="mt-1">
                {(data || []).map((detail, i) => (
                    <li className="courier-item" key={i}>
                        <div className="courier-detail-location">
                            <i className="fas fa-map-marker-alt mr-1"></i>
                            {detail.location}
                        </div>

                        <div className="courier-item-info title-case">
                            {detail.detail.toLowerCase()}
                        </div>

                        <div className="text-end">
                            <h4>
                                {dayjs(detail.date).format(
                                    'ddd, D, MMM YYYY h:mm A'
                                )}
                            </h4>
                            <h5> {dayjs(detail.date).fromNow()}</h5>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrackingDetailsList;
