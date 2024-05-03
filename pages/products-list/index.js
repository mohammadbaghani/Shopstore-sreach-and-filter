
import path from 'path';
import fs from 'fs/promises';
import classes from '../../styles/event-item.module.css';

import Head from 'next/head';
import styles from '../../styles/Home.module.css'
import Image from 'next/image';
import MainHeadercopy from "../main-header";
import React, { useEffect, useState } from "react";

import db from "../../data/dummy-backend";


import { AiFillEye } from "react-icons/ai";
function Home(props) {


  const [backgroundImage, setBackgrounImage] = useState("../images/s.jpg");
  let colorsArray = ['/../images/ab 1 (1).jpg', '/../images/recipe.png', '/../images/birth.jpg', '/../images/birth.jpg', '/../images/birth.jpg', '/../images/birth.jpg']


  setInterval(function () {
    setBackgrounImage(colorsArray[Math.floor(Math.random() * colorsArray.length)])

  }, 3000)

  const { products } = props;
  const [color, setcolor] = useState("");
  const [search, setSearch] = useState("");
  const [homes, setHomes] = useState([...db.shirts]);

  const [courseCover, setCourseCover] = useState({});

  const [newclass, setNewclass] = useState(false);

  const [flag, setFlag] = useState(true);
  const [newclassthree, setNewclassthree,] = useState(false);
  const [newclasstow, setNewclasstow,] = useState(false);


  const [filtercontainer, setfiltercontainer,] = useState('filter-container');
  const [newclassfive, setNewclassfive,] = useState(true);
  const [newclassfour, setNewclassfour,] = useState(false);

  const isServer = typeof window === 'undefined'
  const WOW = !isServer ? require('wowjs') : null


  useEffect(() => {
    new WOW.WOW({
      live: true
    }).init();
    const seareched = db.shirts.filter((home) => home.title.startsWith(search));
    setHomes(seareched);
  }, [search]);



  const [sweets, setSweets] = useState([]);


  function addProductToCart(d) {

    let mainProduct = db.shirts.find(t => {
      return t.price === d
    })
    setSweets(sweets.concat({ mainProduct })
    )


  }

  function price() {

    const price = db.shirts.sort((b, a) => a.price - b.price);

    setfiltercontainer('ex')

    setHomes(price);

    setNewclass(false)

    setNewclasstow(false)
    setNewclassthree(false)



    setNewclassfour(true)
    setNewclassfive(false)

  }

  function deserts() {
    setNewclass(true)
    setfiltercontainer('g')

    setNewclasstow(false)
    setNewclassthree(false)
    setNewclassfour(false)
    setNewclassfive(false)
    const newst = db.shirts.filter(a => a.kind === "desert");

    setHomes(newst)


  }

  function newst() {
    setNewclass(false)

    setNewclasstow(true)
    setNewclassthree(false)


    setfiltercontainer('gg')
    setNewclassfour(false)
    setNewclassfive(false)




    const sweet = db.shirts.filter(a => a.men === "yes");

    setHomes(sweet)


  }


  function name() {


    setNewclass(false)

    setNewclasstow(false)




    setNewclassfour(false)
    setNewclassfive(false)
    setNewclassthree(true)

    const name = db.shirts.filter(a => a.men === "no");



    setfiltercontainer('v')
    setHomes(name);



  }



  function all() {

    setNewclass(false)

    setNewclasstow(false)


    setfiltercontainer('filter-container')

    setNewclassfour(false)
    setNewclassfive(true)
    setNewclassthree(false)


    setHomes([...db.shirts])


  }

  function showcolor() {

    setcolor(event.target.dataset.color)
  }








  const [isHovering, setIsHovered] = useState(false);

  const onMouseLeave = () => setIsHovered(false);




  function onMouseEnter() {

    setIsHovered(true);
  }




  function flagfalse() {
    if (flag === true) { setFlag(false); }
    else (setFlag(true))

  }








  return (

    <div className="containerwhite" >




      <MainHeadercopy />







      <Head>
        <title>
          لیست محصولات
        </title>

      </Head>
      <button className={flag ? "filter-title down hiddendown" : "  filter-title down"} onClick={() => flagfalse()}>



        مشاهده لباس ها

      </button>
      <div className={filtercontainer}>





        <div className={flag ? 'valed-filters' : 'hided'}>
          <div className="search">



            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجوی سریع ...">


            </input>
            <Image width={500} src="/s.png"
              height={500}
              alt="Picture of the author"
              className='search-icon' />

          </div>

          <div className={newclassfour ? "colored filtering bef price-filter" : "filtering bef price-filter"} onClick={() => price()}>
            <a  >
              از گران ترین


            </a>
          </div>


          <div className={newclass ? "colored filtering bef" : "filtering bef"} onClick={() => deserts()} >
            <a >
              کفش

            </a>
          </div>


          <div className={newclassthree ? "colored filtering bef" : "filtering bef"} onClick={() => name()}>
            <a  >
              زنانه

            </a>
          </div>

          <div className={newclasstow ? "colored filtering bef" : "filtering bef"} onClick={() => newst()}>
            <a >

              مردانه
            </a>
          </div>

          <div className={newclassfive ? "colored filtering bef" : "filtering bef "} onClick={() => all()} >
            <a >

              همه

            </a>
          </div>
        </div>
        <p className='filter-title down-tow '>
          شما می توانید

          با کلیک روی گزینه های


          زیر , پوشاک  مد نظران را را پیدا کنید

        </p>



      </div>



      <ul className={flag ? "list  wow slideInRight" : "list-up"}>














        {homes.map((p, index) => (

          <div key={index} className='parentlies'>



            <div>


              <a className={classes.item} onClick={() => addProductToCart()} href={`/products/${p.id}`} >

                <div className={classes.content} >










                  <div className={classes.date}>




                    <Image

                      width={500} src={p.image}
                      height={500}
                      alt="Picture of the author"
                      className='image-hover' onMouseEnter={(event) => onMouseEnter(event)} />










                  </div>


                </div>
                <div className="price-text-text">
                  <p>
                    {p.title}
                  </p>
                </div>
                <h data-color={p.color} onClick={showcolor} className={classes.pricetext}>
                  {p.price}

                  هزار تومان




                </h>

                <h3 className={db.shirts[index].color3} >{p.percent}%</h3>


                <a href={`/products/${p.id}`}>
                  <span className={classes.details}>


                    <AiFillEye className={classes.eye} />


                    جزئیات محصول
                  </span></a>
              </a>




            </div>



          </div>





        ))}
      </ul>





      <ul className={newclassfive ? "below below-up" : "below below-up hide"}>


        All Clothes




      </ul>


      <ul className={newclasstow ? "below below-up" : "below below-up hide"}>

        Men Clothes


      </ul>

      <ul className={newclassthree ? "below below-up" : "below below-up hide"}>
        Women
        Clothes





      </ul>


      <ul className={newclassfour ? "below below-up" : "below below-up hide"}>
        Expensives



      </ul>      <ul className={newclass ? "below below-up" : "below below-up hide"}>


        All Shoes


      </ul>

    </div >
  )
}

export async function getStaticProps() {

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');

  const jsonData = await fs.readFile(filePath);

  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: '/no-data'
      }
    }
  }

  if (data.shirts.length === 0) {
    return { notFound: true }
  }

  return {
    props: {
      products: data.shirts,
    },
    revalidate: 10,
  };
}

export default Home;