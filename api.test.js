const axios = require('axios')

async function api(){
    const response = await axios.get('https://hp-api.onrender.com/api/characters/students')

    return response.data
}

test('Verifica dados obtidos a API', async ()=>{
    const dados = await api();
    expect(dados).toBeDefined();
})