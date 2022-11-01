import React, { useCallback, useEffect, useState } from "react";
import Info from "../components/Info/Info";
import Api from "../services/Api";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  const getFilm = useCallback(async () => {
    try {
      const { data } = await Api.get("/movie", {
        params: {
          field: "id",
          search: id,
        },
      });
      setFilm(data);
    } catch (error) {
      return console.log(error);
    }
  }, [id]);

  useEffect(() => {
    getFilm();
  }, [getFilm]);

  return (
    film && (
      <div className="detail_page">
        <Info film={film} />
      </div>
    )
  );
};

export default DetailPage;
