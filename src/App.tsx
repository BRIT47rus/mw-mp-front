// import { HomePage } from './pages/HomePage';

import { Suspense } from 'react';
import PublickRoutes from './routes/PublickRoutes';
import Header from './features/Header';

function App() {
    return (
        <>
            <Header />
            <Suspense fallback={'Loading ... '}>
                <PublickRoutes />
            </Suspense>
            {/* <PrivateRoute /> */}
        </>
    );
}
export default App;
