module.exports = {
name: "reboot", 
aliases:['restart','yeniden-başlat','r'],
code: `
$reboot[index.js]
$wait[1s]
$channelSendMessage[$channelID;{title:**Yeniden Başlatma İşlemi**}{description:$username[$clientID] **Yeniden başlatılıyor!** } {color:RED}]
$onlyForIDs[$botOwnerID;<a:792704133903810560:806932613322768404> **Bu komutu sadece sahibim kullanabilir**]
`
}