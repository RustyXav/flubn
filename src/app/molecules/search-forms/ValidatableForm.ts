import { OutputRef } from "@angular/core";

export interface ValidatableForm {
  ValidityChange: OutputRef<boolean>;
}