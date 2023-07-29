import { CustomMap } from "./CustomMap"
import { User } from "./User";
import {Company} from "./Company";
  // Create a new map instance and set its options
const customMap = new CustomMap('map');


const userMap = customMap.addMarker(new User());
const companyMap = customMap.addMarker(new Company());

