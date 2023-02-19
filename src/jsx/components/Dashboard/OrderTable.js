import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DropFile from "../AppsMenu/Email/Compose/DropFile";
import swal from "sweetalert";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Form } from "react-bootstrap";
import { Button } from 'react-bootstrap'
import { EditorState, convertToRaw } from "draft-js";
import axios from 'axios';
import draftToHtmlPuri from "draftjs-to-html";
import { useHistory } from "react-router-dom";
import "react-dropzone-uploader/dist/styles.css";
import Drop from "react-dropzone-uploader";
import { storage } from "../../../Firebase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"


function OrderTable() {
   let history = useHistory();
   const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
   );
   const [imageUpload, setImageUpload] = useState(null)
   const [productName, setProductName] = useState("")
   const [description, setDescription] = useState("")
   const [imageURL, setImageURL] = useState("")
   const [price, setPrice] = useState("0")
   const [inStock, setInStock] = useState("1")
   const [discount, setDiscount] = useState("1")
   const [categories, setCategories] = useState([])
   const [category, setCategory] = useState("1")
   const [shops, setShops] = useState([])
   const [shop, setShop] = useState("1")


   console.log(description);
   const onChangeCategory = (e) => {
      setCategory(e.target.value)
   }
   const onChangeProductName = (e) => {
      setProductName(e.target.value)
   }
   const onChangePrice = (e) => {
      setPrice(e.target.value)
   }
   const onChangeInStock = (e) => {
      setInStock(e.target.value)
   }

   const onChangeDiscount = (e) => {
      setDiscount(e.target.value)
   }
   const onChangeShop = (e) => {
      setShop(e.target.value)
   }
   const handleChangeStatus = ({ meta, file }, status) => {
      console.log(status, meta, file);
      setImageUpload(file)
   };
   const CreateNew = () => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `Product Images/${imageUpload.name}`);
      uploadBytes(imageRef,imageUpload).then(() =>{
         getDownloadURL(imageRef).then((url) =>{
            var data = JSON.stringify({
               "productName": productName,
               "price": price,
               "discount": discount,
               "inStock": inStock,
               "description": description,
               "status": "active",
               "categoryId": category,
               "shopId": shop,
               "images": [
                  {
                    "imageUrl": url
                  }
                ]
            });
            var config = {
               method: 'post',
               url: 'http://13.214.133.1/api/v1/products',
               headers: {
                  'Content-Type': 'application/json'
               },
               data: data
            };
      
            axios(config)
               .then(function (response) {
                  console.log(response);
                  swal(
                     "Good job!",
                     "You susccess added a product!",
                     "success"
                  );
                  history.push(`/spendings?id=${response.data.id}`)
               })
               .catch(function (error) {
                  swal("Oops", "Some thing went wrong", "error");
               });
         })
      })
   }
   useEffect(() => {
      var categoriesAPI = {
         method: 'get',
         url: 'http://13.214.133.1/api/v1/categories',
         headers: {
            'Content-Type': 'application/json'
         },

      };
      var shopsAPI = {
         method: 'get',
         url: 'http://13.214.133.1/api/v1/shops',
         headers: {
            'Content-Type': 'application/json'
         },

      };
      axios(categoriesAPI)
         .then(function (response) {
            setCategories(response.data)
         })
         .catch(function (error) {
            console.log(error);
         });
      axios(shopsAPI)
         .then(function (response) {
            setShops(response.data)
         })
         .catch(function (error) {
            console.log(error);
         });
   }, [])
   const handleEditorChange = (state) => {
      setEditorState(state);
      const htmlPuri = draftToHtmlPuri(
         convertToRaw(editorState.getCurrentContent())
      );
      setDescription(htmlPuri)
   };


   console.log(imageURL);

   return (
      <>
         <div className="form-head d-flex mb-2 mb-sm-3 mb-lg-5 align-items-center">
            <div className="mr-auto d-none d-lg-block">
               <h2 className="text-black font-w600">Add Product</h2>
               <div>
                  <Link
                     to="/social-network-campaign"
                     className="fs-18 text-primary font-w600"
                  >
                     Product /
                  </Link>
                  <Link to="/new-compaign" className="fs-18">
                     Add new Product
                  </Link>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-xl-12 col-xxl-8 col-lg-8">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="card">
                        <div className="card-header pb-0 border-0">
                           <h3 className="fs-20 text-black">
                              Describe your product
                           </h3>
                        </div>
                        <div className="card-body">
                           <form>
                              <div className="form-row">
                                 <div className="form-group col-xl-12">
                                    <label className="text-black font-w500 mb-3">
                                       Name
                                    </label>
                                    <span className="text-danger ml-1">*</span>
                                    <input
                                       type="text"
                                       className="form-control"
                                       placeholder="Valencia pants"
                                       onChange={onChangeProductName}
                                    />
                                 </div>
                                 <div className="form-group col-xl-12">
                                    <label className="text-black font-w500 mb-3">
                                       Description
                                    </label>
                                    <span className="text-danger ml-1">*</span>
                                    <Editor
                                       editorState={editorState}
                                       onEditorStateChange={handleEditorChange}
                                       toolbarClassName="toolbarClassName"
                                       wrapperClassName="wrapperClassName"
                                       editorClassName="editorClassName"

                                    />
                                 </div>
                                 <div className="form-group col-xl-3">
                                    <label className="text-black font-w500 mb-3">
                                       Price
                                    </label>
                                    <span className="text-danger ml-1">*</span>
                                    <input
                                       type="money"
                                       className="form-control"
                                       onChange={onChangePrice}
                                    />
                                 </div>


                                 <div className="col-md-12 mb-12">
                                    <div className="row">                                      
                                       <div className="col-md-3 mb-4">
                                          <label htmlFor="state">Category</label>
                                          <Form.Control as="select" defaultValue={categories?.[0]?.id} onChange={onChangeCategory}>
                                             {categories.map((c, index) => (
                                                <option key={c.id} value={c.id} >{c.name}</option>
                                             ))}
                                          </Form.Control>

                                          <div className="invalid-feedback">
                                             Please provide a valid state.
                                          </div>
                                       </div>
                                       <div className="col-md-3 mb-4">
                                          <label htmlFor="zip">In stock</label>
                                          <input
                                             type="number"
                                             name="num"
                                             className="form-control input-btn input-number"
                                             defaultValue="1"
                                             onChange={onChangeInStock}
                                          />
                                          <div className="invalid-feedback">
                                             Zip code required.
                                          </div>
                                       </div>
                                       <div className="col-md-3 mb-4">
                                          <label htmlFor="zip">Discount (%)</label>
                                          <input
                                             type="number"
                                             name="num"
                                             className="form-control input-btn input-number"
                                             defaultValue="1"
                                             onChange={onChangeDiscount}
                                          />
                                          <div className="invalid-feedback">
                                             Zip code required.
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div
                                    className="form-group col-xl-12"
                                    style={{
                                       position: "relative",
                                       zIndex: "2",
                                    }}
                                 >
                                    <label className="text-black font-w500 mb-3">
                                       Image
                                    </label>
                                    <span className="text-danger ml-1">*</span>
                                    <Drop
                                       // getUploadParams={getUploadParams}
                                       onChangeStatus={handleChangeStatus}
                                       inputContent="Drop images here to upload"
                                       accept="image/*,audio/*,video/*"
                                       styles={{
                                          dropzone: {
                                             minHeight: 200,
                                             maxHeight: 250,
                                             width: "100%",
                                             backgroundColor: "#f2f4fa",
                                             border: "1px dashed #DDDFE1",
                                             overflow: "hidden",
                                          },
                                          inputLabel: {
                                             color: "#7e7e7e",
                                             fontSize: "18px",
                                             fontWeight: "normal",
                                             backgroundColor: "#f2f4fa",
                                          },
                                       }}
                                    />
                                 </div>
                                 <Button variant='primary' onClick={CreateNew}> Add new</Button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </>
   );
}

export default OrderTable;
