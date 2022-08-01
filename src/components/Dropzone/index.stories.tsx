import { Meta } from "@storybook/react";
import { IDropzone } from "src/@types";
import { dark, light } from "src/styles/themes";
import { ThemeProvider } from "styled-components";

import Dropzone from "./Dropzone";

export default {
    title: "Global/Dropzone",
    component: Dropzone,
} as Meta<IDropzone>;

export const Light = (args: IDropzone) => (
    <ThemeProvider theme={light}>
        <Dropzone {...args} />
    </ThemeProvider>
);

export const Dark = (args: IDropzone) => (
    <ThemeProvider theme={dark}>
        <Dropzone {...args} />
    </ThemeProvider>
);
