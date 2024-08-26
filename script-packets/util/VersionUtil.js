import { MOD_VERSION, MOD_DATE, MOD_ENABLED } from "../modding/api.js";

const VERSION = '0.2.8';
const DATE = '2024.8.26';

export function returnVersion(type = 'version') {
    
    var date_type = type.toLowerCase().startsWith('date');
    var dev_type = type.toLowerCase().includes('dev');

    var version_str = MOD_ENABLED ? MOD_VERSION : VERSION;
    var version_date_str = MOD_ENABLED ? MOD_DATE : DATE;
    var develop_str = ' (PROTOTYPE)';
    
    var version_return = 'v' + version_str;

    if (date_type) version_return = version_date_str;
    if (dev_type) version_return += develop_str;

    return version_return + ` ${returnStable()}`;
}

export function returnStable(type = 'regular') {
    var build_type = "Stable";
    var dev_type = type.toLowerCase().includes('dev');

    if (dev_type) build_type = "Unstable";

    return build_type;
}
