import React, {useCallback, useEffect, useState} from 'react';
import SimpleForm from "../SimpleForm/SimpleForm";
import type {ApiText, InfoText} from "../../types";
import axiosApi from "../../axiosApi";

const AboutEdit: React.FC = () => {
  const [textApi, setTextApi] = useState<InfoText[]>([]);

  const fetchAboutText = useCallback(async () => {
    try {
      const response = await axiosApi.get<ApiText>('about.json');

      const textResponse = Object.keys(response.data).map((elem) => {
        const text = response.data[elem];
        text.id = elem

        return text;
      });

      setTextApi([textResponse[0]]);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchAboutText().catch(console.error);
  }, [fetchAboutText]);

  return (
    <div>
      {textApi[0] && (
        <SimpleForm text={textApi[0]} category={'about'}/>
      )}
    </div>
  );
};

export default AboutEdit;