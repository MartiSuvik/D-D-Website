import { ContainerScroll } from "../ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Experience the <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#cca267] to-black">
                Future of Luxury
              </span>
            </h1>
          </>
        }
      >
        <div className="w-full h-full">
          <video
            src="https://player.vimeo.com/progressive_redirect/playback/1060418812/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1307449865&signature=15131782f64da3ab832dd0b4cea14e437978d9d038509a341a784327354c7911&user_id=41438605"
            autoPlay
            muted
            loop
            playsInline
            className="mx-auto rounded-2xl object-cover h-full w-full"
          />
        </div>
      </ContainerScroll>
    </div>
  );
}