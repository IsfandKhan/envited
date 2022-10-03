export default function Index() {
  return (
    <div className="mt-2.5 px-12 flex flex-col text-center content-center lg:flex-row">
      <div className="lg:order-2 lg:mt-60 lg:text-right">
        <div className="text-3xl text-primary-purple font-bold">
          Imagine if
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple-2 to-primary-purple-3">
            Snapchat
          </div>
          had events.
        </div>
        <div className="text-[#4F4F4F] font-light md:w-2/5 m-auto lg:text-right lg:m-0 lg:ml-auto lg:w-full">
          Easily host and share events with your friends across any social
          media.
        </div>
      </div>
      <img
        className="w-8/12 md:w-4/12 lg:w-4/12 m-auto lg:order-1"
        src="/event.svg"
        alt="event example"
      />
      <button className="p-2 md:w-3/12 m-auto text-[#FFFFFF] rounded-lg bg-gradient-to-r from-primary-purple-2 to-primary-purple-3 lg:order-3 lg:absolute lg:left-[71%] lg:mt-[31rem]">
        🎉 Create my event
      </button>
    </div>
  );
}
