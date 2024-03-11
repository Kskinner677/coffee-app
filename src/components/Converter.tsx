import { useState } from "react";

export default function Converter() {
  const [coffeeAmount, setCoffeeAmount] = useState<number>(0);
  const [waterAmount, setWaterAmount] = useState<number>(0);

  const onSelectChange = (e: any) => {
    const waterToGrams = e.target.value * 28.34952;
    const waterForBrew = waterToGrams + waterToGrams * 0.25;
    setWaterAmount(Math.round(waterForBrew));
    setCoffeeAmount(Math.round(waterForBrew / 16));
  };

  return (
    <>
      <div>
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          How much coffee do you want to brew?
        </h3>
        <ul className="flex flex-auto justify-center md:grid-cols-4">
          <li>
            <input
              className="hidden peer"
              id="small-coffee"
              name="coffee-size"
              type="radio"
              value="6"
              required
              onClick={onSelectChange}
            />
            <label htmlFor="small-coffee" className="cup-size-icon">
              <div className="block">
                <div className="text-lg font-semibold">6 oz</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="medium-coffee"
              name="coffee-size"
              value="8"
              className="hidden peer"
              onClick={onSelectChange}
            />
            <label htmlFor="medium-coffee" className="cup-size-icon">
              <div className="block">
                <div className="w-full text-lg font-semibold">8 oz</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="large-coffee"
              name="coffee-size"
              value="10"
              className="hidden peer"
              onClick={onSelectChange}
            />
            <label htmlFor="large-coffee" className="cup-size-icon">
              <div className="block">
                <div className="w-full text-lg font-semibold">10 oz</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="extra-large-coffee"
              name="coffee-size"
              value="12"
              className="hidden peer"
              onClick={onSelectChange}
            />
            <label htmlFor="extra-large-coffee" className="cup-size-icon">
              <div className="block">
                <div className="w-full text-lg font-semibold">12 oz</div>
              </div>
            </label>
          </li>
        </ul>
      </div>

      <div>
        <p>Water: ≈{waterAmount == 0 ? "" : waterAmount} grams</p>
        <p>Coffee: ≈{coffeeAmount == 0 ? "" : coffeeAmount} grams</p>
      </div>
    </>
  );
}
