


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






  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);



  const [show, setShow] = useState(0);

  const [score, setScore] = useState('first-title-x');
  const [second, setSecond] = useState(0);
  const [li, setli] = useState('li-parentx');
  const [dd, setDd] = useState('xx');

  const [filteroneright, setfilteroneright] = useState('filteroneright');

  const [scoresecond, setScoresecond] = useState('first-title-x');

  const [lisecond, setlisecond] = useState('li-parentx');
  const [ddsecond, setDdsecond] = useState('xx');



  const [button, setButton] = useState('button');
  const [filteronesecond, setFilteronesecond] = useState('filteronex');

  const [filterone, setFilterone] = useState('filteronex');



  useEffect(() => {

    if (show === 0) {
      godownsecond(),
      setTimeout(setmybutton, 100),
      setTimeout(goup, 100);
    }
    if (show === 1) {
      godown(),
      setmysecondbutton(),
      setTimeout(goupsecond, 100)
    }


    if (show === 2) {
   
      godownsecond(),
      godown(),
      setmysecondbutton()
    }


    else (
      godown(),
      godownsecond(),
   
      setmysecondbutton()
      
    )
    function godown() {
      setli('li-parentx'),
        setDd('xx'),
        setFilterone('filteronex'),
        setScore('first-title-x')

    }
    function setmysecondbutton(){
      setButton('button')
    }
    function setmybutton(){
      setButton('button buttondown')
    }
    function godownsecond() {
      setlisecond('li-parentx'),

        setFilteronesecond('filteronex'),
        setScoresecond('first-title-x'),
        setDdsecond('xx')
    }
  
    function goup() {
      setli('ligoup li-parentx'),
        setFilterone('filteronex deliv-image-one')
      setScore('first-title-x newclass')
      setDd('xx goup')
    }
    function goupsecond() {
      setlisecond('ligoup li-parentx'),
        setFilteronesecond('filteronex deliv-image-one')
      setScoresecond('first-title-x newclass')
      setDdsecond('xx goup')
    }
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

    <>
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




          <div className={score}>

          فروشگاه
            شیک پوشان

            <br>
            </br>
       
            <ul className='f-parentx'>


              <li className='f-childx'>
              فروش آنلاین          
شیک ترین پوشاک مد روز  

              </li>



        
            </ul>


          </div>

          <div className={dd}>

            <ul className={li}>





              <li className='li-childx'>

                انواع پوشاک مردانه و زنانه
              </li>

              <li className='li-childx'>

                جوان پسند و مد روز
              </li>            <li className='li-childx'>

                تخفیفات ویژه
              </li>
            </ul>







            <a href={`../products-list`} className={button}   onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>



</a>

          </div>






          {isHovering ? (
            <Image
            src={"/../images/t-shirt22.png"}

              width={500}
              height={500}
              alt="Picture of the author"
              className='deliv-image-one filteronex' onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave} />
          ) : (
            <Image
              src={"/../images/t-shirt3.png"}
              width={500}
              height={500}
              alt="Picture of the author"
              className={filterone} onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave} />

          )}

        </div>


        <div className={isActive ? 'parent-header h-one' : 'parent-header h-one '}>




          <div className={scoresecond}>


          
       در کنار شماییم

            <ul className='f-parentx'>



              <li className='f-childx'>

                لباس برای تمامی سنین موجود است
              </li>


              <li className='f-childx'>

                تحویل آنی خرید درب منزل
              </li>

              <li className='f-childx'>

                رنگ ها و طرح های متنوع
              </li>
            </ul>


          </div>

          <div className={ddsecond}>

            <ul className={lisecond}>



              <li className='li-childx'>

                021-88882222
              </li>


              <li className='li-childx'>

                021-88222222
              </li>

              <li className='li-childx'>

                همین الان سفارش دهید
              </li>


            </ul>







          </div>






          {isHovering ? (
            <Image
              src={"/../images/xxxx.png"}

              width={500}
              height={500}
              alt="Picture of the author"
              className='deliv-image-one filteronex' onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave} />
          ) : (
            <Image
              src={"/../images/xx.png"}
              width={500}
              height={500}
              alt="Picture of the author"
              className={filteronesecond} onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave} />

          )}

        </div>





        <div className={isActive ? 'parent-header-black' : 'parent-header-black '}>




          <div className='first-title '>
          تحویل آنی خرید درب منزل

            <br>
            </br>
       
رنگ ها و طرح های متنوع


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





          <video autoPlay loop muted className='filteroneleft'>
            <source src="/../images/tt.mp4" />
          </video>


          <video autoPlay loop muted className='filterone'>
            <source src="/../images/tt.mp4" />
          </video>

          <video autoPlay loop muted className={filteroneright}>
            <source src="/../images/tt.mp4" />
          </video>

        </div>












      </Carousel>

    </>

  );
}


export default Slider;