import fs from 'fs/promises';
import Image from 'next/image';
import path from 'path';
import React, { Fragment, useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import MainHeadercopy from "../main-header";
import c from './event-logistics.module.css';
import Product from '../products-list/Product';
import Head from 'next/head';

function ProductDetailPage(props) {
    const [infos, setinfos] = useState('ban');
    const [newclass, setNewclass] = useState(false);


    const [newclassthree, setNewclassthree,] = useState(true);
    const [newclasstow, setNewclasstow,] = useState(false);
    const [newclassfour, setNewclassfour,] = useState(false);

    const [fone, setFone] = useState(false);
    const [ftow, setFtow] = useState(true);
    const [fthree, setFthree] = useState(false);
    const [ffour, setFfour] = useState(false);


    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    function size2() {
        setFfour(false)

        setFone(false)

        setFtow(true)
        setFthree(false)
    }

    function size1() {

        setFone(true)
        setFfour(false)

        setFtow(false)
        setFthree(false)
    }
    function size3() {


        setFone(false)
        setFfour(false)

        setFtow(false)
        setFthree(true)
    }


    function size4() {

        setFtow(false)
        setFone(false)

        setFfour(true)
        setFthree(false)
    }

    function chose2() {
        setcolor(loadedProduct.image2)

        setNewclass(false)

        setNewclasstow(true)
        setNewclassthree(false)
    }



    function chose1() {
        setcolor(loadedProduct.image1)

        setNewclass(true)


        setNewclasstow(false)
        setNewclassthree(false)


    }



    function chose3() {

        setcolor(loadedProduct.image3)



        setNewclass(false)


        setNewclasstow(false)
        setNewclassthree(true)

    }




    let shoppingCart = [];
    const { loadedProduct } = props;
    const [color, setcolor] = useState('');

    if (!loadedProduct) {
        return <p>Loading...</p>
    }


    function addProductToCart(d) {
        let mainProduct = this.state.shirts.find(product => {
            return product.id === d
        })
        this.setState(prevState => {
            return {
                shoppingCart: [...prevState.shoppingCart, mainProduct]
            }
        })
        alert(shoppingCart.length)
    }
    return (
        <Fragment >


            <Head>
                <title>
                    {loadedProduct.title}
                </title>

            </Head>


            <MainHeadercopy />



            <div className={infos}>




                <div className='tem'>



                    <a onClick={() => setinfos('abi')
                    } className='tem-child'>
                        عکس پس زمینه بانوان

                    </a>

                    <a onClick={() => setinfos('ban')} className='tem-child-tow'>

                        عکس پس زمینه آقایان
                    </a>

                </div>

                <section className={c.sweets}>
                    <Image


                        width={500}
                        height={500}
                        alt="Picture of the author"
                        src={color ? color : loadedProduct.image3} className='imagebody' />








                    <div className={c.sweetschild}>


                        <div className={c.textfour}>



                            {loadedProduct.title}



                        </div>

                        <div className='infos'>


                            <h3 className='titr'>{loadedProduct.title}</h3>


                            <div className={c.text}>


                                <div className={c.textgheimat}>
                                    :قیمت
                                </div>

                                <div className='imagebenefit-parent'>


                                    <Image


                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                        src="/New folder/se1.png" className='imagebenefit' onMouseEnter={onMouseEnter}
                                        onMouseLeave={onMouseLeave} />

                                    <Image


                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                        src="/New folder/se3.png" className='imagebenefit' onMouseEnter={onMouseEnter}
                                        onMouseLeave={onMouseLeave} /><Image


                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                        src="/New folder/se2.png" className='imagebenefit upper' onMouseEnter={onMouseEnter}
                                        onMouseLeave={onMouseLeave} />
                                </div>





                                <div className={c.textprice}>
                                    {loadedProduct.price}
                                </div>


                                <p className={c.texttooman}>
                                    هزار تومان

                                </p>







                            </div>





                            <p className={c.textone} >



                                {loadedProduct.description}



                            </p>





                            <p className={c.texttow}>
                                جنس:


                                {loadedProduct.stay}</p>




                            <p className={c.texthree}>





                                تحویل  :



                                یک روزه





                            </p>
                            <p className="btn-text">
                                رنگ
                            </p>
                            <p className="btn-text belower">


                                سایز
                                <button className={ftow ? "first" : "first second"} onClick={size2} >
                                    32
                                </button>
                                <button className={fone ? "first" : "first second"} onClick={size1} >
                                    33
                                </button>

                                <button className={fthree ? "first" : "first second"} onClick={size3}>
                                    34
                                </button>
                                <button className={ffour ? "first" : "first second"} onClick={size4}>
                                    35
                                </button>

                            </p>
                        </div>

                        <div className='choose-color'>
                            <button className={loadedProduct.color2} onClick={chose3}></button>
                            <button className={loadedProduct.color} onClick={chose2}></button>



                        </div>


                    </div>


                    <div className="parent-orig-images">


                        <p className='p-others'>
                            مشتری گرامی سایر طرح ها و رنگ ها را با کلیک روی تصاویر زیر انتخاب کنید
                        </p>
                        <Image


                            width={500}
                            height={500}
                            alt="موجود نیست"
                            src={loadedProduct.image2} className={newclasstow ? "image-orig" : "parent-orig-images-black"} onClick={chose2} />
                        <Image


                            width={500}
                            height={500}
                            alt="موجود نیست"
                            src={loadedProduct.image1} className={newclass ? "image-orig" : "parent-orig-images-black"} onClick={chose1} />


                        <Image


                            width={500}
                            height={500}
                            alt="موجود نیست"
                            src={loadedProduct.image3} className={newclassthree ? "image-orig" : "parent-orig-images-black"} onClick={chose3} />
                    </div>


                </section>



            </div>
        </Fragment>
    );
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    return data;
}

export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.pid;

    const data = await getData();

    const product = data.shirts.find(product => product.id === productId);

    if (!product) {
        return { notFound: true };
    }

    return {
        props: {
            loadedProduct: product,
        }
    };
}

export async function getStaticPaths() {
    const data = await getData();

    const ids = data.shirts.map(product => product.id);

    const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

    return {
        paths: pathsWithParams,
        fallback: true
    }
}

export default ProductDetailPage;


