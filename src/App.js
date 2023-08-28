import axios from "axios";
import {useEffect,useState} from "react";
import './App.css';
import {Link } from 'react-router-dom'

function App() {
  const[columns,setColumns] =useState([])
  const [records,setRecords] = useState([])
  useEffect(() => {
  axios.get('http://localhost:8080/users')

  .then (res => {
    setColumns(Object.keys(res.data[0]))
    setRecords(res.data)
  })
}, [])


  return (
  
    <div className="container mt-5">
      <div className="text-end"><Link to='/create' className="btn btn-primary">Add+</Link></div>
     <table className="table">
      <thead>
<tr>
  {columns.map((
    c,i) => (
    <th key={i}>{c} </th>
    )) }
</tr>
      </thead>
      <tbody>
        {records.map((d,i) => (
        <tr key={i}>
          <td>{d.id}</td>
          <td>{d.name}</td>
          <td>{d.email}</td>

        </tr>
        ))
}
      </tbody>
     </table>

   <p>testing</p>  
    </div>
  );
}

export default App;
