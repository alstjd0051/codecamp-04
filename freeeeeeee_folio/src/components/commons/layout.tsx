import { useRouter } from "next/dist/client/router";
import { ReactNode } from "react";
import Banner from "./banner/Banner.container";
import Header from "./header/Header.container";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  return (
    <>
      <Header />
      <Banner />
      <div>{props.children} </div>
    </>
  );
}
