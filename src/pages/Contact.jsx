import {useState} from 'react'
import '../styles/Contact.css'
const Contact = () => {
    const [formulario,setFormulario] = useState({name:"",email:"",message:""})
    const handleSumbit = async (e) =>{
        e.preventDefault();
        const datos = {
            service_id: import.meta.env.VITE_SECRET_SERVICE_ID,
            template_id: import.meta.env.VITE_SECRET_TEMPLATE_ID,
            user_id: import.meta.env.VITE_SECRET_USER_ID,
            template_params: {
                from_name:formulario.name,
                from_email:formulario.email,
                to_name:"Matias",
                message:formulario.message
            },
        }
        let peticion = {
            method:"POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(datos)
          }
        const resultado = await fetch('https://api.emailjs.com/api/v1.0/email/send',peticion)
        if (resultado.ok){
            console.log('exito')

        }else{
            const respuesta = await resultado.json()
            console.log(respuesta)
        }
    }
return (
    <div className="contactContainer">
        <h1>Contactame</h1>
        <form onSubmit={handleSumbit}>
            <div className="wrapper">
                <input type="text" placeholder='Nombre' name="name" id="name" value={formulario.name} onChange={(e)=>setFormulario({...formulario, name: e.target.value})}/>
                <input type="email" placeholder="Email" name="email" id="email" value={formulario.email} onChange={(e)=>setFormulario({...formulario, email: e.target.value})}/>
                </div>
                <textarea name="message" placeholder='Feedback sobre mi sitio, ofertas laborales, presupuestos, etc.' id="message" value={formulario.message} onChange={(e)=>setFormulario({...formulario, message: e.target.value})}></textarea>
                <button>Enviar Mensaje</button>
        </form>
    </div>
)
}

export default Contact;