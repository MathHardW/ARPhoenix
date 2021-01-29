import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TextField, Select, MenuItem, Button } from '@material-ui/core';

export default function CadastrarUser() {
    const users = useSelector(state => state.data);
    const dispatch = useDispatch();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirm, setConfirm] = useState("");
    const [data, setData] = useState(new Date());
    const [tipo, setTipo] = useState(1);

    const handleChange = (event) => {
        setTipo(event.target.value);
    };

    function addUser() {
        if (senha === confirm && nome !== "" && email !== "" && senha !== "" && confirm !== "" && data !== new Date()) {
            dispatch({ type: 'ADD_USER', user: { ID: gera_id(), Nome: nome, Email: email, Senha: senha, Data: data, Tipo: tipo } })
            alert("Dados Cadastrados");

            setNome("");
            setEmail("");
            setSenha("");
            setConfirm("");
            setData(new Date());
            setTipo(1);
        } else {
            alert("Preencha os dados corretamente");
        }
    }

    function gera_id() {
        var size = 10;
        var randomized = Math.ceil(Math.random() * Math.pow(10, size));//Cria um número aleatório do tamanho definido em size.
        var digito = Math.ceil(Math.log(randomized));//Cria o dígito verificador inicial
        while (digito > 10) {//Pega o digito inicial e vai refinando até ele ficar menor que dez
            digito = Math.ceil(Math.log(digito));
        }
        var id = randomized + '-' + digito;//Cria a ID
    
        return id;
    }

    return (
        <>
            <TextField
                value={nome} onChange={event => setNome(event.target.value)}
                id="outlined-basic" label="Digite o seu Nome" variant="outlined" placeholder="Digite o seu Nome" />

            <TextField
                value={email} onChange={event => setEmail(event.target.value)}
                id="outlined-basic" label="Digite o seu E-mail" variant="outlined" placeholder="Digite o seu E-mail" />

            <TextField
                value={senha} onChange={event => setSenha(event.target.value)}
                id="outlined-basic" label="Digite a sua Senha" variant="outlined" placeholder="Digite o sua Senha" type="password" />

            <TextField
                value={confirm} onChange={event => setConfirm(event.target.value)}
                id="outlined-basic" label="Confirme a sua Senha" variant="outlined" placeholder="Confirme a sua Senha" type="password" />

            <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2020-01-29"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                value={data} onChange={event => setData(event.target.value)}
            />

            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tipo}
                onChange={handleChange}
                variant="outlined"
                value={tipo} onChange={event => setTipo(event.target.value)}
            >
                <MenuItem value={1}>Administrador</MenuItem>
                <MenuItem value={2}>Colaborador</MenuItem>
                <MenuItem value={3}>Cliente</MenuItem>
            </Select>

            <Button variant="contained" onClick={addUser}>Cadastrar</Button>
        </>
    );
}