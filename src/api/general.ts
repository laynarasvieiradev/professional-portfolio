import api from './axios'

const getGeneralInfo = async () => {   
    const response = await api.get(`/values/Geral`, {
        params: {
            key: import.meta.env.VITE_GOOGLE_SHEETS_KEY,
        },
    });

    const values = response.data.values[1] || [];
    return values;
};

export default getGeneralInfo