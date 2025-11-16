import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <header>Layout</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
