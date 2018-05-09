const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime Tokat Atcağını Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor(` ${mesaj} ` + message.author.username)
    .setColor(3447003)
.setDescription(`Sana tokat attı. Yüzün pespembe`)
	.setImage(`http://2.bp.blogspot.com/-TOrNGY1vPUU/VdCrKZLjMGI/AAAAAAAAEts/azfdqqn70Iw/s1600/KEMAL_SUNAL_PATRONUN_KARISINA_TOKAT2.gif`)
	
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tokat',
  description: 'İstediğiniz Kişiye Tokat Atarsınız.',
  usage: 'tokat'
}