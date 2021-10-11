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
export const sayAny = (message) => {

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
export const sayOk = (obj = {}) => {
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
export const sayError = (obj = {}) => {
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
export const sayWarning = (obj = {}) => {
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
export const sayInfo = (obj = {}) => {
    return new Promise((resolve, reject) => {
        let title   = obj.title?obj.title:"Notificación"
        let text    = obj.text?obj.text:"¿Confirma que desea proceder con los cambios?"
        let arrBtns = [{text:"Sí",color:"green"}, {text:"No",color:"red"}]
        sayAny({title:title, text:text, btn:arrBtns, icon:"info"}).then(index => resolve(index))
    })
}