// Step to understand special function which accept function as parameter or return it as variable
// const asyncHandler = ()=> {}
// const asycnHandler = (fn) => {() => {}}
// const asycnHandler = (fn) => asycn () => {}

// Handle through try catch block
// const asyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

// Handle through promise

const asyncHandler = (requestHandler) => {
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
    }
}


export {asyncHandler}