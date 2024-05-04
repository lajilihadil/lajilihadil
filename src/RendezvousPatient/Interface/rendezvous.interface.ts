import {Document } from 'mongoose';
export interface IRendezvousPatient extends Document {
    readonly date: Date;
    readonly temps: string;
    readonly motifs: string;
    readonly  nom: string;
    readonly prenom: string;
    readonly telephone: string;
}