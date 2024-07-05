const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "lion" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_34_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE4LFxuICAgICAgICA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzYsXG4gICAgICAgIDQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDUzLFxuICAgICAgICA2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc3LFxuICAgICAgICA5MSxcbiAgICAgICAgMixcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2LFxuICAgICAgICA1NCxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMzLFxuICAgICAgICAzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyOSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTExLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDExNixcbiAgICAgICAgNzksXG4gICAgICAgIDM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDM4LFxuICAgICAgICA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDaGJ4Y2w4NGhsM3dWRDMxREIyYStNdnpxMTZNa1gzaTZOSlNiblU3ZGlnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4eUFRV0lqVFEyNnhSRTBCWHVOVE1nXCIsXG4gIFwicGhvbmVJZFwiOiBcImZhY2M0NzFmLWZkY2UtNDBlNy05YmIzLTY4YmE1M2RmYzhiY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NyxcbiAgICAgIDE3LFxuICAgICAgMTgxLFxuICAgICAgMTIyLFxuICAgICAgMjI1LFxuICAgICAgNjksXG4gICAgICAxNjgsXG4gICAgICA3MixcbiAgICAgIDg1LFxuICAgICAgNzYsXG4gICAgICA0MixcbiAgICAgIDk3LFxuICAgICAgMTYsXG4gICAgICA3LFxuICAgICAgMTQ0LFxuICAgICAgMjI0LFxuICAgICAgMTMsXG4gICAgICAxMDUsXG4gICAgICA4NCxcbiAgICAgIDk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICAyMDUsXG4gICAgICAyMTMsXG4gICAgICAxMTUsXG4gICAgICAxNjEsXG4gICAgICAxNixcbiAgICAgIDE3LFxuICAgICAgMCxcbiAgICAgIDEwMyxcbiAgICAgIDE2NSxcbiAgICAgIDIwMCxcbiAgICAgIDc3LFxuICAgICAgMzcsXG4gICAgICA3MyxcbiAgICAgIDIzNixcbiAgICAgIDk1LFxuICAgICAgMTk4LFxuICAgICAgMjU0LFxuICAgICAgMTQ2LFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkxNN0VNQ05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc4NjgwNzQ3OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi44Wk44Wk44Wk44WkMuG0izI0L0nNoPCdmahI4am2Qc2fTsy2R82OQcyGzIjLouG0uPCQgoNcIixcbiAgICBcImxpZFwiOiBcIjI0NjY5MDQzOTI2NjUwMzozOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNSzYzUG9FRU9YUW43UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImovcmt6WjEyd3FPWFdQN2ZNRjZwb2NGNVZvbU9BY1pqL3ppZld5a3NIaW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMzl1emdlVDJReFJFZHR5alUwUnNzWWFqaEV0cmh6Z2JZRWh4cml2MDBzVjVhVURoWkZjb0d0MDl1dE04cW91Wm9NcGk4UlJaMk5MdUVUV09mVkF2RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidnB4NFVnbmtrRUZpOUpDZkkxOVBIUDNvZURvdThENnVHWE45ZGpmN2YvYWd1NVVyeDNxYVYxenUrWlZGclBtcnM5U1RXMFptV1hPTHljQVRIUFdNQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3Nzg2ODA3NDc6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE4Mjg5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhkZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGRmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaUovMGdZdWM5ZVBGNnNmZmNSWURiMVlOdEdyeUFuTFkvdDdXNVV5cUJQbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzMxMTA5MTg0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMTgxOTIxNzc4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ishanga-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
