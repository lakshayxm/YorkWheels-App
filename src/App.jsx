

import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import Sidebar from './Components/Sidebar';
import Routes from './routes/routes';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        {/* <Sidebar /> */}
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <Routes />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;

