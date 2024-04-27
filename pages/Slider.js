


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

function Slider(isActive, ont) {





  const isServer = typeof window === 'undefined'
  const WOW = !isServer ? require('wowjs') : null


  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);



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
          شیک پوشان
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




        <div className={isActive ? 'parent-header' : 'parent-header '}>




          <div className='first-title '>
            فروشگاه
            شیک پوشان

            <br>
            </br>
            فروش آنلاین و حضوری شیک ترین پوشاک مد روز

            <ul className='f-parent'>


              <li className='f-child'>

                لباس برای تمامی سنین موجود است
              </li>


              <li className='f-child'>

                تحویل آنی خرید درب منزل
              </li>

              <li className='f-child'>

                رنگ ها و طرح های متنوع
              </li>
            </ul>


          </div>

          <div className='dd '>

            مزیت های ما
            <ul className='li-parent'>


              <li className='li-child'>

                جستجوی سریع بین  لباس ها
              </li>


              <li className='li-child'>

                تحویل آنی خرید درب منزل
              </li>

              <li className='li-child'>

                رنگ ها و طرح های متنوع
              </li>
            </ul>







          </div>


          <a href={`../products-list`} className='button' >



          </a>





          <video autoPlay loop muted className='filteroneleft'>
              <source src="/../images/vv.mp4" />
            </video>


            <video autoPlay loop muted className='filterone'>
              <source src="/../images/vv.mp4" />
            </video>

            <video autoPlay loop muted className='filteroneright'>
              <source src="/../images/vv.mp4" />
            </video>

        </div>









        <div className={isActive ? 'parent-header' : 'parent-header '}>




          <div className='first-title '>
            !   همراهی شما افتخار ماست
            <br>
            </br>
            تضمین کیفیت و ماندگاری محصولات
            <ul className='f-parent'>


              <li className='f-child'>

                جستجوی راحت لباس مورد نظر
              </li>


              <li className='f-child'>

                تحویل آنی خرید درب منزل
              </li>

              <li className='f-child'>

                رنگ ها و طرح های متنوع
              </li>
            </ul>


          </div>

          <div className='dd '>

            شیک ترین و به روز ترین
            <ul className='li-parent'>





              <li className='li-child'>

                انواع پوشاک مردانه و زنانه
              </li>

              <li className='li-child'>

                جوان پسند و مد روز
              </li>            <li className='li-child'>

                تخفیفات ویژه
              </li>
            </ul>







          </div>






          {isHovering ? (
            <Image
              src={"/../images/g.jpg"}

              width={500}
              height={500}
              alt="Picture of the author"
              className='deliv-image-one filterone' onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave} />
          ) : (
            <Image
              src={"/../images/g.jpg"}
              width={500}
              height={500}
              alt="Picture of the author"
              className='deliv-image-one filterone' onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave} />

          )}

        </div>








        <div className={isActive ? 'parent-header' : 'parent-header '}>




          <div className='first-title'>

            !    در کنار شماییم

            <br>
            </br>
            چون برایمان مهم هستید

            <ul className='f-parent'>


              <li className='f-child'>

                لباس برای تمامی سنین موجود است
              </li>


              <li className='f-child'>

                تحویل آنی خرید درب منزل
              </li>

              <li className='f-child'>

                رنگ ها و طرح های متنوع
              </li>
            </ul>


          </div>

          <div className='dd '>

            شماره های تماس
            <ul className='li-parent'>


              <li className='li-child'>

                021-88882222
              </li>


              <li className='li-child'>

                021-88222222
              </li>

              <li className='li-child'>

                همین الان سفارش دهید
              </li>
            </ul>







          </div>








          {isHovering ? (
            <Image
              src={"/../images/n.png"}

              width={500}
              height={500}
              alt="Picture of the author"
              className='deliv-image-one filterone' onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave} />
          ) : (
            <Image
              src={"/../images/n.png"}
              width={500}
              height={500}
              alt="Picture of the author"
              className='deliv-image-one filterone' onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave} />

          )}

        </div>












      </Carousel>

    </>

  );
}


export default Slider;