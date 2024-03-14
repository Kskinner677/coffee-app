import { useState } from "react";

export default function Converter() {
  const [coffeeAmount, setCoffeeAmount] = useState<number>(0);
  const [waterAmount, setWaterAmount] = useState<number>(0);
  const [strongCoffee, setStrongCoffee] = useState<number>(0);
  const [weakCoffee, setWeakCoffee] = useState<number>(0);

  const onSelectChange = (e: any) => {
    const waterToGrams = e.target.value * 28.34952;
    const waterForBrew = waterToGrams + waterToGrams * 0.25;
    setWaterAmount(Math.round(waterForBrew));
    setCoffeeAmount(Math.round(waterForBrew / 16));
    setStrongCoffee(Math.round(waterForBrew / 15));
    setWeakCoffee(Math.round(waterForBrew / 17));
  };

  return (
    <>
      <div>
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          How much coffee do you want to brew?
        </h3>
        <ul className="flex flex-auto justify-center mb-6 md:grid-cols-4">
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

      <div className="flex flex-auto m-4 justify-center md:grid-cols-2">
        <div className=" w-60 mb-5 text-lg p-3 mx-2 font-medium bg-gray-700 text-gray-100 dark:text-white border rounded-lg">
          <h3>Coffee: ≈{coffeeAmount == 0 ? "" : coffeeAmount} grams</h3>
          <p className="text-sm pt-2">
            For a stronger cup of coffee use {strongCoffee} grams, and for a
            weaker cup of coffee use {weakCoffee} grams of coffee.
          </p>
        </div>
        <div className=" w-60 mb-5 text-lg p-3 mx-2 font-medium text-gray-700 dark:text-white border border-gray-700 rounded-lg">
          <h3>Water: ≈{waterAmount == 0 ? "" : waterAmount} grams</h3>
          <p className="text-sm pt-2">
            Get water to boiling temperature, 212° F or 100° C before brewing.
          </p>
        </div>
      </div>
      <h3 className="flex flex-auto justify-center text-lg p-2 mx-2 font-medium text-gray-700 dark:text-white border border-gray-700 rounded-md">
        Lorem ipsum dolor sit amet. Qui omnis voluptatem et quam inventore eos
        alias vero est assumenda nihil aut fugiat explicabo qui culpa suscipit
        aut adipisci fugit. Est sunt unde ut enim repellendus ea earum esse qui
        tenetur Quis. Non reprehenderit doloremque et dolorem nobis et autem
        recusandae. Cum dolor possimus et animi magni et officia aspernatur eum
        dolorem veritatis sed repudiandae distinctio qui galisum quos.
      </h3>
    </>
  );
}
