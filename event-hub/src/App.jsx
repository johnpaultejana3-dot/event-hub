import './App.css'
import Header from './components/Header'

function App() {
  return (

    <div className="flex flex-col min-h-screen">

      <Header />

      <main className="flex-1">Main</main>

      <footer className="mt-120 border footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>

    </div>
  );
}

export default App