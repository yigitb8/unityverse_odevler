import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


const BasicTable = () => {

    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const fetchData = async () => {
        setError('');
        if (!Number.isInteger(Number(count)) || count <= 0) {
            setError('Lütfen geçerli bir sayı giriniz.');
            return;
        }
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${count}`);
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError('Veri çekme hatası: ' + error.message);
        }
    };

    return (
        <>
            <h1>Veri Çekme</h1>
            <input
                type="text"
                value={count}
                placeholder="Çekilecek veri id'si girin"
                onChange={(e) => setCount(e.target.value)}  
            />
            <Button variant="contained" onClick={fetchData} color="success">Veri Çek</Button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{border: '1px solid grey', backgroundColor: '#73BF94' }}>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Body</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: '1px solid grey' } }}
                            >
                                <TableCell component="th" scope="row">{item.id}</TableCell>
                                <TableCell align="right">{item.title}</TableCell>
                                <TableCell align="right">{item.body}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default BasicTable;