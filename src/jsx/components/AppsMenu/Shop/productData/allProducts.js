//** Import Images */
import image01 from "../../../../../images/product/1.jpg";
import image02 from "../../../../../images/product/2.jpg";
import image03 from "../../../../../images/product/3.jpg";
import image04 from "../../../../../images/product/4.jpg";
import image05 from "../../../../../images/product/5.jpg";
import image06 from "../../../../../images/product/6.jpg";
import image07 from "../../../../../images/product/7.jpg";

import listImg01 from "../../../../../images/tab/1.jpg";
import listImg02 from "../../../../../images/tab/2.jpg";
import listImg03 from "../../../../../images/tab/3.jpg";
import listImg04 from "../../../../../images/tab/4.jpg";

//** Import Rating Start */
import { starOne, starTwo, starThree, starFour, starFive } from "./ProductStar";

var allProduct = [
   {
      key: "E11381DDCE6E4",
      previewImg: image01,
      imageList: [listImg01, listImg02, listImg03, listImg04],
      title: "BONORUM ET MALORUM",
      rating: starOne,
      price: "761.00",
      availability: "In stock",
      productCode: "0405689",
      brand: "Lee",
      tags: ["bags", "clothes", "shoes", "dresses"],
      des:
         "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
   },
   {
      key: "B617D5334A7F4",
      previewImg: image02,
      imageList: [listImg01, listImg02, listImg03, listImg04],
      title: "STRIPED DRESS",
      rating: starTwo,
      price: "159.00",
      availability: "In stock",
      productCode: "0405689",
      brand: "Lee",
      tags: ["bags", "clothes", "shoes", "dresses"],
      des:
         "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
   },
   {
      key: "A5B1AC21CEFA9",
      previewImg: image03,
      imageList: [listImg01, listImg02, listImg03, listImg04],
      title: "BBOW POLKA-DOT",
      rating: starThree,
      price: "357.00",
      availability: "In stock",
      productCode: "0405689",
      brand: "Lee",
      tags: ["bags", "clothes", "shoes", "dresses"],
      des:
         "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
   },
   {
      key: "FB695A3B5CE53",
      previewImg: image04,
      imageList: [listImg01, listImg02, listImg03, listImg04],
      title: "Z PRODUCT 360",
      rating: starOne,
      price: "654.00",
      availability: "In stock",
      productCode: "0405689",
      brand: "Lee",
      tags: ["bags", "clothes", "shoes", "dresses"],
      des:
         "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
   },
];

export default allProduct;
