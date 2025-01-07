const validarHora = (req, res, next) =>{
    const hora = req.horaExacta;
    if (hora >= 12 && hora <= 24){
        next();
    }else{
        res.locals.aviso = `<h2>Aún no es la hora de entrar son las ${hora}</h2>`;
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.aviso))

    }
}

module.exports = validarHora;