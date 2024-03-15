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
    <div className='flex flex-col bg-gray-600 items-center'>
      <h1 className=''>Lista de Presentes</h1>
      <ul>
        <h3>VIDROS E LOUÇAS</h3>
        {vidros.map((item) => (
          <li className=''
            key={item.id}>{item.item}</li>
        ))}
      </ul>
      <ul>
        <h3>INOX SIMILARES AÇO INOX / LOUÇA / CERÂMICA</h3>
        {inox.map((item) => (
          <li key={item.id}>{item.item}</li>
        ))}
      </ul>
      <ul>
        <h3>UTILIDADES DOMÉSTICAS DIVERSAS</h3>
        {util.map((item) => (
          <li key={item.id}>{item.item}</li>
        ))}
      </ul>
      <ul>
        <h3>PANELAS</h3>
        {panelas.map((item) => (
          <li key={item.id}>{item.item}</li>
        ))}
      </ul>
      <ul>
        <h3>ELETRODOMÉSTICOS</h3>
        {eletro.map((item) => (
          <li key={item.id}>{item.item}</li>
        ))}
      </ul>
      <ul>
        <h3>CAMA MESA E BANHO</h3>
        {cama.map((item) => (
          <li key={item.id}>{item.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPresentes;
