import { Alert } from 'react-native';
const URL = 'https://empleados-app.herokuapp.com/api/empleado';
// const URL = 'https://jsonplaceholder.typicode.com/users';

export default () => {
	return fetch(URL)
	.then(res => Promise.all([res, res.json()]));
}

export const newEmployee = (req)=>{
  console.log('desde el api:', JSON.stringify(req[0]))
	return fetch(URL, {
		method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
		body: JSON.stringify(req[0])
	})
  .then((response) => {
    console.log(response);
    return response.json(response)
  })
  .then((resJson)=>{
    console.log(resJson);
  })
  .catch((err)=>{ console.log(err) })
}

export const updateEmployee = (req)=>{
   console.log('actualizar en este zelda :v :', URL + '/:' + req._id);
   URL = URL + '/:' + req._id;
   return fetch(URL, {
     method: 'PUT',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(req[0])
   })
   .then((employee)=>{
     return employee.json(employee);
   })
   .catch((err)=>{ console.log(err); })
}

export const deleteEmloyee = (req)=>{
  console.log('eliminar en este zelda :v :', URL + '/:' + req._id);
  URL = URL + '/:' + req._id;
  return fetch(URL, {
    method: 'DELETE'
  })
  .then((employee)=> employee.json({ message: 'Se actualizo con exito' }))
  .catch((err)=> console.log(err));
}
