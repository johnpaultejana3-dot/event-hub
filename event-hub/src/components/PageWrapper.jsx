import React from "react";

const PageWrapper = ({ children }) => {
    return <div className="flex flex-col min-h-screen bg-black">{children}</div>;
};

export default PageWrapper;