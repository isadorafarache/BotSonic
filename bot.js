import { Client, IntentsBitField } from "discord.js";
import * as dotenv from "dotenv";
dotenv.config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

    ],

});

//esse código faz com que toda vez que alguém do servidor digitar "ping" o bot automaticamente responderá "pong" no chat.

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }

    if (message.content === 'ping') {
      message.reply('Pong!');
    }
});
    
  
client.on('ready', () => {
    console.log(`👉👈${client.user.tag}está online!`);
});


client.login(process.env.TOKEN); //esse env.token é uma forma de deixar a chave mais segura, pra informação não ficar exposta