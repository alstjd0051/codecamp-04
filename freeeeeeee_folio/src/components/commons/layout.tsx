import { useRouter } from "next/dist/client/router";
import React, { ReactNode, useState } from "react";
import Nav from "./navigation/Nav.container";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div>{props.children} </div>
      <Nav />
    </>
  );
}
