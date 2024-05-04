import { Document } from 'mongoose';

export interface IUpdateOtp extends Document {
    newOtp: number;
    
}
