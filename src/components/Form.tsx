import React from "react";
import useNewSubForm from "../hooks/useNewSub";
import { Sub } from "../types";

interface Props {
  onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }:Props) => {

  // const [inputValues, setinputValues] = useState<FormState['inputValues']>(INITAL_STATE);
  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
    handleClear();
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value
      }
    });
  }

  const handleClear = () => dispatch({ type: 'clear' });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValues.nick} onChange={handleChange}
          name="nick" placeholder="nick" />
        <input type="number" value={inputValues.subMonths} onChange={handleChange}
          name="subMonths" placeholder="subMonths" />
        <input type="text" value={inputValues.avatar} onChange={handleChange}
          name="avatar" placeholder="avatar" />
        <textarea value={inputValues.description} onChange={handleChange}
          name="description" placeholder="description"></textarea>

        <button type="button" onClick={handleClear}>Clean</button>
        <button type="submit">Save new sub!!</button>
      </form>
    </div>
  )
}

export default Form;
