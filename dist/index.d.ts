import React, { FC } from "react";

export declare type CheckboxProps = {

    name?: string;

    className?: string;

    checked?: boolean;

    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

    varient?: "CHECKBOX" | "CHILDREN";

    disabled?: boolean;

};

declare const Checkbox: FC<CheckboxProps>;

export default Checkbox;

