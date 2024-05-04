import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminDocument } from './entities/admin.entity';
import * as bcrypt from 'bcrypt';
import { AccountState } from 'src/enums/common';

@Injectable()
export class AdminService {
  constructor(@InjectModel('Admin') private adminModel: Model<AdminDocument>,
  ) {}

  async getAdminCount(): Promise<number> {
    return this.adminModel.countDocuments().exec();
  }

  async createDefaultAdmin() {
    const now = new Date();
    const hashedPassword = await bcrypt.hash('mediSphereVie2024', 8);

    await this.adminModel.create({
      email: 'mediSphereVie2024@gmail.com',
      password: hashedPassword,
      state: AccountState.active,
      createdAt: now,
    });
  }

  async findAll(): Promise<AdminDocument[]> {
    return this.adminModel.find().exec();
  }

  async findById(id: string): Promise<AdminDocument> {
    return this.adminModel.findById(id);
  }

  async findByUsername(username: string): Promise<AdminDocument> {
    return this.adminModel.findOne({ username }).exec();
  }
}
