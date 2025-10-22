import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            Main Layout
            <Outlet />
        </div>
    );
};

export default MainLayout;