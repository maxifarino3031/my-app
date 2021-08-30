import { useEffect } from 'react'
import { Table } from 'react-bootstrap'

export const ListView = () => {

    useEffect(()=>{
        console.log('listView')
    },[])

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>SNN</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>DSADASDDASDSAD</td>
                        <td>DSSADASDASDA</td>
                        <td>@DASDASDSDASADASDASD</td>
                        <td>@DSDSADASDADASDASDADASD</td>
                    </tr>
                                      
                </tbody>
            </Table>
        </>
    )
}