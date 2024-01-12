import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, Navbar } from './components';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
