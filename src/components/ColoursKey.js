import React from "react";

import {
  ColoursKeyWrapper,
  KeyElement,
} from "../styles/ColoursKey";

const ColoursKey = () => {
  return (
    <ColoursKeyWrapper>
      <KeyElement className="title">Key to expiry date colours:</KeyElement>
      <KeyElement className="expiring">Expiring within 28 days</KeyElement>
      <KeyElement className="expired">Expired</KeyElement>
    </ColoursKeyWrapper>
  )
}

export default ColoursKey;