import Header from './Components/Header';
import Hero from './Components/Hero';

function App() {
  return (
      <div className="min-h-screen bg-white text-dark font-sans overflow-x-hidden">
        <Header />

        <main>
            <Hero />

        </main>

      </div>
  );
}

export default App;