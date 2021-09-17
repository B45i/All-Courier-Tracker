import './App.css';

function App() {
    return (
        <div>
            <div className="search">
                <h2>Track your courer</h2>
                <p>
                    Enter tracking number and choose courier partner to search
                </p>
                <div className="search-bar">
                    <select name="" id="">
                        <option value="dtdc">DTDC</option>
                        <option value="dtdc">BlueDart</option>
                    </select>
                    <input type="text" placeholder="Enter tracking number" />
                    <button>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>

            <div className="courier-items">
                <h2>Your couriers</h2>
                <ul className="mt-1">
                    <li className="courier-item">
                        <div className="courier-image-bg">
                            <img
                                className="courier-image"
                                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112013/dtdc_new.png?itok=l23QC8fg"
                                alt=""
                            />
                        </div>

                        <div className="courier-item-info">
                            <h5>Robu.in</h5>
                            <h3>Z63039258</h3>
                        </div>

                        <div className="courier-item-status">
                            <span>Deliverd</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;
