import { Card, CardHeader } from "@/components/ui/card";

export default function CriacaoDeEventos() {
    return(
        <div>
            <header 
                className="
                    pt-10 text-center text-3xl font-nunito font-semibold h-28 
                    bg-zinc-900 text-zinc-200
                    "
                >
                    Painel do seu Amigo Secreto
            </header>
            <div
                className="
                    bg-preto h-svh
                    grid grid-cols-2 gap-3 p-10
                ">
                <div className="">
                    <Card>
                        <CardHeader 
                            className="
                                text-center
                            "
                        >
                            Criar sorteio
                        </CardHeader>
                    </Card>
                    <div className="pt-4">
                        <Card>
                            <CardHeader 
                                className="
                                    text-center
                                "
                            >
                                Formulario de cadastro
                            </CardHeader>
                        </Card>
                    </div>
                </div>
                <div>
                    <Card>
                        <CardHeader 
                            className="
                                text-center
                            "
                        >
                            Ver lista de amigos
                        </CardHeader>
                    </Card>
                    
                </div>
                
            </div>
        </div>
    )
}