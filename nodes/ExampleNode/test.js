const axios = require('axios')

async function getProject(){
    const response = await axios.get('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.status.list?filter[ENTITY_ID]=SOURCE')
    			const data = response.data.result.map((item) => ({name: item.NAME, value: item.STATUS_ID}))
			
    console.log(data)
}
getProject()