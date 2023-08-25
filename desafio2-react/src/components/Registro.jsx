import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react"
import Formulario from "./Formulario"
import Alert from "./Alert"
import SocialButton from "./SocialButton"


const Registro = () => {
    const [atento,setAtento] = useState({
            error: "",
            msg:"",
            color:"",
        
    })
  return (
    <>
    <h1>Crea una cuenta</h1>
    <SocialButton FacebookIcon={FaFacebook } GithubIcon={FaGithub} LinkedinIcon={FaLinkedinIn}  />
    <Formulario setAtento={setAtento} />
    {atento.msg && <Alert color={atento.color}>{atento.msg}</Alert>}
    
    </>
  )
}

export default Registro