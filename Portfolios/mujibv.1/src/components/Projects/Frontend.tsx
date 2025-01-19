import RawTw from "/RawTw.png";
import VanillaAmazon from "/VanillaAmazon.png";
import ClientProject from "/ClientProject.png";
import YumDispatch from "/YumDispatch.png";
import rawStripePayment from "/rawStripePayment.png";
import ComponentTesting from "/ComponentTesting.png";
import UITesting from "/UITesting.png";

export default function Frontend() {
  return (
    <div className="w-full min-h-screen grid place-content-center place-items-center gap-3">
      <div className="grid grid-cols-12 md:grid-rows-6 place-items-center place-content-center gap-5">
        <div className="grid col-span-12 md:col-span-4 md:row-span-6 rounded-xl ">
          <img
            src={YumDispatch}
            alt="RawTw"
            className="w-72 h-52 object-cover rounded-xl"
          />
        </div>
        <div className="grid col-span-12 md:col-span-4 md:row-span-2 rounded-xl ">
          <img
            src={RawTw}
            alt="RawTw"
            className="w-72 h-52 object-cover rounded-xl"
          />
        </div>
        <div className="grid col-span-12 md:col-span-4 md:row-span-4 rounded-xl ">
          <img
            src={UITesting}
            alt="RawTw"
            className="w-72 h-52 object-cover rounded-xl"
          />
        </div>
        <div className="grid col-span-12 md:col-span-4 md:row-span-4 rounded-xl ">
          <img
            src={ComponentTesting}
            alt="RawTw"
            className="w-72 h-52 object-cover rounded-xl"
          />
        </div>
        <div className="grid col-span-12 md:col-span-4 md:row-span-2 rounded-xl ">
          <img
            src={VanillaAmazon}
            alt="RawTw"
            className="w-72 h-52 object-cover rounded-xl"
          />
        </div>
        <div className="grid col-span-12 md:col-span-4 md:row-span-6 rounded-xl ">
          <img
            src={ClientProject}
            alt="RawTw"
            className="w-72 h-52 object-cover rounded-xl"
          />
        </div>
        <div className="grid col-span-12 md:col-span-4 md:row-span-6 rounded-xl ">
          <img
            src={rawStripePayment}
            alt="RawTw"
            className="w-72 h-52 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
