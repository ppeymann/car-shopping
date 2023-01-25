import Link from "next/link";
import styled from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styled.header}>
        <Link href="/">
          <h2>Car Shopping</h2>
          <p>Choose And Buy Your Car</p>
        </Link>
      </header>
      <div className={styled.container}>{children}</div>
      <footer className={styled.footer}>
        &copy;This Site Made By{" "}
        <a href="https://peyman-malek.netlify.app">Peyman malek</a>
      </footer>
    </>
  );
};

export default Layout;
