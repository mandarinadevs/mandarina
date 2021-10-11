/**
 * Importar los scripts de los gajos de la mandarina
 */
import { hide, show } from './modules/GajoActive'
import { listenDataSet } from './modules/GajoDataSet'
import { sayAny, sayOk, sayError, sayWarning, sayInfo } from './modules/GajoSay'



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