import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Outlet } from "react-router-dom";


export default function Login(){

    return(
        <div 
            className=" 
                bg-neve bg-cover h-screen w-screen  flex justify-center items-center 
                "
            >
           
            <Card className=" 
                w-[780px]  bg-vermelho text-zinc-200  
                grid grid-cols-2 border-preto 
            ">
                <CardHeader className="bg-zinc-100 rounded-xl">
                    <CardTitle className="
                        text-center text-preto text-2xl  font-nunito
                    ">
                        Conecte-se e prepare-se para a surpresa!
                    </CardTitle>
                    <div className="">
                        <img className="
                            h-full mt-2
                        " 
                            src="amigosPre.jpg" 
                            alt="imagem com amigos" 
                        />
                    </div>
                   
                </CardHeader >
                <CardContent className="mt-14">
                    <div>
                        <Outlet/>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}