/**
 * Install config UIkit depuis l'issue :
 * https://github.com/uikit/uikit/issues/3706
 */
import Vue from 'vue'
import UIkit from 'uikit/dist/js/uikit.js'
import UIkitss from 'uikit/dist/css/uikit.css'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)
UIkit.container = '#__nuxt'

Vue.prototype.$uikit = UIkit