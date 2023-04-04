import React from "react";
import { Header } from "../components/header";
import "../assets/css/home.css";
import { InfoBox } from "../components/Homepage/Infobox";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="boxes-wrapper common_width">
        <InfoBox
          title="Cappadocia, Turkey"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg/516px-Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg"
          description={`Cappadocia is a historical region in Central Anatolia, Turkey. It is largely in the provinces of Nevşehir, Kayseri, Aksaray, Kırşehir, Sivas and Niğde.`}
        />{" "}
        <InfoBox
          title="Santorini"
          img="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/best-Things-to-do-in-Santorini-Greece-Bells-Oia.jpg"
          description={`Santorini is an island in the southern Aegean Sea, about 200 km (120 mi) southeast from the Greek mainland. It is the largest island of a small circular archipelago, which bears the same name and is the remnant of a caldera.`}
        />
        <InfoBox
          title="Lake Louise, Canada"
          img="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/Banff-to-Jasper-Icefields-Parkway-Lake-Louise.jpg"
          description={`Lake Louise is a hamlet within Banff National Park in Alberta, Canada. Named after Princess Louise, Duchess of Argyll, it lies in Alberta's Rockies on the Bow River, 3 km (1.9 mi) northeast of the lake that shares its name. `}
        />
        <InfoBox
          title="Maldives"
          img="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/Adventure-couples-Maldives-Bungalow.jpg"
          description={`The Maldives officially the Republic of Maldives Dhivehi Raajjeyge Jumhooriyyaa, Dhivehi, is an archipelagic state in South Asia, situated in the Indian Ocean.`}
        />
        <InfoBox
          title="Antarctica"
          img="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/Facts-About-New-Zealand-Antarctica-Neighbour.jpg"
          description={`Antarctica is Earth's southernmost and least-populated continent. Situated almost entirely south of the Antarctic Circle and surrounded by the Southern Ocean (also known as the Antarctic Ocean), it contains the geographic South Pole.`}
        />
        <InfoBox
          title="Serengeti Plains, Tanzania"
          img="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/photography-tours-2018-tanzania-25.jpg"
          description={`The Serengeti ecosystem is a geographical region in Africa, spanning the Mara and Arusha Regions of Tanzania.[1] The protected area within the region includes approximately 30,000 km2 (12,000 sq mi) of land, including the Serengeti National Park.`}
        />
      </div>
    </div>
  );
};

export default Home;