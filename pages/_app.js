import '../styles/globals.css'
import React, { useEffect, useState } from "react"; import MainHeader from "./main-header";
import MainFooter from "./main-footer";

import Main from "./Main";
function MyApp({ Component, pageProps }) {

  return (
    <main className="parent-body">





      <Component {...pageProps} />

     

    </main>);
}

export default MyApp
