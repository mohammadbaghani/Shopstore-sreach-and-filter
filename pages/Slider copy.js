


import React, { useState } from 'react';

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from 'react-elastic-carousel'

let coursesData = [
  {
    english: " سال هال تجربه در تدریس زبان هم از ویژگی های به خصوص پردیسان هست.متد های به روز آموزشی و مستمراساتید هر زبان آموزی  رو راضی و خشنود میکنه ", price: "Speaking",
    farsi: 'پرنیا طاهریان',
    city: 'تهران',

    src: 'Newfolder/10.jpg'
  },

  {
    english: "به نظرم پردیسان برای همیشه به نیکی در ذهنم خواهد ماند قبل از اینکه به پردیسان بیام یاد گرفتن زبان برام یه معضل شده بود . اما با  تجربه اینجا عاشق زبان شدم!",
    city: 'کرج',
    farsi: 'زهرا باقری',


    src: 'Newfolder/12.jpg'
  },




  {

    english: 'بهترین آموزشگاهی که تا حالا تجربه کردم.اساتید واقعا عالی داشت!با کمک پردیسان تونستم مدرک تافل خودم رو بگیرم.به علاوه اینکه  با دوستان خوبی هم آشنا شدم',
    city: 'شیراز',
    farsi: 'سمانه پورخادم',

    src: 'Newfolder/5.jpg'

  },
  {

    english: "منو فقط اینجا تونست پایبند کنه سر کلاس بشینم.واقعا درجه یک هستن!منو فقط اینجا تونست پایبند کنه سر کلاس بشینم.واقعا درجه یک هستن!", price: "Speaking",
    city: 'همدان',
    farsi: "صدف  شیرازیان",

    src: 'Newfolder/14.jpg'
  },



]



function Slider() {


  const isServer = typeof window === 'undefined'
  const WOW = !isServer ? require('wowjs') : null






  const [show, setShow] = useState(0);

  const [score, setScore] = useState(0);
  const [second, setSecond] = useState(0);



  useEffect(() => {

    new WOW.WOW({
      live: true
    }).init();


  }, [show])




  function decresereState() {
    setShow(show + 1)
    if (
      show > 4
    ) {
      setShow(0)
    }

  }

  function reduceState() {
    setShow(show - 1)

    if (
      show < 0
    ) {
      setShow(0)
    }
  }

  function addsecond() {
    setSecond(second + 1)
  }

  return (

    < >
      <Head>
        <title>
          دلوسه
        </title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
      </Head>


      <Carousel onPrevEnd={(currentItem, pageIndex) =>

        reduceState()

      }



        onNextEnd={(currentItem, pageIndex) =>
          decresereState()
        }

        className='carusal' itemsToScroll={1} itemsToShow={1}>




        <div className='parent-header'>


          ارائه دهنده شیک ترین  و بهترین پوشاک  مد روز
          <br>
          </br>
          لطفا برای سفارش شیرینی بر روی دکمه زیر کلیک نمایید
          <div className='first-title wow bounceInDown'>
            قنادی دلوسه

          </div>




          <a href={`../products-list`} className='button'>

            سفارش شیرینی
          </a>

          <Image
            src={"/../images/conf21.png"}
            width={500}
            height={500}
            alt="Picture of the author"
            className='conf' />

          <Image
            src={"/../images/conf21.png"}
            width={500}
            height={500}
            alt="Picture of the author"
            className='conf' />



        </div>









        <div className='parent-header deliv'>


          رساندن خرید شما درب منزلتان
          <br>
          </br>
          فقط با یک تماس
          <div className='first-title wow slideInRight'>
            چه جوری سفارش کیک بدم؟

          </div>

          <Image
            src="/../images/del.avif"
            width={500}
            height={500}
            alt="Picture of the author"
            className='conf deliv-image-one' />



          <Image
            src="/../images/del.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className='conf deliv-image' />




        </div>
















        <div className='parent-header desert'>


          انوع دسرهای ایرانی وخارجی
          <br>
          </br>
          لطفا برای سفارش دسر بر روی دکمه زیر کلیک نمایید
          <div className='first-title key wow bounceInDown'>
            ... دسر می خوام      </div>

          <Image
            src="/../images/sh2.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            className='conf desert-image-one' />



          <Image
            src="/../images/f.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            className='conf  desert-image' />




        </div>


        <div className='parent-header desert'>


          بهترین مغازه جهت  خرید برای جشن های شادی شما
          <br>
          </br>
          برای اطلاعات بیشتر روی لینک زیر کلیک نمایید
          <div className='first-title key wow bounceInDown'>




            !  مفتخریم شریک شادی هایتان باشیم

          </div>

          <Image
            src="/../images/birth.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            className='conf happy-image' />



          <Image
            src="/../images/sh3.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            className='conf happy-image-one' />



        </div>






      </Carousel>

    </>

  );
}


export default Slider;