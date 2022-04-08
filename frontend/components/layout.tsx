import React from "react";
import Nav from "./nav";

interface Props {
  children: JSX.Element[];
  categories: any;
}

const Layout: React.FC<Props> = ({ children, categories }) => (
  <>
    <Nav categories={categories} />
    {children}
  </>
);

export default Layout;
