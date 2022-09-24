import { userAgent } from 'next/server';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'

function DarkTable() {

const [data, setData] = useState(null)
const [crew, setCrew] = useState(0)
const [isLoading, setLoading] = useState(false)


useEffect(() => {
    setLoading(true)
    fetch('https://api.spacexdata.com/v4/crew')
    .then(res => res.json())
    .then(data => {
        setData(data)
        setLoading(false)
    })
    }, []  
)

  return (
    <Table striped bordered hover variant="dark" responsive>
      <thead className="table-bordered border-light hover">
        <tr>
          <th>#</th>
          <th>Astronaut Name</th>
          <th>Agency</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map( (user) =>
            <tr>
            <td></td>
            <td>{user.name}</td>
            <td>{user.status}</td>
            <td>{user.agency}</td>
          </tr>
        )}
        <tr>
          <td>1</td>
          <td>Luna</td>
          <td>Partycat</td>
          <td>@luna</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Finnigan Orange</td>
          <td>Caaaaaaaaaaaatman</td>
          <td>@Finn</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Omnom</td>
          <td>Turrdurr</td>
          <td>@Turrrrrrrrrrrrrrrrrrrrrrrrrr</td>
        </tr>
        <tr>
          <td>4</td>
          <td>🦝</td>
          <td colSpan={2}>Larry the Bird</td>
        </tr>
        <tr>
          <td>5</td>
          <td colSpan={2}>@mrspecial </td>
          <td>so special so special</td>

        </tr>
        <tr>
          <td>4</td>
          <td>Meow</td>
          <td>Sir</td>
          <td>McMaster</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DarkTable;