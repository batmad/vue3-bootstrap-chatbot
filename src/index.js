import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv'; // Import dotenv

// Inisialisasi dotenv untuk memuat variabel lingkungan
dotenv.config();

// Inisialisasi aplikasi
const app = express();
const PORT = process.env.PORT || 3000;

// Menggunakan body-parser untuk menguraikan JSON
app.use(bodyParser.json());

// Menyajikan file statis dari folder public
app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')));

// Rute untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public', 'index.html'));
});

// Endpoint untuk menerima pesan dari chatbot
app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const botResponse = await processMessage(userMessage);
        res.json({ reply: botResponse });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fungsi untuk memproses pesan dengan API dari URL baru
const processMessage = async (message) => {
    const yourRequest = encodeURIComponent(message);

    const response = await fetch(`https://free-unoficial-gpt4o-mini-api-g70n.onrender.com/chat/?query=${yourRequest}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });

    const data = await response.json();
        
    return data.results; // Mengembalikan data sebagai respons dari chatbot
};

// Mulai server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
