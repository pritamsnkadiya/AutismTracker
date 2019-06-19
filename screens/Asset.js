

const resources = {
    "main_logo" :require('./../img/main_logo.png'),
    "splash_bg" :require('./../img/splash_bg.png'),
    "1_img"     :require('./../img/1.png'),
    "2_img"     :require('./../img/2.png'),
    "3_img"     :require('./../img/3.png'),
    "4_img"     :require('./../img/18_year_old.png'),
    "back_arrow":require('./../img/back_arrow.png'),
     "bg"        :require('./../img/bg.png'),
    // "check"     :require('./../img/check.png'),
     "logo"      :require('./../img/logo.png'),
    // "small_logo":require('./../img/small_logo.png'),
    "test"     :require('./../img/test_score_bg.png'),
}

export function getAssetByFilename(filename){
    if(resources.hasOwnProperty(filename)){
        return resources[filename];
    }
    return null;
}