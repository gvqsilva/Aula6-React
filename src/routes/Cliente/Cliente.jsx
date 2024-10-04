import {useForm} from 'react-hook-form'


const Cliente =()=>{

    //Declarando as variaveis usando o hook-form
    const {register,handleSubmit,setValue, setFocus}=useForm({})

    //criando a função buscarCep

    const buscarCep=(e)=>{
        const cep =e.target.value;
        fetch(`http://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((dados) =>{
            setValue("rua",dados.logradouro);
            setValue("cidade",dados.localidade);
            setValue("numero");
        })
    }


    return (
    <section className="cliente">
    <h1>Cliente</h1>
    <form onSubmit={handleSubmit}>
        <fieldset>
            <legend>Endereço</legend>

            <p>
                Cep: 
                <input type="text" {...register("cep")} onChange={buscarCep}/>
            </p>
            <p> Rua:
                <input type="text" {...register("rua")}/>
            </p>
            <p>
                Cidade:
                <input type="text" {...register("cidade")}/>
            </p>
            <p>
                Numero:
                <input type="text"  {...register("numero")}/>
            </p>
        </fieldset>
    </form>

    </section>
    )
}
export default Cliente