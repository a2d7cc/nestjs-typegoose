import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ReviewModel } from './review.model';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ReviewModel,
        schemaOptions: {
          collection: 'Review',
        },
      },
    ]),
  ],
})
export class ReviewModule {}
