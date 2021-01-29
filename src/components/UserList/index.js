import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function UserList() {
    const users = useSelector(state => state.data);

    function FormataStringData(data) {
        var dia = data.split("-")[0];
        var mes = data.split("-")[1];
        var ano = data.split("-")[2];

        return ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2);
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Nome</TableCell>
                            <TableCell align="right">E-mail</TableCell>
                            <TableCell align="right">Data de Nascimento</TableCell>
                            <TableCell align="right">Tipo de Usuário</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user}>
                                <TableCell component="th" scope="row">
                                    {user.ID}
                                </TableCell>
                                <TableCell align="right">{user.Nome}</TableCell>
                                <TableCell align="right">{user.Email}</TableCell>
                                <TableCell align="right">{FormataStringData(user.Data)}</TableCell>
                                <TableCell align="right">
                                    {
                                        user.Tipo == 1 ? "Administrador" :
                                            user.Tipo == 2 ? "Colaborador" : "Gerente"
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    );
}