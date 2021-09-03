
window.addEventListener("DOMContentLoaded", () => {

    // Propiedades básicas
    Mandarina.getAll("[data-height]").forEach( item => item.style.height += item.dataset.height )
    Mandarina.getAll("[data-width]").forEach( item => item.style.width += item.dataset.width )
    Mandarina.getAll("[data-bg]").forEach( item => item.style.backgroundImage += "url("+item.dataset.bg+")" )


    // Iniciar Mandarina Dice
    let dice = document.createElement("div")
    dice.setAttribute("class", "mandarinaDice")
    dice.setAttribute("id", "mandarinaDice")
    Mandarina.get("body").appendChild(dice)


    // Iniciar Mandarina Spinner
    let spinner = document.createElement("div")
    let content = document.createElement("div")
    let mask1 = document.createElement("div")
    let mask2 = document.createElement("div")
    
    spinner.setAttribute("class","mandarinaSpinner")
    content.setAttribute("class","content")
    mask1.setAttribute("class","mask1")
    mask2.setAttribute("class","mask2")

    spinner.appendChild(content)
    spinner.appendChild(mask1)
    spinner.appendChild(mask2)
    Mandarina.get("body").appendChild(spinner)


    // Iniciar Alert
    Mandarina.getAll(".alert").forEach(alert => alert.addEventListener("click",() => {
        alert.classList.add("alert-close")
        setTimeout(() => {
            alert.hidden = true
        }, 500);
    }))


    // Iniciar Drawer
    Mandarina.getAll(".drawer").forEach(drawer => {
        let id = "#"+drawer.id //#DRAWER1
        Mandarina.getAll(".drawer-open").forEach(btn => {
            if (btn.dataset.target == id) {
                btn.addEventListener("click", () => {
                    drawer.classList.toggle("active")
                    btn.classList.toggle("active")
                })
            }
        })
    })


    // Iniciar Modal
    Mandarina.getAll(".modal").forEach(modal => {
        let id = "#"+modal.id // #MODAL1
        // Abrir Modal
        Mandarina.getAll(".modal-open").forEach(btn => {
            if (btn.dataset.target == id) {
                btn.addEventListener("click", () => {
                    Mandarina.get(id).classList.add("active")
                })
            }
        })
        // Cerrar Modal
        Mandarina.getAll(id+" .modal-close").forEach(btn => {
            btn.addEventListener("click", () => {
                Mandarina.get(id).classList.remove("active")
            })
        })
    })


    // Iniciar Navbar
    Mandarina.getAll(".navbar .menu").forEach(menu => {
        let id = "#" + menu.id // #MENU1
        Mandarina.getAll(".menu-open").forEach(btn => {
            if (btn.dataset.target == id) {
                btn.addEventListener("click", () => {
                    menu.classList.toggle("active")
                    btn.classList.toggle("active")
                })
            }
        })
    })


    // Iniciar Tab
    Mandarina.getAll(".tab").forEach(tab => {
        let id = "#"+tab.id
        Mandarina.getAll(id+">.tab-header>.tab-open").forEach(tabOpen => {
            tabOpen.addEventListener("click", () => {
                // Desactivar todos los Tabs
                Mandarina.getAll(id+">.tab-header>.tab-open, "+id+">.tab-body>.tab-content").forEach(elem => {
                    elem.classList.remove("active")
                })
                // Activar Tab
                tabOpen.classList.add("active")
                Mandarina.get(id+">.tab-body>.tab-content"+tabOpen.dataset.target).classList.add("active")
            })
        })
    })



    // Ready
    console.log("Mandarina is ready...\nCheck the documentation: https://mandarinacss.github.io/mandarina/")
})

/**
 * @name Mandarina
 * @author Mandarina
 * @version 2021/09/03
 */
class Mandarina
{
    // Métodos auxiliares
    static get = (selector) => document.querySelector(selector)
    static getAll = (selector) => document.querySelectorAll(selector)


    // Métodos de Mandarina Dice
    static dice(obj) {
        return new Promise((resolve, reject) => {
            // Establecer icono
            let icon
            switch (obj.icon) {
                case false: icon = "❔"; break
                case "ok": icon = "✔️"; break
                case "error": icon = "❌";  break
                case "warning": icon = "⚠️"; break
                case "info": icon = "❔"; break
                default: icon = obj.icon; break
            }
            // Desagregar objeto mensaje
            let title   = obj.title?obj.title:"Aviso"
            let text    = obj.text
            let arrBtns = obj.btn?obj.btn:[{text:"Ok",color:"l-notify"}]
            let body    = `
                <div class="content white">
                    <div class="dice-header" id="mandarinaDiceTitle">
                        <h1>${icon}</h1>
                        <h3>${title}</h3>
                    </div>
                    <div class="dice-body" id="mandarinaDiceText">
                        <p>${text}</p>
                    </div>
                    <div class="dice-footer" id="mandarinaDiceBtns"></div>
                </div>
            `
            // Escribir mensaje e Insertar botones
            this.get("#mandarinaDice").innerHTML = body
            this.get("#mandarinaDice").classList.add("active")
            this.get("#mandarinaDice .content").classList.add("active")
            var i = 0
            arrBtns.forEach(btn => {
                this.get("#mandarinaDice #mandarinaDiceBtns").innerHTML += `
                    <button class="btn ${btn.color}" data-index="${i++}">${btn.text}</button>
                `
            })
            document.querySelectorAll("#mandarinaDice button").forEach(btn => {
                btn.addEventListener("click", e => {
                    // Limpiar mensaje y resolver
                    this.get("#mandarinaDice").innerHTML = ""
                    this.get("#mandarinaDice").classList.remove("active")
                    resolve(e.target.dataset.index)
                })
            })
        })
    }
    static ok(obj){
        return new Promise((resolve, reject) => {
            let title   = obj.title?obj.title:"Enhorabuena"
            let text    = obj.text?obj.text:"Completado con éxito"
            let arrBtns = [{text:"Ok",color:"l-green"}]
            this.dice({title:title, text:text, btn:arrBtns, icon:"ok"}).then(index => resolve(index))
        })
    }
    static error(obj){
        return new Promise((resolve, reject) => {
            let title   = obj.title?obj.title:"Error"
            let text    = obj.text?obj.text:"Ha ocurrido un error inesperado..."
            let arrBtns = [{text:"Ok",color:"l-red"}]
            this.dice({title:title, text:text, btn:arrBtns, icon:"error"}) .then(index => resolve(index))
        })
    }
    static warning(obj){
        return new Promise((resolve, reject) => {
            let title   = obj.title?obj.title:"Atención"
            let text    = obj.text?obj.text:"Está a punto de realizar cambios en el sistema"
            let arrBtns = [{text:"Sí 👍",color:"l-green"}, {text:"No 👎",color:"l-red"}]
            this.dice({title:title, text:text, btn:arrBtns, icon:"warning"}).then(index => resolve(index))
        })
    }
    static info(obj){
        return new Promise((resolve, reject) => {
            let title   = obj.title?obj.title:"Notificación"
            let text    = obj.text?obj.text:"¿Confirma que desea proceder con los cambios?"
            let arrBtns = [{text:"Sí 👍",color:"l-green"}, {text:"No 👎",color:"l-red"}]
            this.dice({title:title, text:text, btn:arrBtns, icon:"info"}).then(index => resolve(index))
        })
    }


    // Métodos de Modal
    static modalShow = (selector) => this.get(selector).classList.add("active")
    static modalHide = (selector) => this.get(selector).classList.remove("active")


    // Métodos de Spinner
    static spinnerShow = () => this.get(".mandarinaSpinner").classList.add("active")
    static spinnerHide = () => this.get(".mandarinaSpinner").classList.remove("active")

}
new Mandarina()





/*
 *
 * COMPONENT : @Slider
 * AUTOR : Mandarina
 * FECHA : 2021/06/01
 * NOTA  : ""
 *
*/
class MandarinaSlider
{
    constructor(slider) {
        this.slider = "#"+slider.id
        this.animation = slider.dataset.animation // AUTO; OPACITY; SLIDE; RADIANCE
        this.duration = slider.dataset.duration * 1000
        this.minHeight = slider.dataset.minHeight
        this.numFrames = slider.children.length

        // PRESETS
        if (screen.width < 900) {
            slider.style.height = this.minHeight
        }
        slider.children[this.numFrames-1].classList.add("prev")
        slider.children[0].classList.add("active")
        slider.children[1].classList.add("next")

        this.autoPlay()
    }

    async autoPlay() {
        this.next(0)
        let i = 1 // EL INDICE DEL FRAME ACTUAL
        await new Promise(resolve => {
            setInterval(() => {
                this.next(i)
                if (i == this.numFrames - 1) { i = 0 }
                else { i++ }
            }, this.duration);
        })
    }

    next(i) {
        let h // FRAME ANTERIOR
        if (i == 0) { h = this.numFrames -1 }
        else { h = i-1 }
        let j // FRAME SIGUIENTE
        if (i == this.numFrames - 1) { j = 0 }
        else { j = i+1 }
        // ACTIVAR EL FRAME ANTERIOR
        document.querySelector(this.slider + " .item.prev").classList.remove("prev")
        document.querySelector(this.slider).children[h].classList.add("prev")
        // ACTIVAR FRAME ACTUAL
        document.querySelector(this.slider + " .item.active").classList.remove("active")
        document.querySelector(this.slider).children[i].classList.add("active")
        // ACTIVAR FRAME SIGUIENTE
        document.querySelector(this.slider + " .item.next").classList.remove("next")
        document.querySelector(this.slider).children[j].classList.add("next")
    }
}
document.querySelectorAll(".slider").forEach(slider => {
    new MandarinaSlider(slider)
})
