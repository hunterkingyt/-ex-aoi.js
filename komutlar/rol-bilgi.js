module.exports = {
name: "rol-bilgi",
  aliases:["rb"],
code:`
$title[İşte rol bilgileri]
$addField[Rol kuruluş tarihi;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$findRole[$mentionedRoles[1]];time];and;ve;1];seconds;Saniye;1];minutes;Dakika;1];hours;Saat;1];days;Gün;1];weeks;Hafta;1];months;Ay;1];years;Yıl;1];second;Saniye;1];minute;Dakika;1];hour;Saat;1];day;Gün;1];week;Hafta;1];month;Ay;1];year;Yıl;1]]
$addField[Rol pozisyonu;$rolePosition[$mentionedRoles[1]]]
$addField[Role sahip kullanıcı sayısı;$roleMembersCount[$mentionedRoles[1]]]
$addField[Rol ID’si;$mentionedRoles[1]]
$addField[Rol adı;$roleName[$mentionedRoles[1]]]
$addField[Rol yetkileri;$rolePerms[$mentionedRoles[1]]]
$color[$getRoleColor[$mentionedRoles[1]]]$onlyIf[$roleExists[$mentionedRoles[1]]==true;Etiketlediğin rolü bulamadım]
$onlyIf[$mentionedRoles[1]!=;Bilgilerini görmek istediğin rolü etiketleyerek belirtmen gerekiyor.] $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$mentionedRoles[1]];Bilgilerini görmek istediğin rol senin rolünden yüksekte.]`
}