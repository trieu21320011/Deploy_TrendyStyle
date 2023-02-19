import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropFile from "../AppsMenu/Email/Compose/DropFile";
import SnappingTOValuesDeshboard from "./SnappingToValues";
import CustomClearIndicator from "../PluginsMenu/Select2/MultiSelect";
import Summernote from "../Forms/Summernote/SummerNote";
import { Form } from "react-bootstrap";
import swal from "sweetalert";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button } from 'react-bootstrap'
import { EditorState, convertToRaw } from "draft-js";
import axios from 'axios';
import draftToHtmlPuri from "draftjs-to-html";
import { useHistory } from "react-router-dom";
import "react-dropzone-uploader/dist/styles.css";
import Drop from "react-dropzone-uploader";
import { storage } from "../../../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import MaterialDate from "../Forms/Pickers/MetarialDate";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";


function NewCompaign() {
   let history = useHistory();
   const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
   );
   const [imageUpload, setImageUpload] = useState(null)
   const [title, setTitle] = useState("")
   const [detail, setDetails] = useState("")
   const [imageURL, setImageURL] = useState("")
   const [status, setStatus] = useState("0")
   const [lastEdited, setLastEdited] = useState("1")
   const [newFeedTypeId, setNewFeedTypeId] = useState("1")
   const [newFeedTypeIds, setNewFeedTypeIds] = useState([])
   const [author, setAuthor] = useState("1")
   const [productId, setProductId] = useState("1")
   const [productIds, setProductIds] = useState([])
   const [shop, setShop] = useState("0")
   const [activeBudget, setActiveBudget] = useState(1000);
   const [selectedDate, handleDateChange] = useState(new Date());

   console.log(detail);
   const onChangeTitle = (e) => {
      setTitle(e.target.value)
   }
   const onChangeStatus = (e) => {
      setStatus(e.target.value)
   }
   const onChangeLastEdited = (e) => {
      setLastEdited(e.target.value)
   }

   const onChangeNewFeedTypeId = (e) => {
      setNewFeedTypeId(e.target.value)
   }
   const onChangeAuthor = (e) => {
      setAuthor(e.target.value)
   }
   const onChangeProductId = (e) => {
      setProductId(e.target.value)
   }
   const onChangeShop = (e) => {
      setShop(e.target.value)
   }
   const onChangeCreateDate = (e) => {
      handleDateChange(e.target.value)
   }
   const handleChangeStatus = ({ meta, file }, status) => {
      console.log(status, meta, file);
      setImageUpload(file)
   };

   const CreateNew = () => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `Product Images/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload).then(() => {
         getDownloadURL(imageRef).then((url) => {
            var data = JSON.stringify({
               "title": title,
               "detail": detail,
               "status": "Active",
               "image": url,
               "lastEdited": selectedDate,
               "newFeedTypeId": newFeedTypeId,
               "author": "1",
               "productIds": [
                  productId
               ]
            });
            var config = {
               method: 'post',
               url: 'http://13.214.133.1/api/v1/newfeeds',
               headers: {
                  'Content-Type': 'application/json'
               },
               data: data
            };

            axios(config)
               .then(function (response) {
                  swal(
                     "Good job!",
                     "You susccess added a Newfeeds!",
                     "Success"
                  );
                  history.push("/campaign")
               })
               .catch(function (error) {
                  swal("Oops", "Some thing went wrong", "error");
               });
         })
      })
   }
   useEffect(() => {
      var newFeedTypeAPI = {
         method: 'get',
         url: 'http://13.214.133.1/api/v1/newfeedtypes',
         headers: {
            'Content-Type': 'application/json'
         },

      };
      var productAPI = {
         method: 'get',
         url: 'http://13.214.133.1/api/v1/products',
         headers: {
            'Content-Type': 'application/json'
         },

      };
      axios(newFeedTypeAPI)
         .then(function (response) {
            setNewFeedTypeIds(response.data)
         })
         .catch(function (error) {
            console.log(error);
         });
      axios(productAPI)
         .then(function (response) {
            setProductIds(response.data)
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
      setDetails(htmlPuri)
   };

   // const upload = () => {
   //    if (imageUpload == null) return;
   //    const imageRef = ref(storage, `Product Images/${imageUpload.name}`);
   //    uploadBytes(imageRef, imageUpload).then(() => {
   //       alert("Image Upload")
   //       getDownloadURL(imageRef).then((url) => {
   //          setImageURL(url)
   //       })
   //    })

   // }

   console.log(imageURL);

   return (
      <>
         <div className="form-head d-flex mb-2 mb-sm-3 mb-lg-5 align-items-center">
            <div className="mr-auto d-none d-lg-block">
               <h2 className="text-black font-w600">Add Newfeeds</h2>
               <div>
                  <Link
                     to="/social-network-campaign"
                     className="fs-18 text-primary font-w600"
                  >
                     Product /
                  </Link>
                  <Link to="/new-compaign" className="fs-18">
                     Add new Newfeeds
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
                              Describe your Newfeeds
                           </h3>
                        </div>
                        <div className="card-body">
                           <form>
                              <div className="form-row">
                                 <div className="form-group col-xl-12">
                                    <label className="text-black font-w500 mb-3">
                                       Title
                                    </label>
                                    <span className="text-danger ml-1">*</span>
                                    <input
                                       type="text"
                                       className="form-control"
                                       placeholder="Valencia pants"
                                       onChange={onChangeTitle}
                                    />
                                 </div>
                                 <div className="form-group col-xl-12">
                                    <label className="text-black font-w500 mb-3">
                                       Details
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
                                 <div className="form-group col-xl-12">
                                    <label className="text-black font-w500 mb-3">
                                       Author
                                    </label>
                                    <span className="text-danger ml-1">*</span>
                                    <input
                                       type="text"
                                       className="form-control"
                                       placeholder="Valencia pants"
                                       onChange={onChangeAuthor}
                                    />
                                 </div>
                                 <div className="form-group col-xl-12" >
                                    <label className="text-black font-w500 mb-3">
                                       CreateDate
                                    </label>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                       <DatePicker
                                          autoOk
                                          label=""
                                          clearable
                                          format="dd/MM/yyyy"
                                          disableFuture
                                          value={selectedDate}
                                          onChange={handleDateChange}
                                          readOnly
                                       />
                                    </MuiPickersUtilsProvider>
                                 </div>
                                 <div className="col-md-12 mb-12">
                                    <div className="row">
                                       <div className="col-md-3 mb-4">
                                          <label htmlFor="state">New Feed Type</label>
                                          <Form.Control as="select" defaultValue={newFeedTypeIds?.[0]?.id} onChange={onChangeNewFeedTypeId}>
                                             {newFeedTypeIds.map((c, index) => (
                                                <option key={c.id} value={c.id} >{c.typeName}</option>
                                             ))}
                                          </Form.Control>

                                          <div className="invalid-feedback">
                                             Please provide a valid state.
                                          </div>
                                       </div>
                                       <div className="col-md-3 mb-4">
                                          <label htmlFor="state">Product IDs</label>
                                          <Form.Control as="select" defaultValue={productIds?.[0]?.id} onChange={onChangeProductId}>
                                             {productIds.map((c, index) => (
                                                <option key={c.id} value={c.id} >{c.productName}</option>
                                             ))}
                                          </Form.Control>

                                          <div className="invalid-feedback">
                                             Please provide a valid state.
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

export default NewCompaign;
