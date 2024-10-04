
import { useState } from "react"
import emailjs from '@emailjs/browser'


const Contato =()=>{

    //Hook-useState- manipula a variavel

    const [name,setName]= useState("") ;
    const [email,setEmail]= useState("");
    const [message,setMessage]= useState("");

    //criando a função enviarEmail


    const enviarEmail =(e)=>{

        if(name ==="" || email ==="" || message ===""){
            alert("Preencha todos os campos")
            return;
        }else{
            //previne qualquer alteração na pagina dentro do formulario
            e.preventDefault();

                //declarando um template com as variaveis 
            const template={
                from_name: name,
                email:email,
                message:message
            }
            //criando o metodo da função
            //serviceID, templateID, templateParams, publicKey
            emailjs.send("service_hssen7l","template_ce3bogp",template,"kWGTLvvM-6WAfASAx")
                .then((res)=>{
                    console.log("Email enviado", res.status)
                    setName(''),
                    setEmail(''),
                    setMessage('')
                },(error)=>{
                    console.log("Erro", error)
                })
        }

    }



    return (
        <section className="contato">
            
            <h1 className="titulo">Contato</h1>
            <form className="form" onSubmit={enviarEmail}>
                <input
                    type="text"
                    className="w-input"
                    placeholder="Digite seu Nome"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                   <input
                    type="text"
                    className="w-input"
                    placeholder="Digite seu Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                  <textarea
                    type="text"
                    className="w-input"
                    placeholder="Digite sua mensagem"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                />      

                <button type="submit" className="btn">Enviar</button>        
                
            </form>
        </section>
    )
}
export default Contato