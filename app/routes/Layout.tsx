import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "~/components/organism/Header";
import Footer from "~/components/organism/Footer";

const Layout: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="flex flex-col min-h-screen">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="flex-1 bg-black">
        <Outlet context={{ searchTerm }} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
