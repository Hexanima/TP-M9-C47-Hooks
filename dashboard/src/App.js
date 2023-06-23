import './assets/css/app.css';
import Layout from './layout';
import AppRoutes from './routes';
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <div id='wrapper'>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>

    </div>
  );
}

export default App;
