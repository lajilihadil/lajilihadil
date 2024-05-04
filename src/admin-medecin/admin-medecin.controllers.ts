import { Controller,Res, Get, Post,HttpStatus, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { CreateAdminMedecinDto } from './dto/create-admin-medecin.dto';
import { UpdateAdminMedecinDto } from './dto/update-admin-medecin.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminMedecinService } from './admin-medecin.service';

@Controller('AdminMedecin')
@ApiTags('AdminMedecin')

export class AdminMedecinController {
  constructor(
    private readonly AdminMedecinService: AdminMedecinService,
  
  ) {}

 
  @Post()
  async create(@Res() response, @Body() createAdminMedecinDto: CreateAdminMedecinDto) {
    try {
      const Admin = await this.AdminMedecinService.create(createAdminMedecinDto);
      console.log('Admin Medecin created:', Admin);
      return response.status(HttpStatus.CREATED).json({
        status: HttpStatus.CREATED,
        message: 'Successfully created admin-medecin and sent verification email',
        data: Admin,
      });

    } catch (err) {
      console.error('Error creating admin-medecin and sending verification email:', err);

      return response.status(HttpStatus.BAD_REQUEST).json({
        status: HttpStatus.BAD_REQUEST,
        message: err.message,
        data: null,
      });
    }
  }
 

  @Get('items')
  async  findAllAdminByItems(@Res () response, @Query('items') items: string) {
    try {
     const data =await this.AdminMedecinService.findAllAdminByItems(items);
    return response.status(HttpStatus.OK).json({
       status:HttpStatus.OK,
       message:"successfully",
       data: data
    });
   } catch (err) {
    return response.status(HttpStatus.BAD_REQUEST).json({
     status:HttpStatus.BAD_REQUEST,
     message:err.message,
     data: null
   });
     }
    }
 @ApiBearerAuth('access-token')
/*   @UseGuards(AccessTokenGuard)
 */  @Get()
  findAll() {
    return this.AdminMedecinService.findAll();
  }
@ApiBearerAuth('access-token')
/*   @UseGuards(AccessTokenGuard) */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.AdminMedecinService.findById(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminMedecinDto) {
    return this.AdminMedecinService.update(id, updateAdminDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.AdminMedecinService.remove(id);
  }

}