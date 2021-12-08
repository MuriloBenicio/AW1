//Assistir a vídeo aula de implementação de Introdução à biblioteca Axios.
//Implementar as utilização APIs da atividade anteriror (A2 - Atividade 19)
// utilizando a biblioteca Axios. Após a codificação em JavaSCript, HTML e 
// CSS o aluno deve salvar os arquivo em uma subpasta "A20", dentro da 
//pasta "atividades" no repositório do github da disciplina, fazer o deploy
// da aplicação no githubpages ou em outro serviço e enviar o link do 
//repositório e do deploy no moddle - Não serão aceita entregas atrasadas. 

const url = "http://localhost:5500/api"

const newUser = {
  name: "Olivia Oliveira",
  avatar: "http://lorempixel.com/400/200/",
  city: "Recife"
}

const userUpdate = {
  name: "Bernardo Oliveira",
  avatar: "http://lorempixel.com/400/200/",
  city: "Rio do Sul"
}

function getUser(){
  axios.get(url)
    .then(response => {
      const data = response.data
      renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
  }  
  getUser()

  function addNewUser(){
    axios.post(url, newUser)
      .then(response => {
        alert(JSON.stringify(response.data))
      })
      .catch(error => console.log(error))
    }
   //addNewUser
     
    function updateUser(){
      axios.put(`${url}/3`, updateUser)
      .then(response => {
        alert(JSON.stringify(response.data))
      })
      .catch(error => console.log(error))

      }

//updateUser()

function deleteUser(){
  axios.delete(`${url}/21`)
  .then(response => {
    alert(JSON.stringify(response.data))
  })
  .catch(error => console.log(error))
}

//deleteUser()

function getOneUser(){
  axios.get(`${url}/8`)
  .then(response => {
    const data = response.data
    renderResults.textContent = JSON.stringify(data)
  })
  .catch(error => console.log(error))
}
getOneUser()

function doSubmit() {
    axios
      .get(`https://api.lyrics.ovh/v1/${artist.value}/${title.value}`)
      .then(response => {
        output.innerHTML = response.data.lyrics.replace(
          new RegExp('\n', 'g'),
          '<br>'
        )
      })
      .catch(err => console.log(err))
  }
  
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.data.map(user => {
        let li = document.createElement('redezvous')
        li.innerHTML = `Nome: ${user.name} - Username: (${user.username})`
        users.appendChild(li)
      })
    })
    .catch(err => {
      console.log('Erro detectado' + err)
    })