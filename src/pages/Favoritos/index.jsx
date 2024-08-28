import { useEffect, useState } from 'react';
import './favoritos.css'
import { BsFillTrash3Fill, BsQuestionCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import { toast} from 'react-toastify'

function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{

        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])

    function excluirFilme(id) {
        let filtroFilmes = filmes.filter( (item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
        toast.success("Filme removido com sucesso")
    }

    return(
        <div className='meus-filmes'>

            {filmes.length === 0 && <span className='vazio'>Você não possui nenhum filme salvo :(</span>}

            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                            <span className='title'>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}><BsQuestionCircleFill/><span>Ver detalhes</span></Link>
                                <button onClick={() => excluirFilme(item.id)}> <BsFillTrash3Fill/> <span>Excluir</span></button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;