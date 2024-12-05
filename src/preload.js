const { app } = require('electron')

window.addEventListener('DOMContentLoaded', () => {
    
    let n = document.getElementById('app-name');
    let language = app.getLocale()
    if (n) {
        switch (language) {
            case "zh":
            case "zh-CN":
                n.innerHTML = "文字语音生成器"
                break;
            case "en":
            default:
                n.innerHTML = "Text Speech Generator"
                break;
        }
    }

    let load = document.getElementById("app-loading");
    if (load) {
        switch (language) {
            case "zh":
            case "zh-CN":
                load.innerHTML = "正在启动"
                break;
            case "en":
            default:
                load.innerHTML = "Loading"
                break;
        }
    }

    let l = document.getElementById('app-logo');
    if (l) {
        l.src = `./project/${project}/images/logo.png`
    }
})