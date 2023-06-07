import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './media/menu.mp3'
let pp = './main/Menu.jpg'
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║ ◉—*𝐓𝐡𝐞 DARK SONIC - 𝐁𝐨𝐭 —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗛ola, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Owner:* *IMALSHA*
║➤ *NB:* wa.me/94718628230
║➤ *Bot ofc:* wa.me/94718628230
║➤ *Date:* ${date}
║➤ *Run time:* ${uptime}
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯
${readMore}
┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕆𝕋 𝕆𝔽ℂ 𝕆 𝕊𝕌𝔹 𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Daek sonic Bot oficial*'}
┗━━━━━━━━━━━━━━━━┛

┠━━〈 ❤️‍🔥 *Owner* ❤️‍🔥 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ self, public,
⬡│▸ setdp, post
⬡│▸ join, bye
⬡│▸ listonline, listgc
⬡│▸ listpc, cpp, getcase
⬡│▸ bangroup, block, 
⬡│▸ unblock, broadcast,
⬡│▸ ban add, ban del
┬│▸ 
╰────────────────···▸
┠━━〈 ⭕ *Group* ⭕ 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ add, remove, tagall
⬡│▸ promote, demote, revoke
⬡│▸ hidetag, groupsetting 
⬡│▸ grouplink, setgcpp
⬡│▸ setname, setdesc,leveling
⬡│▸ group, nsfw, nsnfwmenu
┬│▸
╰────────────────···▸
┠━━〈 ❗ *Anti Link ❗* 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ antilinkgc, antilinktg
⬡│▸ antilinktt, antilinkytch
⬡│▸ antilinkytvid, antilinkig
⬡│▸ antilinkfb, antilinktwit
⬡│▸ antilinkall, antiwame
┬│▸
╰────────────────···▸
┠━━〈 🔍 *Search* 🔎 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ play, ytmp3, ytmp4 
⬡│▸ yts, lyrics, movie
⬡│▸ google, gimage, pinterest
⬡│▸ image, wallpaper
⬡│▸ searchgc, happymod
⬡│▸ wikimedia, ringtone
⬡│▸ anime, animestory
⬡│▸ manga, ringtone
┬│▸
╰────────────────···▸
┠━━〈 📈 *Economy* 📈 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ daily, wallet
⬡│▸ bank, bankupgrade
⬡│▸ deposit, withdraw 
⬡│▸ rob / attack
⬡│▸ transfer / give
⬡│▸ wealth / ritual
┬│▸
╰────────────────···▸
┠━━〈 🛠️ *Convert* 🛠️ 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ sticker, toimg, tovideo
⬡│▸ togif, steal, stickermeme
⬡│▸ emojimix, tourl, tomp3, toaudio
┬│▸
╰────────────────···▸
┠━━〈 🎼 *Audio* 🎼 〉━━
│╭───────────────···▸
┴│▸ 
⬡│▸ bass, tempo, blown,
⬡│▸ robot, slow, squirrel
⬡│▸ deep, earrape, fast,
⬡│▸ fat, nightcore, reverse,
┬│▸
╰────────────────···▸
┠━━〈 🌌 *Downloader* 🌌 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ ytvideo, mediafire, instagram,
⬡│▸ igtv, facebook, fbmp3,
⬡│▸ twitter, twittermp3,
⬡│▸ tiktok, tiktokaudio, happymod
⬡│▸ tiktoknowm, mediafire  
┬│▸
╰────────────────···▸
┠━━〈 🎐 *Fun* 🎐 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ reaction,  cutecheck
⬡│▸ couple, soulmate, handsomecheck
⬡│▸ beautifulcheck, awesomecheck
⬡│▸ greatcheck, gaycheck,
⬡│▸ uglycheck, charactercheck
⬡│▸ lesbiancheck, hornycheck,
⬡│▸ prettycheck, lovelycheck,
┬│▸
╰────────────────···▸
┠━━〈 🈴 *Weeb* 🈴 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ crosplay, waifu, loli,
⬡│▸ tickle, wallpaper, coffee,
⬡│▸ neko, ppcouple, feed,
⬡│▸ foxgirl, feed, meow,
⬡│▸ animenom, waifu3, neko2,
⬡│▸ feed, meow, tickle, migumin
⬡│▸ awoo, animewallpaper2
⬡│▸ anime, manga
┬│▸
╰────────────────···▸
━━〈 🪁 *Essentials* 🪁 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ qr, say, translate, 
⬡│▸ fliptext, toletter
┬│▸
╰────────────────···▸
┠━━〈 🎗 *Others* 🎗 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ stickermeme, quotes,
⬡│▸ Report, darkjoke, afk
┬│▸
╰────────────────···▸
`.trim()
if (m.isGroup) {
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: m })    
} else {    
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

/*let buttons = [
{ buttonId: '#donar', buttonText: { displayText: '📮 𝙳𝙾𝙽𝙰𝚁 📮' }, type: 1 },
//{ buttonId: '#terminosycondiciones', buttonText: { displayText: '📋 𝚃𝙴𝚁𝙼𝙸𝙽𝙾𝚂 𝚈 𝙲𝙾𝙽𝙳𝙸𝙲𝙸𝙾𝙽𝙴𝚂 📋' }, type: 1 }]
{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑 𝐓𝐇𝐄 𝐌𝐘𝐒𝐓𝐈𝐂 - 𝐁𝐎𝐓 👑',
body: null,
thumbnail: img,
sourceUrl: `https://www.paypal.me/TheShadowBrokers133`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })*/
