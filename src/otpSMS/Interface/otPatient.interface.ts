import {Document } from 'mongoose';
export interface IMPatientOtp extends Document {

 readonly phone: string ;
 readonly otp: number;
 readonly refreshToken  : string 

}