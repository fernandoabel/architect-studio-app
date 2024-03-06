import React, { useState } from "react";
import { Settings } from "../model/settings.model";

const defaultState: Settings = {
    name: "",
    description: "",
    role: "",
    avatar: "",
    framework: "",
    title: "",
    icon: "",
    siteStyle: "",
    email: "",
    theme: {},
    social: [],
    routes: [],
};

export const GeneralContext = React.createContext({
    Data: defaultState,
    setData: (state: any) => {},
});

export const GeneralContextProvider = (props: any) => {
    const { children } = props;
    const [state, setState] = useState<Settings>(props.value ?? defaultState);

    let setData = (state: any) => {
        setState(state);
    };

    return (
        <GeneralContext.Provider
            value={{
                Data: state,
                setData,
            }}
        >
            {children}
        </GeneralContext.Provider>
    );
};
