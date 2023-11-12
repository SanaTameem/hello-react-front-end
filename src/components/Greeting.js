import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/features/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.text);
  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return (
    <h1>{greeting}</h1>
  );
};

export default Greeting;
