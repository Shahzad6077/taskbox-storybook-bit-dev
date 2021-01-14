import { FC } from "react";

export declare type StatusInterface = "DEFAULT" | "PINNED" | "COMPLETED";

export declare type TaskboxProps = {

    id: string;

    label: string;

    status: StatusInterface;

    onStatusChange?: (id: string, status: StatusInterface) => void;

};

declare const Taskbox: FC<TaskboxProps>;

export default Taskbox;

