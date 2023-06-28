'use client';
import React from "react";
import { Accordion } from 'flowbite-react';

const BannerBottom = (props:any) => {
  return (
      <div>
         <Accordion className="accordian">
        { 
        props.value.map((accord:any)=> (
          <Accordion.Panel key={accord._id}>
          <Accordion.Title>
           {accord?.accordianTitle}
          </Accordion.Title>
          <Accordion.Content>
            <div className="mb-2 text-gray-500 dark:text-gray-400  text-left">
              <p> {accord?.accordianAddress}</p>
            </div>
            <div className="text-gray-500 dark:text-gray-400  text-left">
              <p className="mt-3"><strong>Mon - Fri:</strong> {accord?.accordianTime} </p>
              <p className="mt-3"><strong>Sat & Sun:</strong>  {accord?.accordianTime2}</p>
              <p className="text-left font-semibold mt-3">{accord?.accordianText}</p>
              <p className="text-left mt-3">{accord?.accordianMobile}</p>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        ))
        }
        </Accordion>
      </div>
  );
};
export default BannerBottom;
