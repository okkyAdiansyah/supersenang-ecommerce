import React, { useEffect, useState } from "react";

const useResponsive = () => {
    const device = {
        MOBILE: "mobile",
        TABLET: "tablet",
        DESKTOP: "desktop"
    };

    const getDeviceType = () => {
        if(typeof window === "undefined") return device.DESKTOP;

        const screenWidth = window.innerWidth;
        if(screenWidth <= 640) return device.MOBILE;
        if(screenWidth > 640 && screenWidth < 1024) return device.TABLET;
        return device.DESKTOP;
    }

    const [deviceType, setDeviceType] = useState(getDeviceType());

    useEffect(() => {
        const handleResize = () => {
            setDeviceType(getDeviceType());
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return deviceType;
}

export default useResponsive;
