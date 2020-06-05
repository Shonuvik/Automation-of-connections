const axios = require('axios');

const init = async function() {
    //requisições http
   const ura = (await axios ({
        url: 'https://api.totalvoice.com.br/ura',
        method: 'post',
        headers: {
            'Access-Token': process.env.TOTALVOICE_API_KEY
        },
        data: {
            nome: `URA ${Math.floor(Math.random()* 10000)}`,
            dados: [
                {
                    acao: 'tts',
                    coletar_dtmf: "6",
                    timeout: "20",
                    acao_dados: {
                        mensagem: 'Hallo Willkommen auf meine Handy! Geben Sie den 6-stelligen Code auf Ihrem Bildschirm ein'
                    }
                },
                {
                    acao: "dinamico",
                    acao_dados: {
                        url: 'https://endpcc7xqrb0ngs.m.pipedream.net'
                    }
                }
            ]
        }
    })).data;
    console.log(ura);
};

init();