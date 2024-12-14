import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";



export default function MinhaConta() {
    return(
        <Form>
            <div className="p-5 rounded-md grid " >
                <div className=" grid gap-3 mb-9">
                    <Label htmlFor="Name" className="">Nome</Label>
                    <Input type="text" id="Name" placeholder="Papainoel silva"/>
                </div>

                <div className=" grid gap-3 mb-9">
                    <Label htmlFor="password" className="">password</Label>
                    <Input  
                        type="password" 
                        id="password"
                        placeholder="Digite sua senha"
                        className="text-3xl"
                    />
                </div>
                
                <Button className="
                    bg-zinc-50 text-preto hover:bg-preto hover:text-zinc-50
                    transition-colors duration-300
                
                ">
                    Entrar
                </Button>
                <Link to={"new"} className="mt-3 text-center capitalize">Criar conta</Link>
            </div>
        </Form>
    )
}