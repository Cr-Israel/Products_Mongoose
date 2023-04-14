const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://0.0.0.0:27017/testemongoose2');
    console.log('Conectou ao MongoDB com Mongoose!');
};

main().catch(err => console.log('Deu um erro aqui na conexação com o Mongoose: ' + err));

module.exports = mongoose;