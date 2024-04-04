
import Image from 'next/image';
import React from 'react';
import classes from '../../styles/event-item.module.css';

import { useEffect, useState } from "react";

import db from "../../data/dummy-backend";







import { AiFillEye } from "react-icons/ai";

function Product(props) {

  return (
    <>


      <li>
        {props.price}
      </li>

      <li className={classes.item} wow slideInRight>

        <div className={classes.content} >



        </div>

        <div className="price-text-text" >
          <p>
            {props.title}
          </p>
        </div>
        <h data-color={props.color} className={classes.pricetext}>
          {props.price}
          هزار تومان



        </h>

        <h3>{props.percent}%</h3>


        <a href={`/products/${props.id}`}>
          <span className={classes.details}>


            <AiFillEye className={classes.eye} />


            جزئیات محصول
          </span></a>


      </li>

















    </>




  );
}

export default Product;