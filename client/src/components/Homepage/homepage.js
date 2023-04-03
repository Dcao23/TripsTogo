// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Button } from "@mui/material";
import ComingSoon from "../assets/coming_soon.png";
import HorrorFolder from "../assets/horror_finder.png";

const blogPosts = [
  {
    name: "Horror Finder",
    link: "https://github.com/jNighton/Horror-Finder",
    image: HorrorFolder,
  },
  {
    name: "This is my Project",
    link: "https://github.com/jNighton/Horror-Finder",
    image: ComingSoon,
  },
  {
    name: "This is my Project",
    link: "https://github.com/jNighton/Horror-Finder",
    image: ComingSoon,
  },

  {
    name: "This is my Project",
    link: "https://github.com/jNighton/Horror-Finder",
    image: ComingSoon,
  },
  {
    name: "This is my Project",
    link: "https://github.com/jNighton/Horror-Finder",
    image: ComingSoon,
  },
  {
    name: "This is my Project",
    link: "https://github.com/jNighton/Horror-Finder",
    image: ComingSoon,
  },
  {
    name: "This is my Project",
    link: "https://github.com/jNighton/Horror-Finder",
    image: ComingSoon,
  },
];

export default function Projects() {
  return (
    <>
      <div id="portfolio" className="py-12 bg-secondary">
        <div className="text-center text-[2rem] font-semibold">Portfolios</div>
        <Swiper
          grabCursor={true}
          loop={true}
          breakpoints={{
            1240: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
          spaceBetween={30}
          pagination={true}
          modules={[Pagination]}
          className="mt-5 p-5 xl:px-0 pb-10 md:pb-12 max-w-[1180px] mx-auto"
        >
          {projectList?.map((x) => {
            return (
              <SwiperSlide>
                <div className="bg-white drop-shadow-lg rounded-md overflow-hidden">
                  <div>
                    <img
                      className="h-[10rem] lg:h-[15rem] w-full object-cover"
                      src={x.image}
                    />
                  </div>
                  <div className="p-5 flex flex-row items-center justify-between">
                    <div className="font-semibold md:text-[1.25rem]">
                      {x.name}
                    </div>
                    <Button
                      variant="contained"
                      onClick={() => window.open(x.link)}
                      className="capitalize text-primary md:text-[1.25rem] bg-primary text-white hover:bg-primary"
                    >
                      Click Me
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
