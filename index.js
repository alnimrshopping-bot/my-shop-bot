const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('message', msg => {
    const text = msg.body.toLowerCase();

    if (text === 'منيو' || text === 'menu') {
        msg.reply('أهلاً بك في متجر النمر 🐯\n\n1- أسعار فري فاير (اكتب: .فري فاير)\n2- أسعار ببجي (اكتب: .ببجي)\n3- جروبات الشير\n\nللرجوع اضغط 0');
    }

    if (text === '.فري فاير' || text === '.free fire') {
        msg.reply('أسعار فري فاير حالياً: ....\n(اكتب 0 للرجوع)');
    }

    if (text === '.ببجي' || text === '.pubg') {
        msg.reply('أسعار ببجي حالياً: ....\n(اكتب 0 للرجوع)');
    }

    if (text === '0') {
        msg.reply('تم الرجوع للمنيو الرئيسي.. اكتب "منيو" للعرض.');
    }
});

client.initialize();
