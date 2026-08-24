import api from './axios'

const getPortfolioInfo = async () => {   
    const response = await api.get(`/values/Portfolio`, {
        params: {
            key: import.meta.env.VITE_GOOGLE_SHEETS_KEY,
        },
    });

    const values = response.data.values || [];
    return values;
};

export default getPortfolioInfo