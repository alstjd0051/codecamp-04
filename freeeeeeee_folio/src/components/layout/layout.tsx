import { useRouter } from "next/dist/client/router";
import React, { ReactNode, useState } from "react";
import Nav from "../commons/navigation/Nav.container";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  return (
    <>
      <Nav />
      <div>{props.children} </div>
    </>
  );
}
