import React from "react";

import styled from "styled-components";

import PinIcon from "./PinIcon";

import Checkbox from "./../Checkbox";

const TaskboxWrapper = styled.div `

  max-width: 720px;

  padding: 1rem;

  display: flex;

  justify-content: space-between;

  border: ${(props) => `2px solid ${props.theme.colors.yellow}`};

  /* Change the BG color if task is Ccmpleted */

  background-color: ${({ isCompleted, theme: { colors: { yellow, gray }, }, }) => (isCompleted ? yellow : gray)};



  & .pinned {

    width: 30px;

    height: 30px;

    cursor: pointer;

    transform: ${(props) => (props.isPinned ? "unset" : "rotate(45deg)")};

    transition: transform 100ms ease-in-out;

    display: ${(props) => (props.isCompleted ? "none" : "flex")};



    & svg {

      width: 80%;

      height: 80%;

      margin: auto;

    }

  }

`;

const Content = styled.div `

  display: flex;

  align-items: center;

  p {

    font-weight: 600;

    margin: 0px;

    margin-left: 1rem;

  }

`;

const Taskbox = ({ id, label, onStatusChange, status }) => {

    const statusChangehandler = (e) => {

        if (e.target.name === "isPinned") {

            onStatusChange(id, e.target.checked ? "PINNED" : "DEFAULT");

        }

        else if (e.target.name === "isCompleted") {

            onStatusChange(id, "COMPLETED");

        }

    };

    return (React.createElement(TaskboxWrapper, { isPinned: status === "PINNED", isCompleted: status === "COMPLETED" },

        React.createElement(Content, null,

            React.createElement(Checkbox, { checked: status === "COMPLETED", onChange: statusChangehandler, name: "isCompleted", disabled: status === "COMPLETED" }),

            React.createElement("p", null, label)),

        React.createElement(Checkbox, { checked: status === "PINNED", onChange: statusChangehandler, varient: "CHILDREN", name: "isPinned", disabled: status === "COMPLETED" },

            React.createElement("span", { className: "pinned" },

                React.createElement(PinIcon, null)))));

};

Taskbox.defaultProps = {

    status: "DEFAULT",

};

export default Taskbox;

