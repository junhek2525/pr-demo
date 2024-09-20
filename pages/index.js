import { Container,Table,TableBody, TableHead ,TableRow,TableCell } from "@mui/material"
import Link from "next/link";
import Button from "@mui/material/Button";


function createData(name,github,link){
    return {name,github,link};
}
const rows = [
  createData('duduge','https://github.com/junhek2525/pr-demo','/duduge'),
  createData('momery','https://github.com/junhek2525/pr-demo','/momery'),
  createData('snake','https://github.com/junhek2525/pr-demo','/snake')
]


export default function Home() {

  return(
    <>
      <Container fixed>
    <h1>니하오</h1>
    <Table sx={{minWidth : 650}} aria-Label="demo-list">
      <TableHead>
        <TableRow>
          <TableCell>Demo-List</TableCell>
          <TableCell>Github</TableCell>
          <TableCell>Link</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) =>(
          <TableRow
            key={row.name}
            sx={{'&:last-child td, &:last-child th': {border:0}}}
          >
            <TableCell component="th" scope="row">{row.name}</TableCell>
            <TableCell><Link href={row.github}>깃허브 바로가기</Link></TableCell>
            <TableCell><Button variant="outlined" size="small" href={row.link}>Link</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
      </Container>
    </>
  )
  // useEffect (() =>{

  //  window.location.href = '/두더지자아아압기/index.html'
  // },[]);
  
  
}
