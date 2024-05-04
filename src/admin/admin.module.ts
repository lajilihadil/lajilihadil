import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminSchema } from './entities/admin.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Admin', schema: AdminSchema }]),
  ],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {
  constructor(private readonly adminService: AdminService) {
    // Appeler la méthode create pour créer un administrateur par défaut
    this.createDefaultAdmin();
  }

  async createDefaultAdmin() {
    try {
      // Vérifier s'il y a déjà des administrateurs
      const adminCount = await this.adminService.getAdminCount();

      // Si aucun administrateur n'existe, créer un administrateur par défaut
      if (adminCount === 0) {
        await this.adminService.createDefaultAdmin();
      }
    } catch (error) {
      console.error('Failed to create default admin:', error);
    }
  }
}
