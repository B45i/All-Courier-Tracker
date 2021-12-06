import { Route } from 'wouter';
import SearchBar from './components/SearchBar';
import History from './components/History';
import TrackingDetails from './components/TrackingDetails';

import './App.css';

function App() {
    return (
        <div>
            <SearchBar />
            <Route path="/" component={History} />
            <Route
                path="/track/:provider/:number"
                component={TrackingDetails}
            />
        </div>
    );
}

export default App;
