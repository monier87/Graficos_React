import axios from 'axios';

export const fetchData = async () => {
    try {
        const response = await axios.get('<URL_de_la_API>');
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener los datos');
    }
};
