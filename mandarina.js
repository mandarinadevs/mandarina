/*
 *
 * COMPONENT : @Mandarina
 * AUTOR : Mandarina
 * FECHA : 2021/06/01
 * NOTA  : "Contiene el metodo dice"
 *
*/
class Mandarina
{
    constructor() {
        // HEIGHT
        this.getAll("[data-height]").forEach(item => {
            item.style.height += item.dataset.height
        })
        // WIDTH
        this.getAll("[data-width]").forEach(item => {
            item.style.width += item.dataset.width
        })
        // BACKGROUND
        this.getAll("[data-bg]").forEach(item => {
            item.style.backgroundImage += "url("+item.dataset.bg+")"
        })
        
        // Iniciar Mandarina Dice
        document.querySelector("body").innerHTML += `
            <div id="mandarinaDice" class="modal"></div>
        `
    }
    getAll(att) {
        return document.querySelectorAll(att)
    }

    static dice() {
        return new Promise((resolve, reject) => {
            // Desagregar objeto mensaje
            let type    = (obj.type)?obj.type:"success" // ["success", "warning", "info", "error"]
            let title   = (obj.title)?obj.title:"Aviso"
            let text    = obj.text
            let arrBtns = (obj.btn)?obj.btn:[{text:"Aceptar",color:"l-green"},{text:"Cancelar",color:"l-red"}]
            let body    = `
                <div class="content white">
                    <div class="modal-header" id="mandarinaDiceTitle">
                        <h5>${title} - ${type}</h5>
                    </div>
                    <div class="modal-body" id="mandarinaDiceText">
                        <p>${text}</p>
                    </div>
                    <div class="modal-footer" id="mandarinaDiceBtns"></div>
                </div>
            `
    
            // Escribir mensaje e Insertar botones
            document.querySelector("#mandarinaDice").innerHTML = body
            document.querySelector("#mandarinaDice").classList.add("active")
            document.querySelector("#mandarinaDice .content").classList.add("active")
            var i = 0
            arrBtns.forEach(btn => {
                document.querySelector("#mandarinaDice #mandarinaDiceBtns").innerHTML += `
                    <button class="btn ${btn.color}" data-index="${i++}">${btn.text}</button>
                `
            })
    
            document.querySelectorAll("#mandarinaDice button").forEach(btn => {
                btn.addEventListener("click", e => {
                    // Limpiar mensaje y resolver
                    document.querySelector("#mandarinaDice").innerHTML = ""
                    document.querySelector("#mandarinaDice").classList.remove("active")
                    resolve(e.target.dataset.index)
                })
            })
        })
    }
}
new Mandarina()
/*
 *
 * COMPONENT : @Alert
 * AUTOR : Mandarina
 * FECHA : 2021/06/01
 * NOTA  : ""
 *
*/
class Alert
{
    constructor(alert){
        alert.addEventListener("click",() => {
            alert.classList.add("alert-close")
            setTimeout(() => {
                alert.hidden = true
            }, 500);
        })
    }
}
document.querySelectorAll(".alert").forEach(alert => {
    new Alert(alert)
})
/*
 *
 * COMPONENT : @Drawer
 * AUTOR : Mandarina
 * FECHA : 2021/06/01
 * NOTA  : ""
 *
*/
class Drawer
{
    constructor(drawer) {
        this.drawer = "#"+drawer.id //#DRAWER1
        // TOGGLE MODAL
        document.querySelectorAll(".drawer-open").forEach(btn => {
            if (btn.dataset.target == this.drawer) {
                btn.addEventListener("click", () => {
                    drawer.classList.toggle("active")
                    btn.classList.toggle("active")
                })
            }
        })
    }
}
document.querySelectorAll(".drawer").forEach(drawer => {
    new Drawer(drawer)
})
/*
 *
 * COMPONENT : @Modal
 * AUTOR : Mandarina
 * FECHA : 2021/06/01
 * NOTA  : ""
 *
*/
class Modal
{
    constructor(modal){
        this.modal = "#"+modal.id // #MODAL1
        // ABRIR MODAL
        document.querySelectorAll(".modal-open").forEach(btn => {
            if (btn.dataset.target == this.modal) {
                btn.addEventListener("click", () => {
                    document.querySelector(this.modal).classList.add("active")
                })
            }
        })
        // CERRAR MODAL
        document.querySelectorAll(this.modal+" .modal-close").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelector(this.modal).classList.remove("active")
            })
        })
    }
}
document.querySelectorAll(".modal").forEach(modal => {
    new Modal(modal)
})
/*
 *
 * COMPONENT : @Navbar
 * AUTOR : Mandarina
 * FECHA : 2021/06/01
 * NOTA  : ""
 *
*/
class Navbar
{
    constructor(menu) {
        this.menu = "#" + menu.id // #MENU1
        // TOGGLE MENU
        document.querySelectorAll(".menu-open").forEach(btn => {
            if (btn.dataset.target == this.menu) {
                btn.addEventListener("click", () => {
                    menu.classList.toggle("active")
                    btn.classList.toggle("active")
                })
            }
        })
    }
}
document.querySelectorAll(".navbar .menu").forEach(menu => {
    new Navbar(menu)
})
/*
 *
 * COMPONENT : @Slider
 * AUTOR : Mandarina
 * FECHA : 2021/06/01
 * NOTA  : ""
 *
*/
class Slider
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
    new Slider(slider)
})
/*
 *
 * COMPONENT : @Spinner
 * AUTOR : Mandarina
 * FECHA : 2021/06/01
 * NOTA  : ""
 *
*/
class Spinner
{
    constructor() {
        let spinner = document.createElement("div")
        let content = document.createElement("div")
        let mask1 = document.createElement("div")
        let mask2 = document.createElement("div")
        
        spinner.setAttribute("class","spinner")
        content.setAttribute("class","content")
        mask1.setAttribute("class","mask1")
        mask2.setAttribute("class","mask2")

        spinner.appendChild(content)
        spinner.appendChild(mask1)
        spinner.appendChild(mask2)

        document.querySelector("body").appendChild(spinner)
    }

    static show() {
        document.querySelector(".spinner").classList.add("active")
    }

    static hide() {
        document.querySelector(".spinner").classList.remove("active")
    }
}
new Spinner()
/*
 *
 * COMPONENT : @Tab
 * AUTOR : Mandarina
 * FECHA : 2021/06/01
 * NOTA  : ""
 *
*/
class Tab
{
    constructor(tab) {
        this.tab = "#"+tab.id
        
        document.querySelectorAll(this.tab+">.tab-header>.tab-open").forEach(tabOpen => {
            tabOpen.addEventListener("click", () => {
                // DESACTIVAR TODOS LOS TAB
                document.querySelectorAll(this.tab+">.tab-header>.tab-open, "+this.tab+">.tab-body>.tab-content").forEach(elem => {
                    elem.classList.remove("active")
                })

                // ACTIVAR TAB
                tabOpen.classList.add("active")
                document.querySelector(this.tab+">.tab-body>.tab-content"+tabOpen.dataset.target).classList.add("active")
            })
        })
    }
}
document.querySelectorAll(".tab").forEach(tab => {
    new Tab(tab)
})

/*
 *
 * COMPONENT : @
 * AUTOR : Mandarina
 * FECHA : 2021/06/01
 * NOTA  : ""
 *
*/