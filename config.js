const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© A K A S H" 


global.devs = "917872324809" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "917872324809";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917872324809";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "91xxxxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_00_10_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDc0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDUsXG4gICAgICAgIDMyLFxuICAgICAgICA3OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDk1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDYwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0LFxuICAgICAgICA0NixcbiAgICAgICAgMjM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDYzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKTXBkT1NOQjhMVVlybVVMTVQ0dkdJdEJqRGg5eGYxb0M2Qld6ZmVQM3ZvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzg3MjMyNDgwOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjUyREYwQTY3QzY5NUM5NkYyMjY1MzQwRERCOEVDOTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwMDQ4NDI2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3ODcyMzI0ODA5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwRkM0Qzk1OTU3Rjc4MzQ0QzQ2RDUzREQ0OTc5RjM0MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzAwNDg0MjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMVNiS1l2b25UMWlKLXFqSldvX3AzQVwiLFxuICBcInBob25lSWRcIjogXCIyYWI3YzVhOS03NDY1LTRhYmUtODkyZC1hM2M1ZGM5ZDM2YTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICAxMDMsXG4gICAgICAxNDUsXG4gICAgICA5MSxcbiAgICAgIDU0LFxuICAgICAgMTI1LFxuICAgICAgNDYsXG4gICAgICAyNTMsXG4gICAgICAxODQsXG4gICAgICAxMDMsXG4gICAgICAxMjAsXG4gICAgICAxNDMsXG4gICAgICA4NixcbiAgICAgIDIxNyxcbiAgICAgIDIyMSxcbiAgICAgIDYwLFxuICAgICAgNTksXG4gICAgICAxNDksXG4gICAgICAxODAsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzYsXG4gICAgICA3NCxcbiAgICAgIDI0NixcbiAgICAgIDM1LFxuICAgICAgNDgsXG4gICAgICAzNCxcbiAgICAgIDEwNyxcbiAgICAgIDI0MSxcbiAgICAgIDE3NyxcbiAgICAgIDE2NSxcbiAgICAgIDIxMCxcbiAgICAgIDEyNSxcbiAgICAgIDE5MixcbiAgICAgIDIwMixcbiAgICAgIDEyNSxcbiAgICAgIDE5MCxcbiAgICAgIDI0LFxuICAgICAgOTYsXG4gICAgICA5OSxcbiAgICAgIDIwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFRUo5UDlCUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3ODcyMzI0ODA5OjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzkxOTU4MDUyMzcyNTY6NDdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiV0hPUFRZXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0xPOG9jR0VLWGorYmdHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxMFpKR2NheExLK0VmN2dURGFRVEJPV203QitPYzI5UEU4SW9tZE9UL3hrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVVZnVYaXJZNnIrZ3RLM0xSZHpCU3l5WkZjSzY1bUJKY1A5TFlrSC9EWjBqdlpucElzZ3VGWXQ1WUZqNGJRZE5MSVFOQ093eitGSWR4dmV3cFh5TEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFqYjU1dnVUaElaYWJZVlJTR2J5YXdLZmVIdWFxd1VPU0RJUm9URnN6N0FHV2RBVm5TOUxGVDhybGxjYXRxWXpSczc3TytqbXNXKzN2Y2FDanNQcmdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzg3MjMyNDgwOTo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAwNDg0MjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBVk5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFWTi5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ALONE-XMD",
  ownername:process.env.OWNER_NAME|| "ALONE-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
