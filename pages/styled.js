import React from "react";
import { colors } from "../colors";
import { ButtonStyled, ButtonOutlineStyled } from "../styled-components";
import { MainLayout } from "./../layouts";

const Default = () => {
  return (
    <MainLayout>
      <div className="p-3">
        <div className="row">
          {Object.keys(colors).map((color) => (
            <div className="col p-3" key={color}>
              <ButtonStyled color={color}>
                <span className="text-capitalize">{color}</span> Button
              </ButtonStyled>
            </div>
          ))}
        </div>

        <div className="row">
          {Object.keys(colors).map((color) => (
            <div className="col p-3" key={color}>
              <ButtonOutlineStyled color={color}>
                <span className="text-capitalize">{color}</span> Button
              </ButtonOutlineStyled>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Default;
