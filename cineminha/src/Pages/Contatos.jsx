import { useState } from "react";
import  emailjs from '@emailjs/browser'

function Contato() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            alert("Preencha todos os campos")
            return;
        }

        const templateParams = {
            from_name :  name,
            message : message,
            email: email
        }

       emailjs.send("service_tpy3d8t" , "template_ep0ysy8", templateParams, "g4DOz5nrOaQ3RBIxE")
       .then((response)=> {
        console.log("Email enviado" , response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')


       }, (err)=>{
        console.log('ERRO: ', err)

       })
    }

    return (
        <>

            <body className="bg-black w-full h-screen p-2">
                <h1 className="text-white font-bold text-2xl mt-5 mb-24 ml-12">Entre em contato Conosco</h1>
                <div className="bg-gray-600 w-11/12 h-4/6 flex justify-center items-center m-14 rounded-2xl ">


                    <form action="form" onSubmit={sendEmail}>

                        <div className="flex flex-row w-96 gap-10">
                            <input className=" h-12 mb-10 flex justify-start bg-gray-600 border border-white decoration-none p-2 
                    rounded-2xl " type="text" name="" id="" placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name}/>


                            <input className=" h-12 mb-10 flex justify-start bg-gray-600 border border-white decoration-none p-2 
                    rounded-2xl " type="email" name="" id="" placeholder="Email" onChange={(e) => setEmail(e.target.value)}  value={email}/>


                        </div>

                        <div className="flex flex-col">
                            <textarea className=" ml-10 h-12 mb-10 flex justify-center items-center bg-gray-600 border border-white decoration-none p-2 
                    rounded-2xl " type="email" name="" id="" placeholder="Mensagem" onChange={(e) => setMessage(e.target.value)}  value={message}/>
                        </div>


                        <div className="flex justify-center">
                            <button className=" w-36 h-10 rounded-xl bg-transparent bg-gray-600 border text-white hover:bg-gray-400" value="Enviar">Enviar</button>
                        </div>

                    </form>
                </div>
            </body>

        </>

    );
}
export default Contato;