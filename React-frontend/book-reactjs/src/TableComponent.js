import axios from "axios";
import React, { useEffect, useState } from "react";
// import Image from "react-bootstrap/Image";
import { Container, Table } from "reactstrap";

function TableComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, []);
  return (
    <div>
      <Container>
        <Table striped>
          <thead>
            <tr>
              <th>No</th>
              <th>Judul Buku</th>
              <th>Deskripsi</th>
              <th>Gambar</th>
              <th>tahun Rilis</th>
              <th>Harga</th>
              <th>Total Halaman</th>
              <th>Ketebalan</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr> */}

            {data.map((book, index) => (
              <tr key={index}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.description}</td>
                <td>
                  <img
                    src={book.image_url}
                    className="image"
                    alt=""
                    width={100}
                  />
                </td>
                <td>{book.release_year}</td>
                <td>{book.price}</td>
                <td>{book.total_page}</td>
                <td>{book.thickness}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default TableComponent;
