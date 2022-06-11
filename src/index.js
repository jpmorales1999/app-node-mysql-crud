const express = require('express')
const path = require('path')
const morgan = require('morgan')

// Routes
const customerRoutes = require('./routes/customerRoute')

// Database Connection
const { connect } = require('./database')

const app = express()

// Settings
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views')) // Selected route of the view folder

// Middlewares (Before request users)
app.use(morgan('dev'))
app.use(connect)
app.use(express.urlencoded({ extended: false })) // Understand Data from Forms, (extended false (NOT SEND IMAGES AND CRYPT DATA)) 

// Routes
app.use(customerRoutes)

// Static files (Public) - Complements
app.use(express.static(path.join(__dirname, 'public')))

// Run server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})