const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const sqlite = require('sqlite')

const path = require('path')

const port = process.env.PORT || 3000

const dbConnnection = sqlite.open(path.resolve(__dirname, 'banco.sqlite'), { Promise })

app.set('views', path.resolve(__dirname, 'views'))

app.set('view engine', 'ejs')

app.use(express.static(path.resolve(__dirname, 'public')))

app.use(bodyParser.urlencoded({
    extended: true
}))



app.listen(port, (err) => {
        if (err) {
            console.log('Erro ao iniciar servidor')
        } else {
            console.log('Servidor iniciado com sucesso - @blogdomarcio')
        }
    }

)