import React from "react";

import Checkbox from "./index";

export default {

    title: "Ui/Checkbox",

    component: Checkbox,

};

const Template = (args) => (React.createElement(Checkbox, Object.assign({}, args),

    React.createElement("span", null, "checkbox")));

export const Default = Template.bind({});

Default.args = {

    checked: true,

};

export const WithChildren = Template.bind({});

WithChildren.args = {

    checked: true,

    varient: "CHILDREN",

};

