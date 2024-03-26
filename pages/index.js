import styles from '../styles/Home.module.css'
import MainHeader from "./main-header";
import MainFooter from "./main-footer";
import Firstpage from "./firstpage";
import Main from "./Main";
import React from "react";
import dynamic from "next/dynamic";
import Head from 'next/head'
import NoSSR from 'react-no-ssr';
import Image from 'next/image'

function Home() {

  const isServer = typeof window === 'undefined'
  const WOW = !isServer ? require('wowjs') : null




  return (

    <div>


      <Head>
      <title>
     Shikpooshan
        </title>
       
      </Head>

  <MainHeader />
  
  
  
   <NoSSR />
      <Firstpage/>

    </div >
  )
}



export default Home;