import Table from 'react-bootstrap/Table'

function DarkTable() {
  return (
    <Table striped bordered hover variant="dark" responsive-md>
      <thead className="table-bordered border-light hover">
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
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