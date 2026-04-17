const mongoose = require('mongoose');

const MONGO_URI =
    'mongodb+srv://guilhermeoliveiraunipiaget_db_user:MRjoTByIr7j7d6gD@test.lf6rdwq.mongodb.net/cadastro?appName=Test'

async function connectDatabase() {
    await mongoose.connect(MONGO_URI)
    console.log('MongoDB conectado com sucesso')
}

module.exports = connectDatabase;