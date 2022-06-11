const customerController = {}

customerController.listCustomer = (req, res) => {
    // Method getConnection - Connect Mysql (Always in the params of the route)

    req.getConnection((error, connect) => {
        /* If connect True - Execute SQL */
        connect.query('SELECT * FROM customer', (error, customers) => {
            /* Capture Error */
            if (error) {
                res.json(error)
            }
            /* All true, Render view and data */
            res.render('customers', {
                data: customers
            })
        })
    })
}

customerController.saveCustomer = (req, res) => {
    const dataForm = req.body

    req.getConnection((error, connect) => {
        connect.query('INSERT INTO customer SET ?', [dataForm], (error, customer) => {
            /* Redirect to route */
            res.redirect('/')
        })
    })
}

customerController.editCustomer = (req, res) => {
    const { id } = req.params

    req.getConnection((error, connect) => {
        connect.query('SELECT * FROM customer WHERE id = ?', [id], (error, customer) => {
            res.render('customer_edit', {
                data: customer[0]
            })
        })
    })
}

customerController.updateCustomer = (req, res) => {
    const { id } = req.params
    const newCustomer = req.body

    req.getConnection((error, connect) => {
        connect.query('UPDATE customer SET ? WHERE id = ?', [newCustomer, id], (error, customer) => {
            res.redirect('/')
        })
    })
}

customerController.deleteCustomer = (req, res) => {
    /* Get id of the Form */
    const { id } = req.params

    req.getConnection((error, connect) => {
        connect.query('DELETE FROM customer WHERE id = ?', [id], (error, customer) => {
            res.redirect('/')
        })
    })
}

module.exports = customerController