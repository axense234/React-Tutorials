import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(1);

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(() => dispatch(reset()));
  };

  return (
    <section className="counter-section">
      <p>{count}</p>
      <div className="counter-section-buttons">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset Counter</button>
      </div>
      <form className="counter-section-form">
        <label htmlFor="amount">Increment Amount:</label>
        <input
          type="number"
          id="amount"
          value={incrementAmount}
          onChange={(e) => {
            setIncrementAmount(Number(e.target.value));
          }}
        />
      </form>
      <div className="counter-section-buttons">
        <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
          Increment by Amount
        </button>
        <button onClick={() => resetAll()}>Reset Amount</button>
      </div>
    </section>
  );
};

export default Counter;
