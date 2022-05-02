function criaCalculadora() {
    return {
        display:        document.querySelector('#display'),
        
        inicia() {
            this.clique_botoes()
            this.press_keyboard()
        },  

        clique_botoes() {
            document.addEventListener('click', e => {
                const el =  e.target

                if(el.classList.contains('btn-num')) {
                    this.render_display(el.innerText)
                }

                if(el.classList.contains('btn-clear')) {
                    this.clear_display()
                }

                if(el.classList.contains('btn-del')) {
                    this.clear_number(this.display.value)
                }

                if(el.classList.contains('btn-eq')) {
                    this.resolve_calculation()
                }
            })  
        },
        
        clear_display() {
            this.display.value = ''
        },

        render_display(valor) {
            this.display.value += valor
        },

        clear_number(valor) {
            this.display.value = valor.slice(0, -1)
        }, 

        resolve_calculation() {
            let calculator = this.display.value
            
            try {
                calculator = eval(calculator)
                
                if(!calculator){
                    alert("Conta inválida")
                    return
                }

                this.display.value = calculator
            } catch (error) {
                alert("Conta inválida")
                return
            }
        }, 

        press_keyboard() {
            document.addEventListener('keyup', e => {
                if(e.code === 'Enter') {
                    this.resolve_calculation()
                }
            })
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()



/*
    OBS: funcões do tipo function tem o seu this alterado, porém, funções do tipo arrow tem o this travado, ou seja, sem a possibilidade de se utilizar o .bind(this)
*/