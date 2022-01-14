import { useState } from "react";
import { Link } from "react-router-dom";

function Home(){

    const [nomeTarefa, setNomeTarefa] = useState('');
    const [dataInicial, setDataInicial] = useState('');
    const [dataFinal, setDataFinal] = useState('');

    const [listaTarefas, setListaTarefas] = useState([]);

    function onSubmit(event){
        let minhaListaTarefas = listaTarefas;

        event.preventDefault();
        console.log(nomeTarefa);
        console.log(dataInicial);
        console.log(dataFinal);
        minhaListaTarefas.push([nomeTarefa, dataInicial, dataFinal]);
        setListaTarefas(minhaListaTarefas);
        event.target.reset();
        setNomeTarefa('');
        setDataInicial('');
        setDataFinal('');
    }

    console.log(listaTarefas);

    return(

    <body>
        <header className="menu-principal">
            <main>
                <div className="header-1">
                    <div className="nome-site">
                        <label for="ns">Registro de Atividades</label>
                    </div>
                </div>
            </main>
        </header>

        <header className="menu">
            <main className="col-100 meno-urls">
                    <div className="meno">
                        <ul>
                            <li id="home"><Link to="/">Home</Link></li>
                            <li id="rel"><Link to="/relatorio" params={{listaTarefas:listaTarefas}} >Relátorios</Link></li>
                        </ul>
                    </div>
            </main>
        </header>

        <div className="corpo">

            <p>
                Registro de Atividades
            </p><p>
                1 - Pagina que recebe e registra no BD as seguintes informações: Nome da atividade, data/hora de inicio e fim.
            </p><p>
                2 - Outra pagina que mostra por dia as atividades realizadas e o tempo expedido em cada atividade.
            </p>

        </div>
        <form className="formulario" onSubmit={onSubmit}>
            <p>Nome tarefa</p>
            <input type="text" name="tarefa" onChange={(e) => {setNomeTarefa(e.target.value)}} className="trf" placeholder="Digite a tarefa..."></input>
            <div className="espaco"></div>
            <p>Dia e hora do inicio</p>
            <input type="datetime-local" name="dtinicio" onChange={(e) => {setDataInicial(e.target.value)}} className="idt"></input>
            <div className="espaco"></div>
            <p>Dia e hora do termino</p>
            <input type="datetime-local" name="dtfim" onChange={(e) => {setDataFinal(e.target.value)}} className="fdt"></input>
            <div className="espaco"></div>
            <p>Pressione "Ok" para inserir</p>
            <div className="espaco"></div>
            <button className="btn" type="submit">Ok</button>
        </form>

    </body>
    )

}

export default Home;