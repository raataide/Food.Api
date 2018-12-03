const variables = {
    Api:{
        port: process.env.port || 3000
    },
    Database:{
        conn: process.env.connection || 'mongodb://admin_nofood:rala814496@ds141932.mlab.com:41932/nofood'
    }
}


module.exports = variables;