import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";

const Posts = () => {
  const [post, setPost] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);

  // api fetch
  const getData = async () => {
    await axios
      .get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
      .then((res) => {
        setPost(res.data.data);
      })
      .catch((err) => console.log(err.message));
  };

  // get data when page loads
  useEffect(() => {
    getData();
  }, []);

  // onscoll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      setIsFetching(true);
    }
  }

  // fetch for more data when scroll
  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
    setPage(page + 1);
  }, [isFetching]);

  function fetchMoreListItems() {
    setTimeout(() => {
      getData();
      setIsFetching(false);
    }, 2000);
  }

  return (
    <div className="max-w-sm py-6 mx-auto mt-20 space-y-3">
      {post.length === 0 ? (
        <Loading />
      ) : (
        <ul className="border divide-y divide-gray-200 ">
          {post.map((data, index) => (
            <li
              className="relative px-4 py-5 bg-white hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
              key={index}
            >
              <div className="flex justify-between space-x-3">
                <div className="flex-1 min-w-0">
                  <a href="#" className="block focus:outline-none">
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {data.name}
                    </p>
                  </a>
                </div>
                <time
                  dateTime="2021-01-27T16:35"
                  className="flex-shrink-0 text-sm text-gray-500 whitespace-nowrap"
                >
                  {data.airline.country}
                </time>
              </div>
              <div className="mt-1">
                <p className="text-sm text-gray-600 line-clamp-2">
                  {" "}
                  <strong>Trips:</strong> {data.trips}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {isFetching && <Loading />}
    </div>
  );
};

export default Posts;
