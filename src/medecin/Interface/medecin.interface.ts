import {Document } from 'mongoose';
export interface IMedecin extends Document {
 readonly id: number;
 readonly pays : string 
 readonly gouvernorat : string 
 readonly specialite : string 
 readonly nom: string 
 readonly prenom: string 
 readonly email: string 
 readonly telephone : string 
 readonly password : string 
 readonly state: number;
 readonly refreshToken  : string 

}