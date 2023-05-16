const axios = require('axios')

async function getProject(){
    await axios.get('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.userfield.list?filter[FIELD_NAME]=UF_CRM_1553165368131')
        .then(response => {
            const data = response.data.result[0].LIST.map((item) => ({name: item.VALUE, value: item.ID}))
            console.log(data)
        })
        .catch(error => {
            throw error;
        })
    //const data = response.data.result.map((item) => ({name: item.NAME, value: item.ID}))
    //console.log(JSON.stringify(response))
}
getProject()


// var axios = require('axios');
// const { response } = require('express')

// axios.get('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.userfield.list?filter[FIELD_NAME]=UF_CRM_1553165368131')
//   .then(response => {
//     // Обработка успешного ответа
//     console.log(response.data); // Вывод данных
//   })
//   .catch(error => {
//     // Обработка ошибки
//     console.error(error);
//   });
