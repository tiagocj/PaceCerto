import style from "./Menu.module.css";

export default function Menu(){
    return(
        <div>
            <nav>
                <ul>
                    <li><a href="#home">Início</a></li>
                    <li><a href="#corridas">Calendário</a></li>
                    <li><a href="#dicas">Dicas</a></li>
                    <li><a href="#parcerias">Parcerias</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </div>
    )
}