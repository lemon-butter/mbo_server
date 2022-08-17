import { Injectable, Scope } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { Mbo } from 'src/mbo/entities/mbo.entity';
import { MboService } from 'src/mbo/mbo.service';
 
@Injectable({ scope: Scope.REQUEST })
export default class PostsLoaders {
  constructor(
    private mboService: MboService,
  ) {
  }
 
  public readonly batchAuthors = new DataLoader(async (authorIds: number[]) => {
    const users = await this.mboService.findFromMemberCodes(authorIds);
    const usersMap = new Map(users.map(user => [user.mboCode, Mbo]));
    return authorIds.map(authorId => usersMap.get(authorId));
  })
}