import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-white text-[#25282B] font-sans overflow-x-hidden">

                <Header />

                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>

                <Footer />

            </div>
        </Router>
    );
}

export default App;