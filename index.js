const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
const ffmpeg = require('fluent-ffmpeg');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('videoSubmit', (event, path) => { //tells electron to listen for information the browser window is sending
  ffmpeg.ffprobe(path, (err, metadata) => {

  })
})
