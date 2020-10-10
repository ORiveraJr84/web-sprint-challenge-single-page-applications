import React from "react";

const Order = () => {
  return (
    <form>
      This is the order page.
      <label htmlFor="name">
        <input type="text" name="name" id="name" data-cy="name" />
      </label>
      <select name="size" id="size" data-cy="size">
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="extraLarge">Extra Large</option>
        <fieldset name="toppings" id="toppings" data-cy="toppings">
          <legend>Toppings</legend>
          <label htmlFor="pepperoni">
            <input
              type="checkbox"
              name="pepperoni"
              id="pepperoni"
              data-cy="pepperoni"
            />
          </label>
          <label htmlFor="bacon">
            <input type="checkbox" name="bacon" id="bacon" data-cy="bacon" />
          </label>
          <label htmlFor="bbqChicken">
            <input
              type="checkbox"
              name="bbqChicken"
              id="bbqChicken"
              data-cy="bbqChicken"
            />
          </label>
          <label htmlFor="onions">
            <input type="checkbox" name="onions" id="onions" data-cy="onions" />
          </label>
          <label htmlFor="specialInstructions">
            <input
              type="textarea"
              name="specialInstructions"
              id="specialInstructions"
              data-cy="specialInstructions"
            />
            <button type="submit" name="submit" id="submit" data-cy="submit">
              add to cart
            </button>
          </label>
        </fieldset>
      </select>
    </form>
  );
};

export default Order;
