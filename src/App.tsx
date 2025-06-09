// import { HomePage } from './pages/HomePage';

import { Suspense } from 'react';
import PublickRoutes from './routes/PublickRoutes';
import Header from './features/Header';
import { AppStyles, Footer } from './App.styled';

function App() {
    return (
        <>
            <AppStyles />
            <Header />
            <Suspense fallback={'Loading ... '}>
                <PublickRoutes />
            </Suspense>
            {/* <PrivateRoute /> */}
            <Footer>
                <div>©Маркетплейс MW</div>
            </Footer>
        </>
    );
}
export default App;
