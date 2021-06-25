import React, { useState } from "react";
import { Sub } from "../types";

interface FormState {
  inputValues: Sub
}

interface Props {
  onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }:Props) => {

  const [inputValues, setinputValues] = useState<FormState['inputValues']>({
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
  })

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
    setinputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    });
  }

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

        <button>Save new sub!!</button>
      </form>
    </div>
  )
}

export default Form;
