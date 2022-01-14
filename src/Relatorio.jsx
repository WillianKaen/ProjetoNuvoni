import { Link, useParams } from "react-router-dom";
function Relatorio(props){
    const params=useParams();

    console.log(params);
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
                            <li id="rel"><Link to="/relatorio">Relátorios</Link></li>
                        </ul>
                    </div>
            </main>
        </header>

        <div>



        </div>

    </body>
    )

}

export default Relatorio;