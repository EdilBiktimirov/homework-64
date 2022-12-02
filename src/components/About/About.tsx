import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import type {ApiText, InfoText} from "../../types";
import {Link, Outlet, useLocation} from "react-router-dom";

const About: React.FC = () => {
  const location = useLocation();

  const [text, setText] = useState<InfoText[]>([]);

  const fetchAboutText = useCallback(async () => {
    try {
      const response = await axiosApi.get<ApiText>('about.json');

      const textResponse = Object.keys(response.data).map((elem) => {
        const text = response.data[elem];
        text.id = elem

        return text;
      });

      setText([textResponse[0]]);
    } catch (e) {
      console.log(e);
    }
  }, [])

  useEffect(() => {
    fetchAboutText().catch(console.error);
  }, [fetchAboutText, location]);

  return (
    <div>
      {text[0] &&
          <>
              <p className="mt-3">{text[0].text}</p>
              <Link
                  className="btn btn-info w-25 mx-auto"
                  to={text[0].id}>Edit</Link>
              <Outlet/>
          </>
      }
    </div>
  );
};

export default About;