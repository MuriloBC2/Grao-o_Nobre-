import React from "react";  
import logo from "../assets/logo.png";
import cafe_inicio from "../assets/cafe_inicio.png";
import arte_fundo_inicial from "../assets/arte_fundo_inicio.png";
import Navbar from "../components/navbar.jsx";

const Inicial = () => {
  return (
 <>
    <Navbar/>
   <div  className="h-screen w-screen  flex justify-center items-center bg-[url('assets/arte_fundo_inicio.png')] bg-opacity-25 bg-cover flex flex-row items-center justify-center">
   <div className="flex flex-col w-200 h-150 border-2 text-[#C0977D] font-bold ">
    <h1 className="text-[60px] ">O pão que você ama, agora <b>entregue em minutos</b></h1>
    <p>Com o <b>Minha Sacola</b>, você seleciona seus pães, cafés e doces favoritos e nosso motoqueiro leva o sabor até você em minutos</p>
    <div>
        <button>Minha Sacola</button>
        <button>Como Funcioa ?</button>
    </div>
   </div>
    
   </div>

</>
  )
}
 export default Inicial;