import styles from '../styles/Home.module.css'
import Link from 'next/link';
import React, { useState } from "react";
import { useEffect } from 'react';
import MainHeader from "./main-header";

import Image from 'next/image';
import Head from 'next/head';
import Slider from "./Slider";
import classes from './main-header.module.css';
import Carousel from 'react-elastic-carousel'
import Mui from './mui';

import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function Home() {
  const [isActive, setIsActive] = useState(true);
  const isServer = typeof window === 'undefined'
  const WOW = !isServer ? require('wowjs') : null

  const [checked, setChecked] = React.useState(true);
  function addcolor(event) {



    if (isActive === false) {
      setIsActive(true)
      localStorage.setItem('theme', 'dark')
      setChecked(event.target.checked);
    }

    else {
      setIsActive(false)
      localStorage.setItem('theme', 'white')
      setChecked(event.target.checked);
    }
  }

  useEffect(() => {




    let localStorageTheme = localStorage.getItem('theme')
    if (localStorageTheme === 'dark') {

      setIsActive(true)

    }
    else {
      setIsActive(false)
    }

  }, [isActive])

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {


      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },

    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },







  }


  ));



  return (
    <>



      <div className={isActive ? styles.container : styles.darkcontainer}>
        <div className={isActive ? 'light-mode' : 'dark-mode'}>
          <Slider />
        </div>

        <Head>
          <title>
            شیک پوشان
          </title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
        </Head>



        <header>

          <div className={isActive ? 'parent-nav' : 'parent-nav darker'}>
            <div className='child-nav'>


              <div >

                <Link href={`../firstpage`} className={isActive ? 'ghandi' : 'ghandi blured'}>

                  شیک پوشان

                </Link>
              </div>

              <div >
                <Link href={`../firstpage`} className='left'>



                </Link>



              </div>




              <Link href={`../Callus`} className={isActive ? 'link-top  darker-w ' : 'link-top  darker-w '}>

                تماس با ما
              </Link>

              <Link href={`../About`} className={isActive ? 'link-top   darker-w' : 'link-top  darker-w '}>

                آشنایی با ما
              </Link>

              <Link href={`../products-list`} className={isActive ? 'link-top darker-w' : 'link-top  darker-w '}>

                خرید
                آنلاین
              </Link>


              <Link href={`../firstpage`} className={isActive ? 'link-top   darker-w ' : 'link-top  darker-w '}>
                خانه
              </Link>
            </div>

          </div>


        </header>


        <div onClick={(event) => addcolor(event)} className={isActive ? 'bezan' : 'bezan tire'} >

        </div>



        <div className='valed-switch-parent'>




          <div className='switch-parent'>








            <Switch className={isActive ? 'switch-child' : 'switch-child'} onChange={(event) => addcolor(event)}
              checked={checked}

              inputProps={{ 'aria-label': 'controlled' }}
            />

          </div>

        </div>




        <div className='parent-header hidden'>


          ارائه دهنده شیک ترین  و بهترین پوشاک  مد روز
          <br>
          </br>
          <div >
            شیک پوشان

          </div>




          <Image
            src={"/../images/n.jpg "}
            width={500}
            height={500}
            alt="Picture of the author"
            className='conf' />




        </div>









        <div className=   {isActive ?'title-cards' : 'title-cards title-cards-dark'} >

          <div className={isActive ? 'women-flipcard' : 'women-flipcard'} >


            <p className={isActive ? 'women-title' : 'women-title white-title'}>


              پوشاک  بانوان

            </p>




            <div className={isActive ? 'flip-card women-flip' : 'flip-card women-flip new-border'} >


              <div className="flip-card-inner">
                <div className="flip-card-front">

                  <Image
                    src="/../images/mv1.avif"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className={isActive ? 'front-image ' : 'front-image light'} >



                  </Image>
                </div>
                <div className="flip-card-back">

                  <Image
                    src="/../images/mv1.avif"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className={isActive ? 'front-image ' : 'front-image light'} >
                  </Image>

                </div>

              </div>

            </div>


            <p className={isActive ? 'women-description' : 'women-description men-dark'} >


              انوع کیف  و کفش و  شلوار و البسه بانوان #  <br>
              </br>! رنگ ها  و طرح های مختلف


            </p>





            <p className={isActive ? 'women-description-right' : 'women-description-right women-des-right'} >



              پوشاک بانوان
              #
              <br>
              </br>
              شیک ترین و به روزترین








            </p>



          </div>







          <div className={isActive ? 'men-flipcard' : 'men-flipcard'} >


            <p className={isActive ? 'men-title' : 'men-title white-title'} >


              پوشاک  آقایان

            </p>




            <div className={isActive ? 'flip-card men-flip' : 'flip-card men-flip new-border'} >

              <div className="flip-card-inner">
                <div className="flip-card-front">

                  <Image
                    src="/../images/11.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className={isActive ? 'front-image  men-im ' : 'front-image light'} >



                  </Image>
                </div>
                <div className="flip-card-back">

                  <Image
                    src="/../images/mv1.avif"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className={isActive ? 'front-image ' : 'front-image light'} >
                  </Image>

                </div>

              </div>

            </div>


            <p className={isActive ? 'men-description' : 'men-description men-dark'} >
              انوع کیف  و کفش و  شلوار و البسه آقایان #  <br>
              </br> !  با قیمت های باورنکردنی


            </p>





            <p className={isActive ? 'men-description-right' : 'men-description-right men-des-right'} >



              پوشاک آقایان #

              <br>
              </br>
              شیک ترین و به روزترین









            </p>



          </div>




        </div>
















        <div className={isActive ? 'parent-recipes' : 'parent-recipes black-res '} >

          <p className={isActive ? 'magazine' : 'magazine magazine-whitecolor'}  >
            مجله  شیک پوشان
          </p>



          <div
            className={isActive ? 'right-recipe' : 'right-recipe left-black-rec'} >


            <a href={`../First-article`} className={isActive ? 'right-link ' : 'right-link black-border'}>
              <span >
                توضیحات بیشتر
              </span>


            </a>




            <p className={isActive ? 'right-sub-text ' : 'right-sub-text whitecoloredt'}>

              در ادامه پرفروش کاپشن‌‌های مردانه را نام می‌بریم
              کاپشن مردانه پفی یا بادی
              درون این کاپشن‌ها، معمولاً از یک لایه پشم شیشه پر می‌شود، به همین دلیل حالت پفی مانند دارند </p>

            <Image
              src="/../images/n.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
              className={isActive ? 'right-image' : 'right-image light'}
            ></Image>





            <p className={isActive ? 'right-text' : 'right-text whitecoloredt'}>

              مدل های جدید 2024 کاپشن مردانه</p>
          </div>
          <div className={isActive ? 'left-recipe' : 'left-recipe left-black-rec'}

          >


            <a href={`../Second-article`} className={isActive ? 'right-link ' : 'right-link black-border '}>
              <span >
                توضیحات بیشتر
              </span>


            </a>




            <p className={isActive ? 'right-sub-text ' : 'right-sub-text whitecoloredt'} >
              در این زمستان، کلاه مورد علاقه ی سلبریتی ها و ستاره های مشهور، کلاه بافتنی است  به چه دلایلی ؟  کلاه های بافت نه تنها شما را گرم نگه می دارند، بلکه تیپ شما را نیز کامل می کنند
            </p>

            <Image
              src="/../images/m.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
              className={isActive ? 'right-image' : 'right-image light'}></Image>



            <p className={isActive ? 'right-text ' : 'right-text whitecoloredt'}>

              راه شیک پوشیدن کلاه بافتنی   </p>
          </div>





        </div>

        <footer className={isActive ? classes.footer : classes.footerblack}>

          <div className='parent-footer'>


            <div className='child-nav ff'>    <ul className={isActive ? 'ul-footer b' : 'ul-footer b ul-dark'}>


              <li href={`root`} className={isActive ? 'li-footer no-border' : 'lifooterblack no-border-black'}>
                دسترسی سریع
              </li>

              <a href={`./products-list`} className={isActive ? 'li-footer' : 'lifooterblack'}>
                خرید
                آنلاین
              </a>

              <a href={`./Callus`} className={isActive ? 'li-footer' : 'lifooterblack'}>

                تماس با ما
              </a>
              <a href={`./About`} className={isActive ? 'li-footer' : 'lifooterblack'}>

                درباره ما
              </a>





            </ul>
              <ul className={isActive ? 'ul-footer' : 'ul-footer ul-dark'}>



                <li href={`Products-list`} className={isActive ? 'li-footer no-border' : 'lifooterblack no-border-black'}>

                  مزیت های ما
                </li>

                <li href={`Products-list`} className={isActive ? 'li-footer' : 'lifooterblack'}>

                  پاسخگویی تلفنی     </li>






                <li href={`Products-list`} className={isActive ? 'li-footer' : 'lifooterblack '}>

                  تنوع رنگ و طرح
                </li>

                <li href={`root`} className={isActive ? 'li-footer' : 'lifooterblack'}>

                  ارسال سریع
                </li>

              </ul>


            </div>

          </div>

          <p className={isActive ? 'p-footer  black-p' : 'p-footer'}>
         شیک پوشان تحولی در صنعت پوشاک کشور
          </p>



        </footer>


      </div >
    </>

  )
}



export default Home;