import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3001/",
});

export interface propsFormData {
    espirro: boolean;
    coceira: boolean;
    obstrucao: boolean;
    coriza: boolean;
}
/*
export const enviarEmail = async (formData: propsFormData[]) => {
    try {
        const response = await api.post("/send", formData);
        return response.data;
    } catch (error: any) {
        throw new Error("Erro" + error.message);
    }
};
*/