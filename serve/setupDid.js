const axios = require('axios');

const init = async function() {
    //requisições http
   const dids = (await axios ({
      url: 'https://api.totalvoice.com.br/did',
      method: 'get',
      headers: {
          'Access-Token': process.env.TOTALVOICE_API_KEY
      }
    })).data;
    console.log(dids.dados);
};

init();