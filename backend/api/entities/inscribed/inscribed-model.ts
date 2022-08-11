import { model } from "mongoose";
import { InscribedSchema } from "./inscribed-schema";
import { IInscribed } from "./inscribed-types";

export const InscribedModel = model<IInscribed>('Inscribed', InscribedSchema);