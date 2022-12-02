const border = {
  fontSize: "15px",
  color:"yellow",
};
export default function List({ name }) {
  //use curly brace if you pass name props
  return (
    <div className="flex mx-auto">
      <li style={border} className="font-bold">
        {name}
      </li>
      <button className="ml-4 text-white font-bold">Delete</button>
    </div>
  );
}
