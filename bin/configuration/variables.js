const variables = {
    Api:{
        port: process.env.port || 3000
    },
    Database:{
        conn: process.env.connection || 'mongodb://admin_nofood:rala814496@ds141932.mlab.com:41932/nofood'
    },
    Security:{
        secretKey: 'c2d30847761205c3358d3dd7c2f3defc|6cdc5d2c5bf364b277689dee5668fe64'
    }
}


module.exports = variables;