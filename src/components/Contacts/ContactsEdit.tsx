import React, {useCallback, useEffect, useState} from 'react';
import type {ApiText, InfoText} from "../../types";
import axiosApi from "../../axiosApi";
import SimpleForm from "../SimpleForm/SimpleForm";

const ContactsEdit = () => {
  const [contactApi, setContactApi] = useState<InfoText[]>([]);

  const fetchAboutText = useCallback(async () => {
    try {
      const response = await axiosApi.get<ApiText>('contacts.json');

      const textResponse = Object.keys(response.data).map((elem) => {
        const text = response.data[elem];
        text.id = elem

        return text;
      });

      setContactApi([textResponse[0]]);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchAboutText().catch(console.error);
  }, [fetchAboutText]);

  return (
    <div>
      {contactApi[0] && (
        <SimpleForm text={contactApi[0]} category={'contacts'}/>
      )}
    </div>
  );
};

export default ContactsEdit;