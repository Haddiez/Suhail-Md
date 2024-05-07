const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="fadanjumah@gmail.com"
global.location="Kano,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "2347069942920" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347069942920";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_37_05_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyLFxuICAgICAgICA5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICA5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYyLFxuICAgICAgICA0MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjExLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0LFxuICAgICAgICA2LFxuICAgICAgICA1OSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMixcbiAgICAgICAgNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDg1LFxuICAgICAgICA4MyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NixcbiAgICAgICAgMTA4LFxuICAgICAgICAzOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDkzLFxuICAgICAgICA4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU5LFxuICAgICAgICA3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3LFxuICAgICAgICA0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExLFxuICAgICAgICA0NixcbiAgICAgICAgNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzLFxuICAgICAgICAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyLFxuICAgICAgICA3OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExLFxuICAgICAgICA1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoVi9ZejI5dmxseW16azFlMFVzRXpVYmIrQkRJNTN3UlFQWmZSQVRESHdrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXZGVXYmxRblN5ZWMyZzJPcFM0RlZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjczZDM4ZGE2LTYxMjctNGY2ZS1iZjg3LTg1Mzk2MGNjMTU5M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTIsXG4gICAgICA3NSxcbiAgICAgIDU4LFxuICAgICAgNzAsXG4gICAgICAxMzYsXG4gICAgICA0OSxcbiAgICAgIDIyMixcbiAgICAgIDE4NCxcbiAgICAgIDIzOSxcbiAgICAgIDE5NCxcbiAgICAgIDI0MyxcbiAgICAgIDQ4LFxuICAgICAgMjUxLFxuICAgICAgMTQyLFxuICAgICAgMjUzLFxuICAgICAgODgsXG4gICAgICAxMDAsXG4gICAgICAyMTgsXG4gICAgICA2NSxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgMTczLFxuICAgICAgMjA2LFxuICAgICAgMTcxLFxuICAgICAgMTczLFxuICAgICAgMjA0LFxuICAgICAgOTUsXG4gICAgICAyMTAsXG4gICAgICAxMzEsXG4gICAgICA4MixcbiAgICAgIDE5MSxcbiAgICAgIDE4NixcbiAgICAgIDIyMSxcbiAgICAgIDI0NixcbiAgICAgIDIzLFxuICAgICAgMjgsXG4gICAgICAxNjMsXG4gICAgICAxNzMsXG4gICAgICA5LFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIko4Nk5SMTJUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDY5OTQyOTIwOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY1NTc1OTk2OTI4MTg0OjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSXNoYW1cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLN3QvS29DRUxQUTU3RUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNPbGExOGxWTGl4RDNTTHBqbW55dkJzNlNJRjBsSThJRVRmSzc0dHNzems9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOUhkNnJ6NmR5MWY2eEdad2g0ZHltUG9KaGxYYml4b250Z2c3R0oyejVydXJ6d1JnNHBZWHNxTnNlUzJDTXBTeUlOMi9qUlR2SUc0MUM4Unhzdm5wQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaW5haW83elR6d2lkazMrdW0rNXJaYm9laWRra1lyVEwvbFduMVpoZ1BWMEpaVDdoS1hzN29nSGVzWDRjKzhZd3FzaHkzMmhUejY1K1VXeVdxUlUxQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2OTk0MjkyMDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTA3MTAzMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Isham MD",
  ownername:process.env.OWNER_NAME|| "Isham Tech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
