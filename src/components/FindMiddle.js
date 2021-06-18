import { useState } from "react";
import axios from "axios";

function FindMiddle() {
  // input fields for everyone
  const [peopleAddresses, setPeopleAddresses] = useState([]);
  // middle point
  const [middlePoint, setMiddlePoint] = useState("");

  // saving all the input fields
  const handleChangeMiddle = (e) => {
    setPeopleAddresses({
      ...peopleAddresses,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitMiddle = async (e) => {
    e.preventDefault();
    console.log(peopleAddresses);
    const result = await axios.post(
      `http://localhost:8080/api`,
      peopleAddresses
    );
    console.log(result.data);
    setMiddlePoint(result.data);
  };

  return (
    <div className="FindMiddle">
      <h2>Find middle point for 5 people</h2>
      <div>
        <form onSubmit={handleSubmitMiddle}>
          <div>
            <label htmlFor="person1">1: </label>
            <input type="text" name="person1" onChange={handleChangeMiddle} />
          </div>

          <div>
            <label htmlFor="person2">2: </label>
            <input type="text" name="person2" onChange={handleChangeMiddle} />
          </div>

          <div>
            <label htmlFor="person3">3: </label>
            <input type="text" name="person3" onChange={handleChangeMiddle} />
          </div>

          <div>
            <label htmlFor="person4">4: </label>
            <input type="text" name="person4" onChange={handleChangeMiddle} />
          </div>

          <div>
            <label htmlFor="person5">5: </label>
            <input type="text" name="person5" onChange={handleChangeMiddle} />
          </div>

          <button>Find middle</button>

          {middlePoint && <p>{middlePoint}</p>}
        </form>
      </div>
    </div>
  );
}
export default FindMiddle;
