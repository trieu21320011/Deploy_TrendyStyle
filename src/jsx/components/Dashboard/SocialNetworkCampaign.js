import React from "react";
import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {
   Row,
   Col,
   Card,
   Table,
   Badge,
   ProgressBar,
} from "react-bootstrap";
import axios from 'axios';

import ChartDoughnut2 from "../charts/Chartjs/donught2";

function SocialNetworkCampaign() {
   const [products, setProducts] = useState([])

   useEffect(() => {
      var productsAPI = {
         method: 'get',
         url: 'http://13.214.133.1/api/v1/products',
         headers: {
            'Content-Type': 'application/json'
         },

      };
      axios(productsAPI)
         .then(function (response) {
            setProducts(response.data)
         })
         .catch(function (error) {
            console.log(error);
         });
   }, [])
   return (
      <>
         <div className="form-head d-flex mb-0 mb-lg-4 align-items-start">
            <div className="mr-auto d-none d-lg-block">
               <h2 className="text-black font-w600">Product</h2>
               <div>
                  <Link
                     to="/social-network-campaign"
                     className="fs-18 text-primary font-w600"
                  >
                     NewFeeds /{" "}
                  </Link>
                  <Link to="/social-network-campaign" className="fs-18">
                     Product list
                  </Link>
               </div>
            </div>
            <div className="d-none d-lg-flex align-items-center">
               <div className="text-right">
                  <h3 className="fs-20 text-black mb-0">09:62 AM</h3>
                  <span className="fs-14">Monday, 3 Augusut 2020</span>
               </div>
               <Link
                  className="ml-4 text-black p-3 rounded border text-center width60"
                  to="/social-network-campaign"
               >
                  <i className="las la-cog scale5" />
               </Link>
            </div>
         </div>
         <div className="row">
            <div className="col-xl-12">
               <div className="flex-wrap d-flex align-items-center justify-content-between">
                  <div className="d-flex flex-wrap">
                  <li className="nav-item dropdown d-none d-xl-flex">
                           <Link className="btn btn-primary" to="/order-table">
                              Add Product
                           </Link>
                        </li>
                  </div>
                  <div>
                     <Link
                        to="/social-network-campaign"
                        className="btn bg-white"
                     >
                        <svg
                           width={20}
                           height={18}
                           viewBox="0 0 20 18"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M19 2.25H8.5C8.5 1.42275 7.82725 0.75 7 0.75H5.5C4.67275 0.75 4 1.42275 4 2.25H1C0.586 2.25 0.25 2.58525 0.25 3C0.25 3.41475 0.586 3.75 1 3.75H4C4 4.57725 4.67275 5.25 5.5 5.25H7C7.82725 5.25 8.5 4.57725 8.5 3.75H19C19.414 3.75 19.75 3.41475 19.75 3C19.75 2.58525 19.414 2.25 19 2.25ZM5.5 3.75V2.25H7L7.00075 2.997C7.00075 2.9985 7 2.99925 7 3C7 3.00075 7.00075 3.0015 7.00075 3.003V3.75H5.5Z"
                              fill="#2E2E2E"
                           />
                           <path
                              d="M19 8.25H14.5C14.5 7.42275 13.8273 6.75 13 6.75H11.5C10.6727 6.75 10 7.42275 10 8.25H1C0.586 8.25 0.25 8.58525 0.25 9C0.25 9.41475 0.586 9.75 1 9.75H10C10 10.5773 10.6727 11.25 11.5 11.25H13C13.8273 11.25 14.5 10.5773 14.5 9.75H19C19.414 9.75 19.75 9.41475 19.75 9C19.75 8.58525 19.414 8.25 19 8.25ZM11.5 9.75V8.25H13L13.0007 8.997C13.0007 8.9985 13 8.99925 13 9C13 9.00075 13.0007 9.0015 13.0007 9.003V9.75H11.5Z"
                              fill="#2E2E2E"
                           />
                           <path
                              d="M19 14.25H8.5C8.5 13.4227 7.82725 12.75 7 12.75H5.5C4.67275 12.75 4 13.4227 4 14.25H1C0.586 14.25 0.25 14.5853 0.25 15C0.25 15.4148 0.586 15.75 1 15.75H4C4 16.5773 4.67275 17.25 5.5 17.25H7C7.82725 17.25 8.5 16.5773 8.5 15.75H19C19.414 15.75 19.75 15.4148 19.75 15C19.75 14.5853 19.414 14.25 19 14.25ZM5.5 15.75V14.25H7L7.00075 14.997C7.00075 14.9985 7 14.9992 7 15C7 15.0008 7.00075 15.0015 7.00075 15.003V15.75H5.5Z"
                              fill="#2E2E2E"
                           />
                        </svg>
                     </Link>
                     <Dropdown className="custom-dropdown ml-3">
                        <Dropdown.Toggle
                           variant=""
                           className="arrow-false btn bg-white d-flex align-items-center"
                        >
                           <div className="text-left mr-3">
                              <span className="text-black">Newest</span>
                           </div>
                           <i className="fa fa-caret-down" aria-hidden="true" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-right">
                           <Dropdown.Item
                              className=""
                              to="/social-network-campaign"
                           >
                              4 June 2020 - 4 July 2020
                           </Dropdown.Item>
                           <Dropdown.Item
                              className=""
                              to="/social-network-campaign"
                           >
                              5 july 2020 - 4 Aug 2020
                           </Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                  </div>
               </div>
            </div>
            <div className="col-xl-12 social-Campaign-audio">
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>list</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive striped>
                        <thead>
                           <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Price</th>
                              <th>Discount</th>
                              <th>In stock</th>
                              <th>Status</th>
                              <th>Category</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                        <tbody>
                        {products.map((p, index) => (
                              <tr>
                              <th>{index}</th>
                              <td>{p.productName}</td>
                              <td>
                                 ${p.price}
                              </td>
                              <td>{p.discount} %</td>
                              <td>{p.inStock}</td>
                              <td><Badge variant="primary">{p.status}</Badge></td>
                              <td>{p.categoryId}</td>
                              <td>
                                 <div className="d-flex">
                                    <Link
                                       to="/table-bootstrap-basic"
                                       className="btn btn-primary shadow btn-xs sharp mr-1"
                                    >
                                       <i className="fa fa-pencil"></i>
                                    </Link>
                                    <Link
                                       to="/table-bootstrap-basic"
                                       className="btn btn-danger shadow btn-xs sharp"
                                    >
                                       <i className="fa fa-trash"></i>
                                    </Link>
                                 </div>
                              </td>
                           </tr>
                        ))}
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
            </Col>
            </div>
         </div>
      </>
   );
}

export default SocialNetworkCampaign;
