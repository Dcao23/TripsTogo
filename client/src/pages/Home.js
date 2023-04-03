import React from "react";
import { Header } from "client/src/components/header.jsx";
import "../assets/css/home.css";
import { InfoBox } from "client/src/components/Homepage/Infobox.jsx";
export const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="boxes-wrapper common_width">
        <InfoBox
          title="Cappadocia, Turkey"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg/516px-Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg"
          description={`Cappadocia is a historical region in Central Anatolia, Turkey. It is largely in the provinces of Nevşehir, Kayseri, Aksaray, Kırşehir, Sivas and Niğde.`}
        />
      </div>
    </div>
  );
};