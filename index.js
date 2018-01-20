const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
const ffmpeg = require('fluent-ffmpeg');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('videoSubmit', (event, path) => { //tells electron to listen for information the browser window is sending

  ffmpeg.ffprobe(path, (err, metadata) => { //grabs video metadata object
    
    mainWindow.webContents.send('videoMetadata', metadata.format.duration) //sends back specified metadata to browser window
  })
})
