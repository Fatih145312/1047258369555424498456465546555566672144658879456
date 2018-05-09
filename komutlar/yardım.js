const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Kral CHAT™ Komutları")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `k-banned = Thor BAN zamanı! \nk-avatarım = Avatarınınızı Gösterir. \nk-herkesebendençay = Herkese Çay Alırsınız. \nk-koş = Koşarsınız.\nk-minecraft = Minecraft oynarsınız \nk-zula = Zula Oynarsınız. \nk-çayiç = Çay İçersiniz. \nk-çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nk-çayaşekerat = Çaya Şeker Atarsınız. \nk-yumruk-at = Yumruk Atarsınız. \nk-tokat Tokat yersiniz. \nk-dans Dans edersiniz. \nk-yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nk-sunucuresmi = BOT Sunucunun Resmini Atar. \nk-sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nk-kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Sunucu Yetkilisi Komutları**", `k-ban = İstediğiniz Kişiyi Sunucudan Banlar. \nk-kick  = İstediğiniz Kişiyi Sunucudan Atar. \nk-unban = İstediğiniz Kişinin Yasağını Açar. \nk-sustur = İstediğiniz Kişiyi Susturur. -MUTED- \nk-duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Botun Ana Komutları**", "k-yapımcı Yapımcının adını söyler \nk-yardım = BOT Komutlarını Atar. \nk-sunucu = Sunucumuzun davet linkini gönderir. \nk-bilgi = BOT Kendisi Hakkında Bilgi Verir. \nk-ping = BOT Gecikme Süresini Söyler. \nk-davet = BOT Davet Linkini Atar. \nk-istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı Komutları:**", " **Güvenlik Amacı İle Yapımcı Komutları Gösterilmiyor** ")
  .setFooter('**Kral Chat ürünüdür.**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
