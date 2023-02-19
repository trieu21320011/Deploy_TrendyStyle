import React, { Component } from "react";
import Rte from "./Rte";
import PageTitle from "../../../layouts/PageTitle";
import { useRef } from "react";
import { setValue } from "@syncfusion/ej2-base";

const Summernote = ({setDescription}) =>{
   const editor = useRef(null);
   return (
      <div className="h-24">
         <div className="row">
            <div className="col-xl-12 col-xxl-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Your Description here</h4>
                  </div>
                  <div className="card-body">
                     <div className="summernote" >
                        <Rte setDescription={setDescription} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}; 

export default Summernote;
