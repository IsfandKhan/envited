export default function EventPin({ type, name, info }) {
    const isCalenderPin = type === 'calender';

    function getInfo () {
        return isCalenderPin
            ? <>to <span className={'font-bold'}>{info}</span> UTC +10</>
            : info;
    }
    return (
        <div className="flex align-middle flex-row">
            <img src={isCalenderPin ? '/calender-icon.svg' : '/pin-icon.svg'} alt="icon" />
            <span className="flex flex-col ml-5">
                <span className="pt-2 font-bold text-lg text-primary-purple mr-auto">{name}</span>
                <span className="font-normal text-lg text-[#4F4F4F]">{getInfo()}</span>
            </span>
            <img className="absolute left-[70%] mt-10" src="arrow.svg" alt="arrow icon" />
        </div>
    );
}