import { useState } from "react"

//aqui tenemos el seteado de usestate
const Formulario = ({setAtento}) => {
    const [formu,setFormu] = useState({
     nombre:"",
     email:"",
     password:"",
     ConfirmPassword:"",
    })

    //las validaciones puede ser con if , yo lo hice con operador ternario
 const validarFormu = (e)=>{
    e.preventDefault()
    //aqui haciendo destructuring
    const {nombre,email,password,ConfirmPassword} = formu
const validarInputs = !nombre | !email | !password | !ConfirmPassword;
const validarPassword = password !== ConfirmPassword;

validarInputs ? setAtento ({
    error: true,
    msg:'Completa los campos requeridos!',
    color:'danger',
    
})
:setAtento({
    error:false,
    msg:'Cuenta creada exitosamente',
    color:'success',
})

if(validarPassword){
    setAtento({
        error:false,
        msg:'Las contraseña no coinciden',
        color:'danger',
    })
    return
}

// validarPassword ? setAlert({
//     error:true,
//     msg:'Las contraseñas no coinciden',
//     color:'danger'
// })
// :setAlert({
//     error:false,
//     msg:'',
//     color: ''
// })
//aqui estoy diciendo cuando le pasen todo los datos y sea te registraste exitosamente, lo que va a hacer esto me va a borrar lo que se puso en el input para que no quede
setFormu({
     nombre:"",
     email:"",
     password:"",
     ConfirmPassword:"",
})
 }
//esto es para cuando ingrese exitosamente , la alerta dure solo 10 segundo yse borre
//  setTimeout(() =>{
//     setAlert({
//         error:false,
//         msg:'',
//         color: ''
//     })
    
//  },10000)

//la funcion para cambia los datos
 const cambioDeEstado = (e) =>{
    //el pre opereitor ... copia algo, aqui estamos haciendo una copia del estado, es para que recuerde que usestade este vacio "", osea los inputs
    // e.target.name estamos sacando el name de cada propiedad de setForm y el e.target.value es el valor que le da el usuario
    setFormu ({...formu, [e.target.name]: e.target.value})
 }

  return (
    <>
     <form className="formu" onSubmit={validarFormu}>
        <div className="form-group mb-3">
            <input type="text" name="nombre" placeholder="Name" onChange={cambioDeEstado}  value={formu.nombre} />
        </div>
        <div className="form-group mb-3">
            <input type="email" name="email" placeholder="tuemail@ejemplo.com" onChange={cambioDeEstado}  value={formu.email} />
        </div>
        <div className="form-group mb-3">
            <input type="password" name="password" placeholder="Password" onChange={cambioDeEstado}  value={formu.password} />
        </div>
        <div className="form-group mb-3">
            <input type="password" name="ConfirmPassword" placeholder="Confirm your password" onChange={cambioDeEstado}  value={formu.ConfirmPassword} />
        </div>
        <button className="btn btn-success" type="submit">Registrarse</button>
     </form>
    </>
  )
}

export default Formulario