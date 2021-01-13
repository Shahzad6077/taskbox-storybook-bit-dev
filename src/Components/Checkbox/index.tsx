import React, { FC } from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div<Partial<CheckboxProps>>`
  display: inline-flex;
  vertical-align: middle;

  label {
    display: inline-flex;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  &::disabled {
    cursor: not-allowed;
  }
`;
interface StyledCheckboxProps {
  checked?: boolean;
  disabled?: boolean;
}
const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${({ checked, disabled }) =>
    checked ? (disabled ? "#D7D7D8" : "salmon") : "papayawhip"};
  /* background: ${({ checked }) => (checked ? "salmon" : "papayawhip")}; */
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export type CheckboxProps = {
  name?: string;
  className?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  varient?: "CHECKBOX" | "CHILDREN";
  disabled?: boolean;
};

const Checkbox: FC<CheckboxProps> = ({
  className,
  checked,
  children,
  varient = "CHECKBOX",
  ...props
}) => (
  <CheckboxContainer className={className} disabled={props.disabled}>
    <label>
      <HiddenCheckbox checked={checked} {...props} />
      {varient === "CHECKBOX" && (
        <StyledCheckbox checked={checked} disabled={props.disabled}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      )}
      {varient === "CHILDREN" && children}
    </label>
  </CheckboxContainer>
);

export default Checkbox;
