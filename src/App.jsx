import React from "react";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

export default function App() {
  // This is how you can reference the api key in the env file
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
  const [showModal, setShowModal] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchApiData() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;

      if (localStorage.getItem(localKey)) {
        setData(JSON.parse(localStorage.getItem(localKey)));
        return;
      }
      // flush out local storage in case there is anything weird in it  then set it with the nasa stuff
      localStorage.clear();

      try {
        const response = await fetch(url);
        const apiData = await response.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
      } catch (err) {
        console.error(err);
      }
    }

    fetchApiData();
  }, []);

  function handleShowModal() {
    setShowModal((prevShowModal) => !prevShowModal);
  }
  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && <SideBar data={data} handleShowModal={handleShowModal} />}
      {data && <Footer data={data} handleShowModal={handleShowModal} />}
    </>
  );
}
