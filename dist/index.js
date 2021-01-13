var __rest = (this && this.__rest) || function (s, e) {

    var t = {};

    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)

        t[p] = s[p];

    if (s != null && typeof Object.getOwnPropertySymbols === "function")

        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {

            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))

                t[p[i]] = s[p[i]];

        }

    return t;

};

import React from "react";

import styled from "styled-components";

const CheckboxContainer = styled.div `

  display: inline-flex;

  vertical-align: middle;



  label {

    display: inline-flex;

    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  }

`;

const Icon = styled.svg `

  fill: none;

  stroke: white;

  stroke-width: 2px;

`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" }) `

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

const StyledCheckbox = styled.div `

  display: inline-block;

  width: 16px;

  height: 16px;

  background: ${({ checked, disabled }) => checked ? (disabled ? "#D7D7D8" : "salmon") : "papayawhip"};

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

const Checkbox = (_a) => {

    var { className, checked, children, varient = "CHECKBOX" } = _a, props = __rest(_a, ["className", "checked", "children", "varient"]);

    return (React.createElement(CheckboxContainer, { className: className, disabled: props.disabled },

        React.createElement("label", null,

            React.createElement(HiddenCheckbox, Object.assign({ checked: checked }, props)),

            varient === "CHECKBOX" && (React.createElement(StyledCheckbox, { checked: checked, disabled: props.disabled },

                React.createElement(Icon, { viewBox: "0 0 24 24" },

                    React.createElement("polyline", { points: "20 6 9 17 4 12" })))),

            varient === "CHILDREN" && children)));

};

export default Checkbox;

