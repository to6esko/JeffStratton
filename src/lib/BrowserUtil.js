var path = require('path')

export default class BrowserUtil {
    convertImagePath(path) {
        if (this.checkIsLowResolution()) {
            const fileExt = this.getFileExtension(path);
            const pathWithoutExt = path.replace(/\.[^/.]+$/, "");

            return path = pathWithoutExt + "LowRes" + "." + fileExt;
        }

        return path;
    }    
    
    checkIsLowResolution() {	
        if (window.innerWidth <= 1024 && window.innerHeight <= 768) {
                return true;
        } else {
            return false;
        }
    }

    getFileExtension(path) {
        return path.split('.').pop();
    }
}