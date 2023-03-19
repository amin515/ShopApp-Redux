
// custom error handler
const errorHandler = (error, req, res, next) => {

   const errorMessage = error.message || 'Unknown error'
   const errorStatus  = error.status  || 500

    return res.status(errorStatus).json({
        message : errorMessage,
        status : errorStatus
    })

}

export default errorHandler;


