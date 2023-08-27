import React from "react";

interface CenterProps {
  children: React.ReactNode;
}

const Center = ({ children }: CenterProps) => {
  return <div className="max-w-[120rem] h-full mx-auto">{children}</div>;
};

export default Center;
