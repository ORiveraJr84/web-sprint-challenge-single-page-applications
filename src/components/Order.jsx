import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";

const Order = () => {
  const [ordersList, setOrdersList] = useState({
    name: "",
    size: "",
    toppings: {
      pepperoni: false,
      bacon: false,
      bbqChicken: false,
      onions: false,
    },
    specialInstructions: "",
  });

  const [isDisabled, setIsDisabled] = useState(false);

  const [apiPost, setApiPost] = useState({});

  const [errors, setErrors] = useState();

  const formSchema = yup.object().shape({
    name: yup.string().min(2).required(),
  });

  useEffect(() => {
    formSchema.isValid(ordersList).then((validMessage) => {
      setIsDisabled(!validMessage);
    });
  }, [ordersList]);

  const validate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(
        e.target.type === "checkbox" ? e.target.checked : e.target.value
      )
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((error) => {
        setErrors({ ...errors, [e.target.name]: error.errors[0] });
      });
  };

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setOrdersList({
        ...ordersList,
        toppings: {
          ...ordersList.toppings,
          [e.target.name]: e.target.checked,
        },
      });
    } else {
      setOrdersList({
        ...ordersList,
        [e.target.name]: e.target.value,
      });
    }
    console.log(ordersList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", ordersList)
      .then((successMessage) => {
        setApiPost(successMessage.data);
        setOrdersList({
          name: "",
          size: "",
          toppings: {
            pepperoni: false,
            bacon: false,
            bbqChicken: false,
            onions: false,
          },
          specialInstructions: "",
        });
      })
      .catch((errorMessage) => {
        setApiPost(errorMessage.data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          id="name"
          data-cy="name"
          value={ordersList.name}
          onChange={handleChange}
        />
      </label>
      <select
        name="size"
        id="size"
        data-cy="size"
        value={ordersList.size}
        onChange={handleChange}
      >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="extraLarge">Extra Large</option>
      </select>
      <fieldset name="toppings" id="toppings" data-cy="toppings">
        <legend>Toppings</legend>
        <label htmlFor="pepperoni">
          <input
            type="checkbox"
            name="pepperoni"
            id="pepperoni"
            data-cy="pepperoni"
            checked={ordersList.toppings.pepperoni}
            onChange={handleChange}
          />
          Pepperoni
        </label>
        <label htmlFor="bacon">
          <input
            type="checkbox"
            name="bacon"
            id="bacon"
            data-cy="bacon"
            checked={ordersList.toppings.bacon}
            onChange={handleChange}
          />
          Bacon
        </label>
        <label htmlFor="bbqChicken">
          <input
            type="checkbox"
            name="bbqChicken"
            id="bbqChicken"
            data-cy="bbqChicken"
            checked={ordersList.toppings.bbqChicken}
            onChange={handleChange}
          />
          Barbecue Chicken
        </label>
        <label htmlFor="onions">
          <input
            type="checkbox"
            name="onions"
            id="onions"
            data-cy="onions"
            checked={ordersList.toppings.onions}
            onChange={handleChange}
          />
          Onions
        </label>
      </fieldset>
      <label htmlFor="specialInstructions">
        Special Instructions
        <input
          type="textarea"
          name="specialInstructions"
          id="specialInstructions"
          data-cy="specialInstructions"
          value={ordersList.specialInstructions}
          onChange={handleChange}
        />
      </label>
      <button
        type="submit"
        name="submit"
        id="submit"
        data-cy="submit"
        disabled={isDisabled}
      >
        add to cart
      </button>
      <pre>{JSON.stringify(apiPost, null, 2)}</pre>
    </form>
  );
};

export default Order;
