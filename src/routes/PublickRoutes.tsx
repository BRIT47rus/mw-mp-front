import React, { lazy } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { checkPathMatch, paths } from './helpers';

const HomePage = lazy(() => import('../pages/HomePage'));
const ProductDetailsPage = lazy(() => import('../pages/ProductDetaisPage'));
const PublickRoutes: React.FC = () => {
    const location = useLocation();
    const isMatch = checkPathMatch(location.pathname, paths);

    return (
        <Routes>
            <Route path={paths.home} element={<HomePage />} />
            <Route
                path={paths.productDetail}
                element={<ProductDetailsPage />}
            />
            <Route
                path="*"
                element={!isMatch ? <Navigate to={paths.home} /> : null}
            />
        </Routes>
    );
};

export default PublickRoutes;
