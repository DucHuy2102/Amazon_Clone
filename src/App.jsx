import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, Navbar, SearchResult, Checkout, ProductPage } from './components';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/search' element={<SearchResult />} />
                <Route exact path='/checkout' element={<Checkout />} />
                <Route exact path='/product/:id' element={<ProductPage />} />
            </Routes>
        </Router>
    );
}

export default App;
