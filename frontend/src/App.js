import Layout from './layout/Layout';
import LandingPage from './pages/LandingPage';
import './global.css';

function App() {
  return (
    <div className='app'>
      <Layout>
        <LandingPage />
      </Layout>
    </div>
  );
}

export default App;
