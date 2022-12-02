import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import type {ApiText, InfoText} from "../../types";
import {Link, Outlet, useLocation} from "react-router-dom";

const Contacts: React.FC = () => {
  const location = useLocation();

  const [contactText, setContactText] = useState<InfoText[]>([]);

  const fetchContactText = useCallback(async () => {
    try {
      const response = await axiosApi.get<ApiText>('contacts.json');

      const textResponse = Object.keys(response.data).map((elem) => {
        const text = response.data[elem];
        text.id = elem

        return text;
      });

      setContactText([textResponse[0]]);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchContactText().catch(console.error);
  }, [fetchContactText, location])

  return (
    <div>
      {contactText[0] &&
          <>
              <p className="mt-3">{contactText[0].text}</p>
              <Link
                  className="btn btn-info w-25 mx-auto"
                  to={contactText[0].id}>Edit</Link>
              <Outlet/>
          </>
      }
    </div>
  );
};

export default Contacts;