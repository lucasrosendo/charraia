'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Item {
  id: number;
  item: string;
}

const ListaPresentes = () => {
  const [panelas, setPanelas] = useState<Item[]>([]);
  const [eletro, setEletro] = useState<Item[]>([]);
  const [inox, setInox] = useState<Item[]>([]);
  const [cama, setCama] = useState<Item[]>([]);
  const [util, setUtil] = useState<Item[]>([]);
  const [vidros, setVidros] = useState<Item[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };
  const fetchPanelas = async () => {
    try {
      const response = await axios.get('./data/panelas.json');
      setPanelas(response.data.itens);
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
  };
  const fetchCamaMesa = async () => {
    try {
      const response = await axios.get('./data/cama-mesa-banho.json');
      setCama(response.data.itens);
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
  };
  const fetchEletro = async () => {
    try {
      const response = await axios.get('./data/eletrodomesticos.json');
      setEletro(response.data.itens);
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
  };
  const fetchInox = async () => {
    try {
      const response = await axios.get('./data/inox-louca-ceramica.json');
      setInox(response.data.itens);
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
  };
  const fetchUtilidades = async () => {
    try {
      const response = await axios.get('./data/utilidades.json');
      setUtil(response.data.itens);
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
  };
  const fetchVidros = async () => {
    try {
      const response = await axios.get('./data/vidros-loucas.json');
      setVidros(response.data.itens);
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
  };

  useEffect(() => {
    fetchPanelas();
    fetchCamaMesa();
    fetchEletro();
    fetchInox();
    fetchUtilidades();
    fetchVidros();
  }, []);

  return (
    <div className='flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500 items-center'>
      <h1 className=''>Lista de Presentes</h1>

      <div>
        <h3 className='cursor-pointer' onClick={handleDropdownClick}>VIDROS E LOUÇAS</h3>
        {showDropdown && (
          vidros.map((item) => (
            <div
              className='gap-2 flex justify-between items-center w-full p-2 bg-white rounded-md m-2'
              key={item.id}>{item.item}
              <div className='flex gap-4 items-center'>
                <input className='rounded-md h-8 p-2 w-60 bg-slate-200' type="text" placeholder='Coloque seu nome aqui' />
                <button className='bg-green-300 rounded-md h-8 w-14'>salvar</button>
              </div>
            </div>
          ))
        )}
      </div>
      <h3>INOX SIMILARES AÇO INOX / LOUÇA / CERÂMICA</h3>
      <h3>UTILIDADES DOMÉSTICAS DIVERSAS</h3>
      <h3>PANELAS</h3>
      <h3>ELETRODOMÉSTICOS</h3>
      <h3>CAMA MESA E BANHO</h3>

    </div>
  );
};

export default ListaPresentes;
