import { useEffect } from "react";
import styles from "./BlocoNeve.module.css";

export default function BlocoNeve() {
    
    useEffect(()=> {
        const snowContainer = document.createElement("div");
        snowContainer.className = styles.snowContainer;
        document.body.appendChild(snowContainer);

        const createSnowflake = ()=>{
            const snowflake = document.createElement("div");
            snowflake.className = styles.snowflake;

            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.top = `${Math.random() * 100}vh`;

            snowflake.style.animationDuration = `${2+ Math.random() *3}s`;
            snowflake.style.opacity = Math.random().toString();
            snowContainer.appendChild(snowflake);

            snowflake.addEventListener("animationend",()=>{
                snowflake.remove();
            });
        };

        const interval = setInterval(createSnowflake, 300);

        setTimeout(()=>{
            clearInterval(interval);
            snowContainer.remove();
        },10000);

        return()=>{
            clearInterval(interval);
            snowContainer.remove();
        }
        
    },[])
    return null;
}