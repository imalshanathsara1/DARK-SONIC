import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return    
try {
let pp = imagen4
let pt = './media/queen.mp3'
let img =  './DARK.jpg'
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
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *ᴅᴀʀᴋ Qᴜᴇᴇɴ* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
👋 𝗛ello, ${taguser}

🧒 Owner:* *IMALSHA

⚔ Number:* wa.me/94718628230

🖥 Bot ofc:* wa.me/94740196225

⏰ Runtime:* ${uptime}

╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

🔮.ᴍᴇɴᴜ
💠ɢᴇᴛ ʙᴏᴛ ᴍᴇɴᴜ ʟɪꜱᴛ

🔮*ꜱᴏɴɢ*
💠ɢᴇᴛ ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜʀ ᴀɴʏ ꜱᴏɴɢ

🔮xɴxxᴅʟ
💠ɢᴇᴛ ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜʀ xɴxx ᴠɪᴅᴇᴏ

🔮ꜰʙᴅʟ
💠ɢᴇᴛ ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜʀ ꜰʙ ᴠɪᴅᴇᴏ

🔮ᴏᴡɴᴇʀ
💠ɢᴇᴛ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ

🔮ᴠɪᴅᴇᴏ
💠ɢᴇᴛ ᴅᴏᴡɴʟᴏᴀᴅ ʏᴛ ᴠɪᴅᴇᴏ

🔮xᴠɪᴅᴇᴏꜱᴅʟ
💠ɢᴇᴛ ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜʀ xᴠɪᴅᴇᴏ

🔮ᴛɪᴋᴛᴏᴋ
💠ɢᴇᴛ ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜʀ ᴛɪᴋᴛᴏᴋ ᴠɪᴅᴇᴏ

🔮ɢᴅʀɪᴠᴇ
💠ɢᴇᴛ ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜʀ ɢᴅʀɪᴠᴇ ʟɪɴᴋ

🔮ᴍᴇᴅɪᴀꜰɪʀᴇ
💠ɢᴇᴛ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇᴅɪᴀꜰɪʀᴇ ꜰɪʟᴇ

🔮ᴡᴀʟʟᴘᴀᴘᴇʀ
💠ɢᴇᴛ ᴅᴏᴡɴʟᴏᴀᴅ ᴡᴀʟʟᴘᴀᴘᴇʀ

🔮ʀɪɴɢᴛᴏɴᴇ
💠ɢᴇᴛ ᴅᴏᴡɴʟᴏᴀᴅ ʀɪɴɢᴛᴏɴᴇ

🔮ꜱᴘᴏᴛɪꜰʏ
💠ɢᴇᴛ ᴅᴏᴡɴʟᴏᴀᴅ ꜱᴘᴏᴛɪꜰʏ

         
         ⚔ɢʀᴏᴜᴘ ᴍᴇɴᴜ⚔

🔮ᴋɪᴄᴋ
💠ᴋɪᴄᴋ ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛ ɪɴ ɢʀᴏᴜᴘ

🔮ᴀᴅᴅ
💠ᴀᴅᴅ ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛ ɪɴ ɢʀᴏᴜᴘ

🔮ᴘʀᴏᴍᴏᴛᴇ
💠ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛ ᴘʀᴏᴍᴏᴛᴇ ᴛᴏ ᴀᴅᴍɪɴ

📌*ᴏᴛʜᴇʀ ᴍᴇɴᴜ ᴄᴏᴍᴍɪɴɢ ꜱᴏᴏɴ!📌`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] ERROR*', m)
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
