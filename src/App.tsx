// import { HomePage } from './pages/HomePage';

import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublickRoutes from './routes/PublickRoutes';

function App() {
    return (
        <>
            <BrowserRouter>
                <PublickRoutes />
                <PrivateRoute />
            </BrowserRouter>
        </>
    );
}
export default App;
