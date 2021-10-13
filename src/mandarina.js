///////////////////////////////////////////////////////////
//                     GAJO SAY
///////////////////////////////////////////////////////////

/**
 * Array de botones para enviar al gajo Say dentro del objeto Message
 * @typedef {Object} btn
 * @property {String} text Texto del boton
 * @property {String} color Color del boton
 */

/**
 * Objeto mensaje que recibe el gajo Say
 * @typedef {Object} Message
 * @property {String} title Titulo del mensaje
 * @property {String} text Cuerpo del mensaje
 * @property {String} icon Presets o iconos personalizados en formato decimal
 * @property {Array<btn>} btn Configuracion de botones indexados
 */

/**
 * Muestra un mensaje cualquiera
 * @param {Message} message {title:'', text:'', btn:'', icon:''}
 * @returns {void}
 */
const sayAny = (message) => {

    return new Promise((resolve, reject) => {

        // Establecer icono
        let icon
        switch (message.icon) {
            case false:     icon = "❔"; break
            case "ok":      icon = "✔️"; break
            case "error":   icon = "❌";  break
            case "warning": icon = "⚠️"; break
            case "info":    icon = "❔"; break
            default:        icon = message.icon; break
        }
        
        // Desagregar objeto mensaje
        let title   = message.title?message.title:"Aviso"
        let text    = message.text
        let arrBtns = message.btn?message.btn:[{text:"Ok",color:"notify"}]
        let body    = `
            <div class="say-content white">
                <div class="say-header" id="say-title">
                    <h1>${icon}</h1>
                    <h5>${title}</h5>
                </div>
                <div class="say-body" id="say-text">
                    <p>${text}</p>
                </div>
                <div class="say-footer" id="say-btns"></div>
            </div>
        `

        // Escribir mensaje
        const say = document.querySelector("#gajo-say")
        say.innerHTML = body
        say.classList.add("active")
        document.querySelector("#gajo-say .say-content").classList.add("active")
        
        // Insertar botones
        let i = 0
        arrBtns.forEach(btn => {
            document.querySelector("#gajo-say #say-btns").innerHTML += `
                <button class="btn ${btn.color}" data-index="${i++}">${btn.text}</button>
            `
        })

        document.querySelectorAll("#gajo-say button").forEach(btn => {
            btn.addEventListener("click", e => {
                // Limpiar mensaje y resolver
                say.innerHTML = ""
                say.classList.remove("active")
                resolve(e.target.dataset.index)
            })
        })
    })
}



/**
 * Muestra un mensaje de conformidad
 * @param {Object} [obj] {title:'', text:'', btn:'', icon:''}
 * @returns {void}
 */
const sayOk = (obj = {}) => {
    return new Promise((resolve, reject) => {
        let title   = obj.title?obj.title:"Enhorabuena"
        let text    = obj.text?obj.text:"Se completó la tarea con éxito"
        let arrBtns = [{text:"Ok",color:"green"}]
        sayAny({title:title, text:text, btn:arrBtns, icon:"ok"}).then(index => resolve(index))
    })
}


/**
 * Muestra un mensaje de error
 * @param {Object} [obj] {title:'', text:'', btn:'', icon:''}
 * @returns {void}
 */
const sayError = (obj = {}) => {
    return new Promise((resolve, reject) => {
        let title   = obj.title?obj.title:"Error"
        let text    = obj.text?obj.text:"No se pudo completar la tarea"
        let arrBtns = [{text:"Ok",color:"red"}]
        sayAny({title:title, text:text, btn:arrBtns, icon:"error"}) .then(index => resolve(index))
    })
}

/**
 * Muestra un mensaje de advertencia
 * @param {Object} [obj] {title:'', text:'', btn:'', icon:''}
 * @returns {void}
 */
const sayWarning = (obj = {}) => {
    return new Promise((resolve, reject) => {
        let title   = obj.title?obj.title:"Atención"
        let text    = obj.text?obj.text:"¿Confirma que desea proceder con los cambios?"
        let arrBtns = [{text:"Sí",color:"green"}, {text:"No",color:"red"}]
        sayAny({title:title, text:text, btn:arrBtns, icon:"warning"}).then(index => resolve(index))
    })
}


/**
 * Muestra un mensaje informativo
 * @param {Object} [obj] {title:'', text:'', btn:'', icon:''}
 * @returns {void}
 */
const sayInfo = (obj = {}) => {
    return new Promise((resolve, reject) => {
        let title   = obj.title?obj.title:"Notificación"
        let text    = obj.text?obj.text:"¿Confirma que desea proceder con los cambios?"
        let arrBtns = [{text:"Sí",color:"green"}, {text:"No",color:"red"}]
        sayAny({title:title, text:text, btn:arrBtns, icon:"info"}).then(index => resolve(index))
    })
}




///////////////////////////////////////////////////////////
//                     GAJO SLIDER
///////////////////////////////////////////////////////////






///////////////////////////////////////////////////////////
//                     GAJO DATASET
///////////////////////////////////////////////////////////
/**
 * Activar los dataset
 */
 const listenDataSet = () => {

    document.querySelectorAll("body *").forEach(item => {

        if (item.dataset.height) item.style.height += item.dataset.height
        if (item.dataset.minHeight) item.style.minHeight += item.dataset.minHeight
        if (item.dataset.maxHeight) item.style.maxHeight += item.dataset.maxHeight

        if (item.dataset.width) item.style.width += item.dataset.width
        if (item.dataset.minWidth) item.style.minWidth += item.dataset.minWidth
        if (item.dataset.maxWidth) item.style.maxWidth += item.dataset.maxWidth

        if (item.dataset.bg) item.style.backgroundImage += "url("+item.dataset.bg+")"

    })
    
}



///////////////////////////////////////////////////////////
//                     GAJO ACTIVE
///////////////////////////////////////////////////////////
/**
 * Activa un componente
 * @param {String} selector Selector de etiqueta
 * @returns {void}
 */
 const show = (selector) => document.querySelector(selector).classList.add("active")

 /**
  * Desactiva un componente
  * @param {String} selector Selector de etiqueta
  * @returns {void}
  */
 const hide = (selector) => document.querySelector(selector).classList.remove("active")







/**
 * Configuraciones iniciales
 */
window.addEventListener("DOMContentLoaded", () => {

    /**
     * Propiedades básicas dataSet
     */
    listenDataSet()


    /**
     * Iniciar Gajo Say
     */
    const say = document.createElement("div")
    say.setAttribute("class", "say")
    say.setAttribute("id", "gajo-say")
    document.querySelector("body").appendChild(say)


    /**
     * Iniciar Gajo Spinner
     */
    let spinner = document.createElement("div")
    let content = document.createElement("div")
    let mask1 = document.createElement("div")
    let mask2 = document.createElement("div")
    
    spinner.setAttribute("class","spinner")
    spinner.setAttribute("id","gajo-spinner")
    content.setAttribute("class","spinner-content")
    mask1.setAttribute("class","mask1")
    mask2.setAttribute("class","mask2")

    spinner.appendChild(content)
    spinner.appendChild(mask1)
    spinner.appendChild(mask2)
    document.querySelector("body").appendChild(spinner)


    /**
     * Iniciar Gajo Cabinet
     */
    document.querySelectorAll(".cabinet").forEach(cabinet => {
        let id = "#"+cabinet.id //#DRAWER1
        document.querySelectorAll(".cabinet-open").forEach(btn => {
            if (btn.dataset.target == id) {
                btn.addEventListener("click", () => {
                    cabinet.classList.toggle("active")
                    btn.classList.toggle("active")
                })
            }
        })
    })


    /**
     * Iniciar Gajo Modal
     */
    document.querySelectorAll(".modal").forEach(modal => {
        let id = "#"+modal.id // #MODAL1
        // Abrir Modal
        document.querySelectorAll(".modal-open").forEach(btn => {
            if (btn.dataset.target == id) {
                btn.addEventListener("click", () => {
                    document.querySelector(id).classList.add("active")
                })
            }
        })
        // Cerrar Modal
        document.querySelectorAll(id+" .modal-close").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelector(id).classList.remove("active")
            })
        })
    })


    /**
     * Iniciar Gajo Navbar
     */
    document.querySelectorAll(".navbar .menu").forEach(menu => {
        let id = "#" + menu.id // #MENU1
        document.querySelectorAll(".menu-open").forEach(btn => {
            if (btn.dataset.target == id) {
                btn.addEventListener("click", () => {
                    menu.classList.toggle("active")
                    btn.classList.toggle("active")
                })
            }
        })
    })


    /**
     * Iniciar Gajo Tab
     */
    document.querySelectorAll(".tab").forEach(tab => {
        let id = "#"+tab.id
        document.querySelectorAll(id+">.tab-header>.tab-open").forEach(tabOpen => {
            if (tabOpen.classList.contains("disabled")){
                return
            }
            tabOpen.addEventListener("click", e => {
                // Desactivar todos los Tabs
                document.querySelectorAll(id+">.tab-header>.tab-open, "+id+">.tab-body>.tab-content").forEach(elem => {
                    elem.classList.remove("active")
                })
                // Activar Tab
                tabOpen.classList.add("active")
                document.querySelector(id+">.tab-body>.tab-content"+tabOpen.dataset.target).classList.add("active")
            })
        })
    })



    /**
     * Ready
     */
    console.log("Mandarina is ready...\nCheck the documentation: https://mandarinadevs.github.io/mandarina/")
})



/**
 * Test de Cheatsheet
 */
const testDocs = document.querySelector('#mandarina-test-docs')
if (testDocs) {
    document.querySelector('#testSpinner').addEventListener('click', () => {
        show('#gajo-spinner')
        setTimeout(() => {
            hide('#gajo-spinner')
        }, 3000)
    })

    document.querySelector('#testSayOk').addEventListener('click', () => sayOk())
    document.querySelector('#testSayError').addEventListener('click', () => sayError())
    document.querySelector('#testSayWarning').addEventListener('click', () => sayWarning())
    document.querySelector('#testSayInfo').addEventListener('click', () => sayInfo())
    document.querySelector('#testSayAny').addEventListener('click', () => sayAny({title:'Título', text:'Algún texto personalizado', icon:'&#8987;'}))
}