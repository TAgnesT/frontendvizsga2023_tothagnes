import React from 'react'

const Book = ({title, number}) => {
  return (
    <div>
        <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Cim</th>
      <th scope="col">Sorszam</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{title}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{number}</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Book