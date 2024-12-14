import BlocoNeve from "@/components/blocoNeve/blocoNeve";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";



export default function LandingPage(){

    const ano = new Date().getFullYear();
    return(
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <BlocoNeve />
            <div className="bg-vermelho md:bg-none md:h-full text-zinc-50">
                <header className="mt-5 md:flex-row ml-10 md:ml-10 lg:mt-12 lg:ml-16 xl:ml-28 2xl:ml-48">
                    <h1 className="
                        font-numans font-normal text-3xl  sm:text-4xl
                    "
                    >
                        GiftMatch
                    </h1>
                </header>
                <section className="mt-10 md:mt-16 lg:mt-40">
                    <h1 className="
                        uppercase font-nunito font-light xl:w-[550px] ml-10
                        text-xl md:text-2xl xl:text-3xl
                        md:ml-10 lg:ml-16 xl:ml-28 2xl:ml-48 
                        ">
                        Transforme seu Amigo Secreto em algo inesquecível!
                    </h1>

                    <h3 className="
                        xl:w-[550px] mt-10 md:mt-14 uppercase font-nunito font-medium 
                        text-sm md:text-lg lg:text-lg xl:text-xl
                        ml-10 md:ml-12 lg:ml-16 xl:ml-28 2xl:ml-48 
                        ">
                        Organize, sorteie e compartilhe seu amigo secreto de forma simples e rápida.
                    </h3>

                    <button className="
                        mt-10 mb-10 p-4 w-64 bg-roxoCla rounded-md  md:w-full md:max-w-[430px] font-numans 
                        ml-10 md:ml-12  md:p-5 lg:ml-16 xl:ml-28 2xl:ml-48
                        border-roxoEs shadow-xl transform hover:-translate-y-1 
                        transition duration-300
                    "
                    > 
                        <Link to={"/login"}>
                            Organizar Amigo Secreto
                        </Link>
                    </button>
                </section>
            </div>

                {/* coluna 2 */}
                <div className=" hidden md:block bg-roxoEs">
                
                    <header className="col-span-2 ml-8 items-center mt-12 text-zinc-50 ">
                    <nav className="flex gap-8 text-2xl font-nunito font-semibold">
                            <a href="#">HOME</a>
                            <a href="#">SEVICE</a>
                            <a href="#">Client Stories</a>
                        </nav>
                    </header>
                    <section className="mt-32 flex items-center justify-center mb-32">
                        <img 
                            src="casapapaiNoel.webp"
                            alt="casa do papai noel" 
                            className="
                                w-[560px] h-[500px]
                            "
                        />
                    </section>
                </div>
            </div>
            <div className="bg-preto text-white ">
                <div className="flex justify-center ">
                    <div className="flex gap-24">
                        <img className="hidden sm:block" src="fitaverde.svg" alt="fita verde" />
                        <img className="hidden sm:block" src="fitaroxo.svg" alt="fita roxo" />
                    </div>
                    
                    <h1 className="
                        text-4xl mx-32 mt-12 font-nunito font-medium uppercase
                    ">
                        Funcionalidades
                    </h1>

                    <div className="flex gap-24">
                        <img className="hidden sm:block" src="fitaBranca.svg" alt="" />
                        <img className="hidden sm:block" src="fitaRed.svg" alt="" />
                    </div>
                </div>

                {/* Seções dos recursos */}
                <div className="mt-20 flex flex-col md:flex-row md:justify-around gap-8 md:gap-0 px-4 md:px-0">
                    {/* Seção 1 */}
                    <section className="flex flex-col items-center text-center md:w-1/3">
                    <img className="w-24 h-24 md:w-32 md:h-32 mb-4" src="calendario.svg" alt="" />
                    <span className="text-sm md:text-base w-64 md:w-72">
                        Simplifique o planejamento do seu Amigo Secreto com poucos cliques.
                    </span>
                    </section>

                    {/* Seção 2 */}
                    <section className="flex flex-col items-center text-center md:w-1/3">
                    <img className="w-20 h-24 md:w-28 md:h-32 mb-4" src="caixa.svg" alt="" />
                    <span className="text-sm md:text-base w-64 md:w-72">
                        Deixe o sistema sortear os participantes de forma justa e rápida.
                    </span>
                    </section>

                    {/* Seção 3 */}
                    <section className="flex flex-col items-center text-center md:w-1/3">
                    <img className="w-24 h-24 md:w-32 md:h-32 mb-4" src="caixaPre.svg" alt=""/>
                    <span className="text-sm md:text-base w-64 md:w-72">
                        Deixe o sistema sortear os participantes de forma justa e rápida.
                    </span>
                    </section>
                </div>
            
                <div className="mt-40 mb-40">
                    <h1 className="
                        text-4xl text-center font-nunito font-medium mb-40
                        uppercase
                    ">
                        Depoimentos
                    </h1>
                    <div className="mt-12 flex justify-center gap-3 flex-wrap ">
                        {/* Card */}
                        <div className="border rounded-md shadow-lg max-w-md w-full bg-verde p-6" >
                            {/* imagem do Usaário */}
                            <div className= "flex items-center mb-4" >
                                <div className="w-12 h-12 rounded-full bg-gray-950 overflow-hidden">
                                    <img src="user.svg" alt="" />
                                </div>
                                <div className="ml-4">
                                    <h2
                                        className="text-lg text-zinc-50 font-semibold"
                                    >
                                        Zezinho
                                    </h2>
                                    <p className="text-sm text-zinc-50">
                                        2 horas atrás
                                    </p>
                                </div>
                            </div>
                            {/* texto do Comentario*/}
                            <p className="text-zinc-50 leading-relaxed">
                                Este é um exemplo de comentário feito por um usuário. Pode conter
                                opiniões, sugestões ou qualquer outro conteúdo relacionado ao tema.
                            </p>
                        </div>
                        {/* Card */}
                        <div className="border rounded-md shadow-lg max-w-md w-full bg-verde p-6" >
                            {/* imagem do Usaário */}
                            <div className= "flex items-center mb-4" >
                                <div className="w-12 h-12 rounded-full bg-gray-950 overflow-hidden">
                                    <img src="user.svg" alt="" />
                                </div>
                                <div className="ml-4">
                                    <h2
                                        className="text-lg text-zinc-50 font-semibold"
                                    >
                                        Zezinho
                                    </h2>
                                    <p className="text-sm text-zinc-50">
                                        2 horas atrás
                                    </p>
                                </div>
                            </div>
                            {/* texto do Comentario*/}
                            <p className="text-zinc-50 leading-relaxed">
                                Este é um exemplo de comentário feito por um usuário. Pode conter
                                opiniões, sugestões ou qualquer outro conteúdo relacionado ao tema.
                            </p>
                        </div>
                         {/* Card */}
                         <div className="border rounded-md shadow-lg max-w-md w-full bg-verde p-6" >
                            {/* imagem do Usaário */}
                            <div className= "flex items-center mb-4" >
                                <div className="w-12 h-12 rounded-full bg-gray-950 overflow-hidden">
                                    <img src="user.svg" alt="" />
                                </div>
                                <div className="ml-4">
                                    <h2
                                        className="text-lg text-zinc-50 font-semibold"
                                    >
                                        Zezinho
                                    </h2>
                                    <p className="text-sm text-zinc-50">
                                        2 horas atrás
                                    </p>
                                </div>
                            </div>
                            {/* texto do Comentario*/}
                            <p className="text-zinc-50 leading-relaxed">
                                Este é um exemplo de comentário feito por um usuário. Pode conter
                                opiniões, sugestões ou qualquer outro conteúdo relacionado ao tema.
                            </p>
                        </div>
                    </div>
                </div>
                <footer className="bg-vermelho relative pb-28 ">
                    <div className=" flex ml-10 md:flex-row md:justify-center md:items-center ">
                        <h1 className="
                            lg:text-lg xl:text-3xl  md:w-1/2 xl:w-2/3  mt-12 font-nunito uppercase mb-12
                        ">
                            Não perca a magia do Amigo Secreto! Cadastre-se e organize o melhor sorteio com facilidade.
                        </h1>
                    </div>
                    {/* formulario */}
                    <div className="flex flex-col justify-center ml-10 md:flex-row md:justify-center md:gap-8">

                        <div className=" mb-6 w-80">
                            <Label 
                                htmlFor="Name"
                            >
                                Name
                            </Label>

                            <Input 
                                type="text" 
                                id="Name" 
                                placeholder="Name" 
                            />
                        </div>

                        <div className="mb-6 w-80">
                        <Label 
                            htmlFor="Email"
                        >
                            Email
                        </Label>
                        <Input 
                            type="email" 
                            id="Email"
                            placeholder="Email"
                            
                        />
                        </div>
                        <button className="
                          bg-roxoCla text-sm w-80 lg:w-28 xl:w-48 h-12 rounded-lg mt-4
                            shadow-xl transform hover:-translate-y-1 transition
                            duration-300
                        ">
                            Comece Agora
                        </button>
                    </div>
                    {/* mato */}
                    <img className="
                       w-96 2xl:w-[450px]  h-auto absolute bottom-0 hidden sm:block
                    " 
                        src="mato.svg" 
                        alt="Mato de natal"
                    />

                    <h1 className="
                       text-sm flex justify-center absolute bottom-0 left-8 md:left-0 md:right-3 font-numans
                    ">
                        ©Todos os direitos reservado.GiftMatch{ano}
                    </h1>
                </footer>
            </div>
        </div>
    )
}