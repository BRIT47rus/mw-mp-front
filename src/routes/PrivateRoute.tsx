import React, { lazy } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { checkPathMatch, paths } from './helpers';
const AccountSettings = lazy(() => import('../pages/AcountSettingsPage'));

const PrivateRoute = () => {
    const location = useLocation();
    const isMatch = checkPathMatch(location.pathname, paths);

    return (
        <Routes>
            <Route path={paths.accountSettings} element={<AccountSettings />} />
            <Route
                path="*"
                element={!isMatch ? <Navigate to={paths.home} /> : null}
            />
        </Routes>
    );
};

export default PrivateRoute;
