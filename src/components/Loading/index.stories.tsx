import Meta from "@storybook/react";
import { IThemeContext } from "src/@types";
import { ThemeProvider } from "styled-components";

import { ThemeContext } from "../../contexts/Theme";
import { light, dark } from "../../styles/themes";
import { Loading } from "./Loading";

export default {
    title: "Global/Loading",
    component: Loading,
} as Meta;

//build for light and dark themes
export const Light = () => (
    <ThemeContext.Provider value={{ lightMode: true } as IThemeContext}>
        <ThemeProvider theme={light}>
            <Loading />
        </ThemeProvider>
    </ThemeContext.Provider>
);

export const Dark = () => (
    <ThemeContext.Provider value={{ lightMode: false } as IThemeContext}>
        <ThemeProvider theme={dark}>
            <Loading />
        </ThemeProvider>
    </ThemeContext.Provider>
);
