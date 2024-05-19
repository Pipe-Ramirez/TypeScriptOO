import { AccessType, Category } from "../model/category.model";
import { IsEnum, IsNotEmpty, IsUrl, Length, validateOrReject, } from 'class-validator';

export interface InCreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements InCreateCategoryDto {
  @IsNotEmpty()
  @Length(4,150)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsNotEmpty()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async()=>{
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'fe';
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);

  }
})();
