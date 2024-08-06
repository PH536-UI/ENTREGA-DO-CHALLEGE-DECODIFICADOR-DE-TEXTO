var cripts = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"]]

var res = document.getElementById("resultado")
var text = document.getElementById("text")

var bt_copy = false

function criptografar(){
    
    if(bt_copy == false){
        bt_copy = true
        let bt = document.createElement("button")
        bt.innerHTML = "COPY"
        bt.addEventListener("click", ()=>{
            navigator.clipboard.writeText(res.innerHTML)
            bt.innerHTML = "COPIED"
            setTimeout(()=>{
                bt.innerHTML = "COPY"
            },3500)
        })
        document.getElementById("display-2").appendChild(bt)
    }

    let txt = text.value
    let letra = ""
    let txt_1 = ""
    let pos = 0
    for(i = 0; i < txt.length; i++){
        for(a = 0; a < cripts.length; a++){
            if(txt[i] == cripts[a][0]){
                txt_1 += cripts[a][1]
                pos = 1
            }

        }
        if(pos == 0){
            txt_1 += txt[i]
            pos = 0
        }
        pos = 0

    }
    text.value = ""
    res.innerHTML = txt_1

}

function descriptografar(){
    
    let substituicoes = [
        { buscar: "ai", substituir: "a" },
        { buscar: "ober", substituir: "o" },
        { buscar: "imes", substituir: "i"},
        { buscar: "enter", substituir: "e"}
    ]

    let resultado = document.getElementById("resultado").innerHTML
    for (let i = 0; i < substituicoes.length; i++) {
        let busca = substituicoes[i].buscar
        let substituicao = substituicoes[i].substituir
        while (resultado.includes(busca)) {
            resultado = resultado.replace(busca, substituicao)
        }
    }
    text.value = resultado
}