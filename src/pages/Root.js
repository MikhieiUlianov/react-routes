import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

export default function Root() {
  //needs to tell user that we are in process to render new page
  //to get current transition state between pages
  //const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* 
        {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}
