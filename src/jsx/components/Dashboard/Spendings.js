import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import SpendingDataTable from "./SpendingDataTable";
import PageTitle from "../../layouts/PageTitle";
import { storage } from "../../../Firebase";
import axios from "axios";
import { ref, uploadBytes, getDownloadURL, get } from "firebase/storage"
import { Button } from 'react-bootstrap'
import Swal from "sweetalert2";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";




function Spendings(props) {
   let history = useHistory()
   const FormData = require("form-data");

   const productId = props.location.search.split("=")[1];
   const [product, setProduct] = useState({})
   const [models, setModels] = useState([])
   const [imageURl, setImageURL] = useState("")
   const [productFile, setProductFile] = useState(null)
   const [modelFile, setModelFile] = useState(null)
   const [pName, setPName] = useState(null);
   const [modalRepsone, setModalRespone] = useState([])
   useEffect(() => {

      var getModelsAPI = {
         method: 'get',
         url: `http://13.214.133.1/api/v1/models`,
         headers: {
            'Content-Type': 'application/json'
         },
      };

      var getProductAPI = {
         method: 'get',
         url: `http://13.214.133.1/api/v1/products/idTmp?idTmp=${productId}`,
         headers: {
            'Content-Type': 'application/json'
         },
      };
      axios(getProductAPI)
         .then(function (response) {
            console.log(response.data);
            setProduct(response.data)
            setPName(response.data.name)
            setImageURL(response.data.images[0].imageUrl)
            const url = response.data.images[0].imageUrl;
            const fileName = `${response.data.name}.jpg`;
            fetch(url)
               .then(async response => {
                  const contentType = response.headers.get('content-type')
                  const blob = await response.blob()
                  const file = new File([blob], fileName, { contentType })
                  setProductFile(file)
               })
         })
         .catch(function (error) {
            console.log(error);
         });
      axios(getModelsAPI)
         .then(function (response) {
            setModels(response.data)
         })
         .catch(function (error) {
            console.log(error);
         });

   }, [])
   const [modelInfo, setModelInfo] = useState([]);
   const addTryOnProduct = () => {
      modalRepsone.forEach(tryOn => {
         var data = JSON.stringify({

            "productId": productId,
            "brandId": 0,
            "image": tryOn.image,
            "modelId": tryOn.modelId

         });
         var addTryOnAPI = {
            method: 'post',
            url: `http://13.214.133.1/api/v1/try-on-products`,
            headers: {
               'Content-Type': 'application/json'
            },
            data: data
         };
         axios(addTryOnAPI)
            .then(function (response) {
               console.log(response);
               swal(
                  "Good job!",
                  "You susccess added a product and model!",
                  "success"
               );
               history.push(`/social-network-campaign`)
            })
            .catch(function (error) {
               swal("Oops", "Some thing went wrong", "error");
            });

      })
   }
   const tryOnProduct =  () => {
      Swal.fire({
         title: 'The model is processing!',
         html: 'This will close in a minutes',

         timerProgressBar: true,
         didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
         },
      })
      modelInfo.forEach(modeltest => {
         // config image here
         const data = new FormData();
         data.append("personImage", modeltest.fileUpload);
         data.append("clothImage", productFile);
         console.log(data);
         const options = {
            method: 'POST',
            url: 'https://virtual-try-on2.p.rapidapi.com/clothes-virtual-tryon',
            headers: {
               'X-RapidAPI-Key': '6f7b1ece68mshb3abeed01be8d0cp17d87fjsn3cd23a366920',
               'X-RapidAPI-Host': 'virtual-try-on2.p.rapidapi.com',
               ...data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' },
            },
            data: data
         };

         axios.request(options).then(function (response) {
            if (response.data.response.ouput_path_img !== undefined) {
               setModalRespone([
                  ...modalRepsone,
                  {
                     image: response.data.response.ouput_path_img,
                     modelId: modeltest.id

                  }
               ])
            }
            Swal.close()
         }).catch(function (error) {
            console.error(error);
            Swal.close()
         });

         setTimeout(4000)
      })

   }


   console.log(modelInfo);

   return (
      <>
         <Fragment>
            <div className="form-head d-flex mb-2 mb-sm-3 mb-lg-5 align-items-center">
               <div className="mr-auto d-none d-lg-block">
                  <h2 className="text-black font-w600">Add News feed</h2>
                  <div>
                     <Link
                        to="/social-network-campaign"
                        className="fs-18 text-primary font-w600"
                     >
                        Add Product/
                     </Link>
                     <Link to="/social-network-campaign" className="fs-18">
                        Product try on
                     </Link>
                  </div>
               </div>
               <div>
                  <Button variant='primary' onClick={addTryOnProduct} >Add Try on</Button>
               </div>
               <div>
                  <Button variant='primary' onClick={tryOnProduct} > Try on</Button>
               </div>
            </div>
            <div className="row">
               <div className="card-header pb-0 border-0">
                  <h3 className="fs-20 text-black">
                     Added Product
                  </h3>
               </div>
            </div>
            <div className="row">
               <div key={productId.id} className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  <div className="card">
                     <div className="card-body">
                        <div className="new-arrival-product">
                           <div className="new-arrivals-img-contnent">
                              <img className="img-fluid" src={imageURl} alt="" />
                           </div>
                           <div className="new-arrival-content text-center mt-3">
                              <h4>
                                 <Link to="/ecom-product-detail">{product.productName}</Link>
                              </h4>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="card-header pb-0 border-0">
                  <h3 className="fs-20 text-black">
                     Choose models below
                  </h3>
               </div>
            </div>
            <div className="row">
               {models.map((model) => (
                  <div key={model.id} className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                     <div className="card">
                        <div className="card-body">
                           <div className="new-arrival-product">
                              <div className="new-arrivals-img-contnent">
                                 <img className="img-fluid" src={model.image} alt="" />
                              </div>
                              <div className="new-arrival-content text-center mt-3">
                                 <h4>
                                    <Link to="/ecom-product-detail">{model.name}</Link>
                                 </h4>
                                 <input
                                    onChange={(e) => {
                                       if (e.target.checked) {
                                          const dataURI1 = model.image;
                                          const fileName = `${model.name}.jpg`;
                                          fetch(dataURI1)
                                             .then(async response => {
                                                const contentType = response.headers.get('content-type')
                                                const blob = await response.blob()
                                                const file = new File([blob], fileName, { contentType })
                                                setModelInfo([
                                                   ...modelInfo,
                                                   {
                                                      id: model.id,
                                                      name: model.name,
                                                      imageURL: model.image,
                                                      fileUpload: file
                                                   }
                                                ])

                                             })

                                       } else {
                                          setModelInfo(
                                             modelInfo.filter((model1) => model1.id !== model.id),
                                          );
                                       }

                                    }}
                                    value={modelInfo}
                                    type="checkbox"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="row">
               <div className="card-header pb-0 border-0">
                  <h3 className="fs-20 text-black">
                     Result :
                  </h3>
               </div>
            </div>
            {modalRepsone.length !== 0 && (

               <div className="row">
                  {modalRepsone.map((model) => (
                     <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="card">
                           <div className="card-body">
                              <div className="new-arrival-product">
                                 <div className="new-arrivals-img-contnent">
                                    <img className="img-fluid" src={model.image} alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}

               </div>

            )}


         </Fragment>
      </>
   );
}

export default Spendings;
