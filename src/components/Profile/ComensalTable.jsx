import React from "react";
import { Table } from "react-bootstrap";

const ComensalTable = ({ comensales }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre completo</th>
          <th>Curso</th>
          <th>Escuela</th>
        </tr>
      </thead>
      <tbody>
        {comensales.map((comensal, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{comensal.nombre}</td>
            <td>{comensal.curso}</td>
            <td>{comensal.escuela}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ComensalTable;
