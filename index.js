const express = require('express')
const app = express()

const images = {
  goku: [
    'https://media.gq.com.mx/photos/5f6ce732bc946e88f6c96320/16:9/w_2560%2Cc_limit/goky%2520ultra%2520instinto.jpg',
    'http://nerdarena.in/cdn/shop/products/NAWebsiteadapts_GODGoku.jpg?v=1589669939'
  ],
  lamona: [
    'https://fotos.perfil.com//2022/05/26/900/0/la-mona-jimenez-1362435.jpg',
    'https://i.pinimg.com/474x/646d027385e23ea3ff4ce03f89f47b2c.jpg'
  ]
}

function getRandomImage(personaje) {
  let imgs = images[personaje]
  var randomIndex = Math.floor(Math.random() * imgs.length)
  return imgs[randomIndex]
}

app.get('/goku', (req, res) => {
  res.send(`<img src="${getRandomImage('goku')}" alt="Mirá a Goku papá" />`)
})

app.get('/lamona', function (req, res) {
  res.send(`<img src="${getRandomImage('lamona')}" alt="La Mona, ídolo" />`)
})

app.get('*', (req, res) => {
  res.send(`
    <h1>Che, aca no hay nadaaa! Toma, te la gilll!</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/BtwihXYODZ4" frameborder="0" allowfullscreen></iframe>
  `)
})

app.listen(666, function() {
  console.log('El servidor esta corriendo en el puerto 666, papu!')
})
