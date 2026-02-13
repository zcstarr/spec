import OpenRPCSpecificationSchema1_4 from "../spec/1.4/schema.json";
import OpenRPCSpecificationSchemaLegacy from "../spec/legacy/schema.json";
export { OpenRPCSpecificationSchema1_4, OpenRPCSpecificationSchemaLegacy };
export const getAllSchemas = () =>{
  return {
  "1.4": OpenRPCSpecificationSchema1_4, 
  "legacy": OpenRPCSpecificationSchemaLegacy,
  }
};