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
    <div>
      <form className="flex flex-row">
        <div>
          <label>
            <input
              type="radio"
              name="cup-size"
              value={6}
              onClick={onSelectChange}
            />
            6 oz
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="cup-size"
              value={8}
              onClick={onSelectChange}
            />
            8 0z
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="cup-size"
              value={10}
              onClick={onSelectChange}
            />
            10 oz
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="cup-size"
              value={12}
              onClick={onSelectChange}
            />
            12 oz
          </label>
        </div>
      </form>

      <div>
        <p>Water: ≈{waterAmount == 0 ? "" : waterAmount} grams</p>
        <p>Coffee: ≈{coffeeAmount == 0 ? "" : coffeeAmount} grams</p>
      </div>
    </div>
  );
}
