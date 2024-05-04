import { Controller,Res, Get, Post,HttpStatus, Body, Patch, Param, Delete, UseGuards, Query, Put, UseInterceptors, UploadedFiles, HttpException, Req } from '@nestjs/common';
import { CreateMedecinDto } from './dto/create-Medecin.dto';
import { UpdateMedecinDto } from './dto/update-Medecin.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { MedecinService } from './Medecin.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { IMedecin } from './Interface/medecin.interface';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
@Controller('Medecin')
@ApiTags('Medecin')
export class MedecinController {
  constructor(private readonly MedecinService: MedecinService) {}
  @Post('/request')
  async createRequest(
    @Req() req: Request,
    @Res() res: Response,
    @Body() createMedecinDto: CreateMedecinDto,
  ) {
    return this.MedecinService.createRequest(req, res, createMedecinDto);
  }
  @Post()
  async create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() createMedecinDto: CreateMedecinDto,
  ) {
    return this.MedecinService.create(req, res, createMedecinDto);
  }
 // @ApiBearerAuth('access-token')
  // @UseGuards(AccessTokenGuard)
  @Get()
  findAll() {
    return this.MedecinService.findAll();
  }
  @Get('/approved')
  getPendingDoctors() {
    return this.MedecinService.getApprovedDoctors();
  }
  @Get('/refused')
  getrefuseDoctors() {
    return this.MedecinService.getRefusedDoctors();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.MedecinService.findOne(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoctorDto: UpdateMedecinDto) {
    return this.MedecinService.update(id, updateDoctorDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.MedecinService.remove(id);
  }
  @Get('email/:email')
  async findByEmail(@Param('email') email: string, @Res() response) {
      try {
          const medecin = await this.MedecinService.findByEmail(email);
          if (!medecin) {
              return response.status(HttpStatus.NOT_FOUND).json({
                  status: HttpStatus.NOT_FOUND,
                  message: 'Aucun medecin trouvé avec cet e-mail',
                  data: null,
              });
          }
          return response.status(HttpStatus.OK).json({
              status: HttpStatus.OK,
              message: 'Medecin trouvé avec succès',
              data: medecin,
          });
      } catch (error) {
          console.error('Erreur lors de la recherche du medecin par e-mail :', error);
          return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
              status: HttpStatus.INTERNAL_SERVER_ERROR,
              message: 'Erreur lors de la recherche du medecin par e-mail',
              data: null,
          });
      }
  }
    @Get('items')
    async  findAllMedecinByItems(@Res () response, @Query('items') items: string) {
      try {
       const data =await this.MedecinService.findAllMedecinByItems(items);
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
      }}