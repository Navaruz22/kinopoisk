import React, { useEffect, useState } from "react";
import Devices from "../components/Devices/Devices";
import Films from "../components/Films/Films";
import {
  BREAKPOINT_4,
  BREAKPOINT_6,
} from "../components/FilmsCarousel/breakpoints";
import Subscription from "../components/Subscription/Subscription";
import Api from "../services/Api";

const MainPage = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await Api.get("/movie", {
        params: {
          field: "year",
          search: 2022,
          sortField: "votes.imdb",
          sortType: -1,
          limit: 10,
        },
      });
      setData(response.data.docs);
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mainpage">
      <Films
        movies={data}
        color={"#1f1f1f"}
        background={"#fff"}
        breakpoints={BREAKPOINT_6}
        title={"Фильмы 2022"}
        type={"year_film"}
      />
      <Subscription />
      <Films
        movies={data}
        color={"#fff"}
        background={"#000"}
        breakpoints={BREAKPOINT_4}
        title={"Популярные фильмы"}
        type={"watch_now"}
      />
      <Devices />
    </div>
  );
};

export default MainPage;
