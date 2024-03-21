import React from 'react';
import CloudSvg from '../../assets/vectors/cloud.svg';
import FewCloudsSvg from '../../assets/vectors/few-clouds.svg';
import ClearSkySvg from '../../assets/vectors/clear-sky.svg';
import BrokenCloudsSvg from '../../assets/vectors/broken-clouds.svg';
import ShowerRainSvg from '../../assets/vectors/shower-rain.svg';
import RainSvg from '../../assets/vectors/rain.svg';
import SnowSvg from '../../assets/vectors/snow.svg';
import FogSvg from '../../assets/vectors/fog.svg';

const WeatherIcon = ( icon ) => {
    switch (icon) {
        case 'scattered clouds':
            return CloudSvg;
        case 'few clouds':
            return FewCloudsSvg;
        case 'clear sky':
            return ClearSkySvg;
        case 'broken clouds':
            return BrokenCloudsSvg;
        case 'shower rain':
            return ShowerRainSvg;
        case 'rain':
            return RainSvg;
        case 'thunderstorm':
            return BrokenCloudsSvg;
        case 'snow':
            return SnowSvg;
        case 'mist':
            return FogSvg;
        default:
            return CloudSvg;
    }
};

export default WeatherIcon;
