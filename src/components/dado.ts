import axios from "axios";
import { useState } from "react";

type info = {
  etymology: string;
  meanings: string;
  partOfSpeech: string;
};
let dados: info[];

export const dado = async (texto: string): Promise<info[]> => {
  const response = await axios.get(
    `https://dicio-api-ten.vercel.app/v2/${texto}`
  );
  const dados = response.data;
  return dados;
};

export const sinonimo = async (texto: string): Promise<string[]> => {
  const response = await axios.get(
    `https://dicio-api-ten.vercel.app/v2/sinonimos/${texto}`
  );
  const sino = response.data;
  return sino;
};
