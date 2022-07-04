
exports.getIndex=((req,res,next)=>{
    res.render("product/index");
})
exports.addProduct=((req,res,next)=>{
    res.render("product/add-product");
})