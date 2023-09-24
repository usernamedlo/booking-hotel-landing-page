import React from "react";

const BookingUIComponent = () => {
  return (
    <>
      <div className="w-[22.5rem] h-[23rem] bg-white rounded-xl p-6 text-black space-y-4">
        <h1 className="text-2xl font-semibold mb-2">Booking Hotel</h1>
        <h2 className="text-lg text-gray-600 mb-4">
          Let's start your place to stay.
        </h2>

        <label className="block text-sm font-medium mb-2">Location</label>
        <input
          type="text"
          placeholder="Enter your location, city, etc..."
          className="mb-4 w-full p-2 border rounded-md"
        />

        <div className="flex justify-between mb-4">
          <div className="flex-1 mr-2">
            <label className="block text-sm font-medium mb-2">Checkin</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="14 May 2023"
            />
          </div>
          <div className="flex-1 ml-2">
            <label className="block text-sm font-medium mb-2">Checkout</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="20 May 2023"
            />
          </div>
        </div>

        <button className="button w-full p-3">Discover Place</button>
      </div>
    </>
  );
};

export default BookingUIComponent;
