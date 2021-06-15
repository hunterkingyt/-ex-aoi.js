module.exports = {
 name: "nuke",
 code: `
 $djsEval[
 
 const lol = d.message.channel.position
 d.message.channel.clone()
 .then(c => {
 d.message.channel.delete()
 c.setPosition(lol)
 c.send(  '<a:yes:802629858365669437> **Kanalı Nukeledim ab!** ' + d.message.author.tag)

 })
]
$onlyPerms[managechannels;**Bu Komutu Kullanabilmek İçin** \`Kanalları Yönet\` **Yetkisine sahip olman gerekiyor**]
$onlyBotPerms[managechannels;{title:hata}{description:**Bu Komutu Kullanabilmek İçin** \`Kanalları Yönet\` **Yetkisine sahip olman gerekiyor**}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823200629899788308/unknown.png}]
 `
}