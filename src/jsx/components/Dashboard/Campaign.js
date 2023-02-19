import React from "react";
import { useState, useEffect } from "react";
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

function Campaign() {
   const [newfeeds, setNewfeeds] = useState([])

   useEffect(() => {
      var newfeesAPI = {
         method: 'get',
         url: 'http://13.214.133.1/api/v1/newfeeds',
         headers: {
            'Content-Type': 'application/json'
         },

      };
      axios(newfeesAPI)
         .then(function (response) {
            setNewfeeds(response.data)
         })
         .catch(function (error) {
            console.log(error);
         });
   }, [])
   return (
      <>
         <div className="form-head d-flex mb-0 mb-lg-4 align-items-start">
            <div className="mr-auto d-none d-lg-block">
               <h2 className="text-black font-w600">NewFeeds</h2>
               <p className="mb-0">NewFeeds list</p>
            </div>
            <div className="d-none d-lg-flex align-items-center">
               <div className="text-right">
                  <h3 className="fs-20 text-black mb-0">09:62 AM</h3>
                  <span className="fs-14">Monday, 3 Augusut 2020</span>
               </div>
               <Link
                  className="ml-4 text-black p-3 rounded border text-center width60"
                  to="/campaign"
               >
                  <i className="las la-cog scale5" />
               </Link>
            </div>
         </div>
         <div className="row">
            <div className="col-xl-12">
               <div className="d-lg-flex d-block pl-0 pr-0 border-0 align-items-end justify-content-between mb-3">
                  <div className>
                     <Link to="/campaign" className="btn bg-white mb-2 mr-2">
                        <svg
                           className="mr-2 scale5"
                           width={14}
                           height={14}
                           viewBox="0 0 18 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M17.9375 4.6875V22.5625C17.9378 22.7117 17.897 22.8581 17.8196 22.9857C17.7422 23.1132 17.6312 23.217 17.4987 23.2856C17.3831 23.3449 17.2549 23.3755 17.125 23.375C16.9593 23.3746 16.7977 23.3236 16.6619 23.2288L9 17.8662L1.33813 23.2288C1.21968 23.3089 1.08218 23.3564 0.939516 23.3664C0.796853 23.3763 0.65408 23.3485 0.525625 23.2856C0.388595 23.2204 0.272581 23.118 0.190727 22.9902C0.108873 22.8624 0.064453 22.7143 0.0625 22.5625V4.6875C0.0625 3.61006 0.490512 2.57675 1.25238 1.81488C2.01425 1.05301 3.04756 0.625 4.125 0.625H13.875C14.9524 0.625 15.9858 1.05301 16.7476 1.81488C17.5095 2.57675 17.9375 3.61006 17.9375 4.6875Z"
                              fill="#353751"
                           />
                        </svg>
                        <span className="text-black">Boookmark</span>
                     </Link>
                  </div>
                  <div>
                     <Link to="/campaign" className="btn bg-white mb-2 mr-2">
                        <svg
                           width={14}
                           height={14}
                           className="scale5"
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
                     <Dropdown className="custom-dropdown mb-2">
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
                           <Dropdown.Item className="" to="/campaign">
                              4 June 2020 - 4 July 2020
                           </Dropdown.Item>
                           <Dropdown.Item className="" to="/campaign">
                              5 july 2020 - 4 Aug 2020
                           </Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                  </div>
               </div>
            </div>
            <div className="campaign-audio col-md-12">
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
                                 <th>Title</th>
                                 {/* <th>Details</th> */}
                                 <th>Status</th>
                                 <th>Last Edited</th>
                                 <th>NFT Id</th>
                                 <th>Author ID</th>
                                 <th>Action</th>
                              </tr>
                           </thead>
                           <tbody>
                              {newfeeds.map((p, index) => (
                                 <tr>
                                    <th>{index}</th>
                                    <td>{p.title}</td>
                                    {/* <td>
                                       {p.detail}
                                    </td> */}
                                    <td><Badge variant="primary">{p.status}</Badge></td>
                                    <td>{p.lastEdited}</td>
                                    <td>{p.newfeedTypeId}</td>
                                    <td>{p.author}</td>
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

export default Campaign;
