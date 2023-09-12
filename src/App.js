import { useState } from 'react';
import ExampleConditionalRenderingBooleanOperator from '.ExampleConditionalRenderingBooleanOperator';
import ExampleConditionalRenderingTernaryOperator from '.ExampleConditionalRenderingTernaryOperator';

export default function App() {
  return (
    <>
      <ConditionalRenderingTernaryOperator />
      <hr />
      <ConditionalRenderingBooleanOperator />
    </>
  );
}
