module.exports = function(req,res,next){
    if(req.register.role==='Employee') return res.status(403).send('Acess denied')
    next()
}