import EventPin from "../components/event-pin";

export default function Event() {
  return (
    <div className="flex md:content-center flex-col md:p-28 lg:flex-row">
      <img className="lg:order-3 lg:w-2/5" src="/birthday.svg" alt="birthday" />
      <div className="px-3 mr-auto mt-5">
        <div className="capitalize font-bold text-3xl text-primary-purple">
          birthday bash
        </div>
        <div className="text-sm font-normal text-[#828282]">
          Hosted by <span className="font-bold">Elysia</span>
        </div>
        <div className="mt-10">
          <EventPin
            type="calender"
            name="18 August 6:00PM"
            info="19 August 1:00PM"
          />
          <div className="mt-5">
          <EventPin
            icon="/pin-icon.svg"
            name="Some Name"
            info="Suburb, State, Postcode"
          />
          </div>
         
        </div>
      </div>
    </div>
  );
}
