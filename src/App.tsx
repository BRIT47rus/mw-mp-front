// import { HomePage } from './pages/HomePage';

import PrivateRoute from './routes/PrivateRoute';
import PublickRoutes from './routes/PublickRoutes';

function App() {
    return (
        <>
            <PublickRoutes />
            {/* <PrivateRoute /> */}
        </>
    );
}
export default App;
