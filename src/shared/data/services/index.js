import {gst} from "./GSTRegistration";
import { iec } from "./IEC";
import { logo } from "./LogoDesign";
import { startup } from "./StartupMentoring";

export const products = {

    [gst.slug]: gst,
    [iec.slug]: iec,
    [logo.slug]:logo,
    [startup.slug]: startup,

};

export default products;

export const productList = Object.values(products);