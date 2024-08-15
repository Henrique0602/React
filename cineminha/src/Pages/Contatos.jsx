function Contato() {

    return (
        <>

            <body className="bg-black w-full h-screen p-2">
                <h1 className="text-white font-bold text-2xl mt-5 mb-24 ml-12">Entre em contato Conosco</h1>
                <div className="bg-gray-600 w-11/12 h-4/6 flex justify-center items-center m-14 rounded-2xl ">
                    <div >

                        <div className="flex flex-row w-96 gap-10">
                            <input className=" h-12 mb-10 flex justify-start bg-gray-600 border border-white decoration-none p-2 
                    rounded-2xl " type="text" name="" id="" placeholder="Nome" />


                            <input className=" h-12 mb-10 flex justify-start bg-gray-600 border border-white decoration-none p-2 
                    rounded-2xl " type="email" name="" id="" placeholder="Email" />

                          
                        </div>

                        <div className="flex flex-col">
                        <textarea className=" ml-10 h-12 mb-10 flex justify-center items-center bg-gray-600 border border-white decoration-none p-2 
                    rounded-2xl " type="email" name="" id="" placeholder="Mensagem" />
                        </div>


                        <div className="flex justify-center">
                            <button className=" w-36 h-10 rounded-xl bg-transparent bg-gray-600 border text-white hover:bg-gray-400">Enviar</button>
                        </div>
                    </div>
        
                </div>
            </body>

        </>

    );
}
export default Contato;