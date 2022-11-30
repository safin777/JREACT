//conditional rendering
import { useState } from "react";

export default function ConditionalCom() {
  const [display, setDisplay] = useState(true);

  let output; //take a variable to show like a variable in html

  if (display) {
    output = <h3>Show this</h3>; //set value hare based on condition
  } else {
    output = <h3>Hide this</h3>;
  }

  return (
    //return here the variable which is set based on condition
    <>
      <div className="mt-20 bg-gray-100">{output}</div>
    </>
  );
}
