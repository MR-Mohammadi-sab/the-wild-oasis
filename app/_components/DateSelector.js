"use client";
import { differenceInDays, isPast, isSameDay, isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./useReservation";


function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({settings,bookedDates,cabin}) {
  const {range,setRange,resetRange}=useReservation()
  console.log(bookedDates);
  
  const displayRange=isAlreadyBooked(range,bookedDates)?{}:range
  const {regularPrice,discount}=cabin
  const numNights=differenceInDays(displayRange?.to,displayRange?.from)
  const cabinPrice = numNights * (regularPrice-discount);


  // SETTINGS
  const {minBookingLength,maxBookingLength} = settings;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center max-w-1/2 md:w-auto"
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
          disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex items-center justify-between md:px-8 px-3 bg-accent-500 text-primary-800 md:h-[64px] h-[74px] w-[90%] mx-auto">
        <div className="flex items-baseline md:gap-6 gap-2">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="md:text-2xl text-lg">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-lg md:text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 md:px-3 px-1 md:py-2 py-1 md:text-2xl text-lg">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="md:text-lg text-sm font-bold uppercase">Total</span>{" "}
                <span className="md:text-2xl text-lg font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="border border-primary-800 md:py-2 py-1 md:px-4 px-2 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
