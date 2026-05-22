import Header from './Components/Header';
import Hero from './Components/Hero';
import Projects from './Components/Projects';

function App() {
  return (
      <div className="min-h-screen bg-white text-dark font-sans overflow-x-hidden">
        <Header />

        <main>
            <Hero />
            <Projects />
        </main>

      </div>
  );
}

export default App;