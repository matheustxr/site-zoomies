/*
import { useRef, FormEvent, ChangeEvent, useState } from "react";
import { enviarEmail } from "../../api/api.js";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface FormData {
  nome: string;
  telefone: string;
  email: string;
  mensagem: string;
  propostaFile: File | null;
  propostaName: string;
}


export const Formulario = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
    propostaFile: null,
    propostaName: ""
  });

  const propostaFileRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleFileUpload = () => {
    const file = propostaFileRef.current?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log("Arquivo:", reader.result);
        setFormData((prevData) => ({
          ...prevData,
          propostaFile: file,
          propostaName: file.name
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await enviarEmail(formData);
    } catch (error) {
      console.error("Something is wrong", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} method="post" className="flex flex-col ">
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        id="nome"
        name="nome"
        required
        onChange={handleChange}
        className="mb-5 h-[50px] max-w-[320px] md:max-w-none md:w-[600px] rounded text-black px-2"
      />

      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        required
        onChange={handleChange}
        className="mb-5 h-[50px] max-w-[320px] md:max-w-none md:w-[600px] rounded text-black px-2"
      />

      <label htmlFor="telefone">Telefone:</label>
      <input
        type="text"
        id="telefone"
        name="telefone"
        required
        onChange={handleChange}
        className="mb-5 h-[50px] max-w-[320px] md:max-w-none md:w-[600px] rounded text-black px-2"
      />

      <label htmlFor="mensagem">Mensagem:</label>
      <textarea
        id="mensagem"
        name="mensagem"
        rows={8}
        cols={30}
        required
        onChange={handleChange}
        className="mb-5  max-w-[320px] md:max-w-none  md:w-[600px] rounded text-black px-2"
      />

      <label htmlFor="proposta">Proposta:</label>
      <input
        id="proposta"
        type="file"
        name="proposta"
        ref={propostaFileRef}
        onChange={handleFileUpload}
        className="mb-5 max-w-[320px] md:max-w-none"
      />

      <Button
        type="submit"
        variant="contained"
        className="max-w-[320px]  md:max-w-none bg-[#ec5f1a] shadow-[0px_0px_20px_#ec5f1a] hover:bg-[#eab308] hover:shadow-[0px_0px_20px_#eab308] transition-all duration-200 mt-5"
        endIcon={<SendIcon />}
      >
        Enviar
      </Button>
    </form>
  );
};
*/