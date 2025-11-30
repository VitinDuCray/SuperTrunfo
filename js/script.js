// js/cartas.js



// Usamos const para garantir que nosso baralho não seja alterado acidentalmente.

const baralho = [

    {

        nome: 'Google',

        imagem: 'https://logospng.org/download/google/logo-google-4096.png',

        atributos: {

            'Usuários (em bilhões)': 4.3,

            'Inovação (0-10)': 9,

            'Receita (em bilhões $)': 282

        }

    },

    {

        nome: 'Apple',

        imagem: 'https://logospng.org/download/apple/logo-apple-4096.png',

        atributos: {

            'Usuários (em bilhões)': 1.8,

            'Inovação (0-10)': 10,

            'Receita (em bilhões $)': 394

        }

    },

    {

        nome: 'Microsoft',

        imagem: 'https://logospng.org/download/microsoft/logo-microsoft-4096.png',

        atributos: {

            'Usuários (em bilhões)': 1.4,

            'Inovação (0-10)': 8,

            'Receita (em bilhões $)': 211

        }

    },

    {

        nome: 'Amazon',

        imagem: 'https://logospng.org/download/amazon/logo-amazon-4096.png',

        atributos: {

            'Usuários (em bilhões)': 2.2,

            'Inovação (0-10)': 9,

            'Receita (em bilhões $)': 514

        }

    },

    // Dica: Peça para os alunos adicionarem mais 4 ou 6 cartas para o jogo ficar mais interessante!

    {

        nome: 'Meta (Facebook)',

        imagem: 'https://logospng.org/download/meta-platforms-inc/meta-platforms-inc-4096.png',

        atributos: {

            'Usuários (em bilhões)': 3.7,

            'Inovação (0-10)': 7,

            'Receita (em bilhões $)': 116

        }

    },

    {

        nome: 'Netflix',

        imagem: 'https://logospng.org/download/netflix/logo-netflix-4096.png',

        atributos: {

            'Usuários (em bilhões)': 0.23,

            'Inovação (0-10)': 8,

            'Receita (em bilhões $)': 31

        }

    },

    // 12 Novas Cartas

    { nome: 'NVIDIA', imagem: 'https://logospng.org/download/nvidia/nvidia-4096.png', atributos: { 'Usuários (em bilhões)': 0.3, 'Inovação (0-10)': 10, 'Receita (em bilhões $)': 60 } },

    { nome: 'Tesla', imagem: 'https://logospng.org/download/tesla/logo-tesla-1024.png', atributos: { 'Usuários (em bilhões)': 0.05, 'Inovação (0-10)': 10, 'Receita (em bilhões $)': 81 } },

    { nome: 'Samsung', imagem: 'https://logospng.org/download/samsung/logo-samsung-4096.png', atributos: { 'Usuários (em bilhões)': 2.0, 'Inovação (0-10)': 8, 'Receita (em bilhões $)': 234 } },

    { nome: 'Tencent', imagem: 'https://logospng.org/download/tencent/tencent-4096.png', atributos: { 'Usuários (em bilhões)': 1.5, 'Inovação (0-10)': 7, 'Receita (em bilhões $)': 82 } },

    { nome: 'Oracle', imagem: 'https://logospng.org/download/oracle/oracle-4096.png', atributos: { 'Usuários (em bilhões)': 0.4, 'Inovação (0-10)': 6, 'Receita (em bilhões $)': 50 } },

    { nome: 'Adobe', imagem: 'https://logospng.org/download/adobe/adobe-4096.png', atributos: { 'Usuários (em bilhões)': 0.25, 'Inovação (0-10)': 9, 'Receita (em bilhões $)': 17 } },

    { nome: 'Intel', imagem: 'https://logospng.org/download/intel/logo-intel-1024.png', atributos: { 'Usuários (em bilhões)': 1.0, 'Inovação (0-10)': 7, 'Receita (em bilhões $)': 63 } },

    { nome: 'IBM', imagem: 'https://logospng.org/download/ibm/logo-ibm-2048.png', atributos: { 'Usuários (em bilhões)': 0.5, 'Inovação (0-10)': 8, 'Receita (em bilhões $)': 60 } },

    { nome: 'SAP', imagem: 'https://logospng.org/download/sap/sap-4096.png', atributos: { 'Usuários (em bilhões)': 0.45, 'Inovação (0-10)': 6, 'Receita (em bilhões $)': 32 } },

    { nome: 'Salesforce', imagem: 'https://logospng.org/download/salesforce/salesforce-4096.png', atributos: { 'Usuários (em bilhões)': 0.15, 'Inovação (0-10)': 8, 'Receita (em bilhões $)': 31 } },

    { nome: 'Spotify', imagem: 'https://logospng.org/download/spotify/logo-spotify-4096.png', atributos: { 'Usuários (em bilhões)': 0.5, 'Inovação (0-10)': 7, 'Receita (em bilhões $)': 11 } },

    { nome: 'AMD', imagem: 'https://logospng.org/download/amd/logo-amd-1024.png', atributos: { 'Usuários (em bilhões)': 0.8, 'Inovação (0-10)': 9, 'Receita (em bilhões $)': 22 } }

];