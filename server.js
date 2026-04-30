const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// INI MAGIC-NYA BRO! 
// Baris ini ngasih tau server: "Kalau ada yang nyari /pages/latihan, tolong otomatis cariin file latihan.html ya!"
app.use(express.static(path.join(__dirname), { 
    extensions: ['html'] 
}));

// API User yang kemarin tetep ada dan jalan
app.get('/api/user/:uid', (req, res) => {
    const userData = {
        firstName: "Bijak!",
        fullName: "Bijak Assidik P. R.",
        school: "SMAN 1 Padamara • Kelas 12",
        avatarUrl: "https://ui-avatars.com/api/?name=Bijak+Assidik&background=3b82f6&color=fff&size=200",
        health: 90,
        energy: 72,
        level: 14,
        currentXp: 18600,
        maxXp: 20000
    };
    res.json(userData);
});

app.listen(port, () => {
    console.log(`PintarHub Local Server jalan di http://localhost:${port}`);
    console.log(`Clean URLs aktif!`);
});