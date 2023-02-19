import axios from 'axios';

export const getProductCategory = () => {


  var config = {
    method: 'get',
    url: 'http://13.214.133.1/api/v1/categories',
    headers: {
      'Content-Type': 'application/json'
    },

  };

  axios(config)
    .then(function (response) {
      debugger
      return response
    })
    .catch(function (error) {
      console.log(error);
    });
};