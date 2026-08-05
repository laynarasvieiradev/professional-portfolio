import axios from 'axios'

const api = axios.create({
  baseURL: 'https://sheets.googleapis.com/v4/spreadsheets/' + import.meta.env.VITE_GOOGLE_SHEETS_ID,
  timeout: 10000,                     
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;

