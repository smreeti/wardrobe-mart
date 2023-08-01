import React from 'react';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

import AppRoutes from './AppRoutes.jsx';

export default function Page() {
    return (
        <div>
            <Header />
            <AppRoutes />
            <Footer />
        </div>
    );
}
