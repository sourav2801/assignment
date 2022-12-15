import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [month, setMonth] = useState()
  const [time, setTime] = useState() 
  const [agevalidation, setAgevalidation] = useState(false)  
  const [response, setResponse] = useState('')
  
  const URL ="http://localhost:5000"

  const CompletePayment = async(event) =>{
    event.preventDefault()
    if(age>=18 && age<=65){
    axios.post(URL,{
      name: String(name),
      age: Number(age),
      month: String(month),
      time: String(time)

    }).then((res) => res.data)
    .then(() => setResponse('payament successfull'))
    .catch(() => setResponse('opps..! payament unsuccessfull'))
  }
  else{
    setAgevalidation(true)
  }
  }

  // const handleSubmit =() =>{
  //  postEntry()

  // }
  return (
    <div className="flex flex-col justify-center items-center text-xl">
      <h1 className='pt-16 text-3xl font-semibold'>Admission Form</h1>
      <div className='bg-gray-100 drop-shadow-xl rounded-2xl h-72 w-72 p-2'>
        <form onSubmit={CompletePayment}>
          <input className='h-8 ml-1 my-2 pl-2 bg-white rounded-xl' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="enter name" />
          {agevalidation? <div className='ml-2 text-sm text-red-700'>people within the age limit of 18-65 can enroll</div> : <></> }
          <input className='h-8 ml-1 my-2 pl-2 bg-white rounded-xl' value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder="enter age" /><br />
          <select className='h-8 m-1 mt-2 px-1 bg-white rounded-xl' value={month} onChange={(e) =>{setMonth(e.target.value)}} >
            <option value="jan">jan</option>
            <option value="feb">feb</option>
            <option value="march">march</option>
            <option value="april">april</option>
            <option value="may">may</option>
            <option value="june">june</option>
            <option value="july">july</option>
            <option value="aug">aug</option>
            <option value="sep">sep</option>
            <option value="oct">oct</option>
            <option value="nov">nov</option>
            <option value="dec">dec</option>
          </select>
          <select className='h-8 ml-1 px-1 bg-white rounded-xl' value={time} onChange={(e) =>{setTime(e.target.value)}}>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select><br />
          <input className='ml-1 mt-5 px-2 py-1 rounded-xl bg-white' type="submit" value="pay 500/-Rs" />
        </form>
        <div className="text-center">{response}</div>        
      </div>

    </div>
  );
}

export default App;
