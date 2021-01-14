import React from "react";

import Taskbox from "./index";

export default {

    title: "Ui/Taskbox",

    component: Taskbox,

    args: {

        label: "Go to Gym at 8pm",

        id: "123sdf",

    },

};

const Template = (args) => React.createElement(Taskbox, Object.assign({}, args));

export const Default = Template.bind({});

Default.args = {

    status: "DEFAULT",

};

export const Pinned = Template.bind({});

Pinned.args = {

    status: "PINNED",

};

export const Completed = Template.bind({});

Completed.args = {

    status: "COMPLETED",

};

