import { useState } from "react";

export default function Form() {
  const [name,setName] = useState("");
  const [age,setAge] = useState("");

  const handleName = (event) => {
    const n = event.target.value
    setName((name) => {
      name = n
      return name;
    });
  };

  const handleAge =(e)=>{
    setAge((age)=>{
        age = e.target.value
        return age
    })
  };

  const formSubmit = (e) =>{
    e.preventDefault();
    console.log(name,age)
  }



  return (
    <div>
      <form className="bg-blue-200 mt-20" onSubmit={formSubmit}>
        <input
          type="text"
          onChange={handleName}
          name="name"
          value={name}
          placeholder="Enter your name"
        ></input>

        <input
          type="text"
          onChange={handleAge}
          name="age"
          value={age}
          placeholder="Enter your age"
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
