import React from "react";

import styled from "styled-components";

const ListWrapper = styled.div `

  display: flex;

  flex-direction: column;

  padding: 1rem;



  & > * + * {

    margin-bottom: 12px;

  }

  h5 {

    text-align: center;

  }

`;

const TaskList = ({ title, list, onChangeTaskItem, style, }) => {

    return (React.createElement(ListWrapper, { style: style },

        React.createElement("h5", null, title)));

};

TaskList.defaultProps = {

    title: "List Title",

};

export default TaskList;

