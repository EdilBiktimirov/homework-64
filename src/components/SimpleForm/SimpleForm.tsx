import React, {FormEvent, useState} from 'react';
import {InfoText} from "../../types";
import axiosApi from "../../axiosApi";
import {useNavigate, useParams} from "react-router-dom";

interface Props {
  text: InfoText;
  category: string;
}

const SimpleForm: React.FC<Props> = ({text, category}) => {
  const navigate = useNavigate();
  const {id} = useParams();

  const [info, setInfo] = useState<InfoText>(text);

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await axiosApi.put(category + '/' + id + '.json', info);
    navigate('/' + category);
  };

  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

    return (
      <form onSubmit={onFormSubmit}>
        <label htmlFor="simpleArea" className="form-label mt-2">Make your changes:</label>
        <textarea
          className="form-control mb-2"
          id="simpleArea"
          name="text"
          value={info.text}
          onChange={onTextAreaChange}></textarea>
        <button type="submit" className="btn btn-success w-50 mx-auto mt-2">Update</button>
      </form>
    );
  };

export default SimpleForm;