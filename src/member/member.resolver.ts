import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Mbo } from 'src/mbo/entities/mbo.entity';
import { MboService } from 'src/mbo/mbo.service';
import { Member } from './entities/member.entity';
import { MemberService } from './member.service';

@Resolver(() => Member)
export class MemberResolver {
  constructor(
    private readonly memberService: MemberService,
    private mboService: MboService,
  ) {}

  // @Mutation(() => Member)
  // createMember(@Args('createMemberInput') createMemberInput: CreateMemberInput) {
  //   return this.memberService.create(createMemberInput);
  // }

  @Query(() => [Member], { name: 'allMembers' })
  findAll() {
    return this.memberService.findAll();
  }

  @Query(() => Member, { name: 'member' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    const ggg = this.memberService.findOne(id);
    console.log("ggg", ggg);
    return ggg;
  }

  @Query(() => [Member], { name: 'memberFromName' })
  findFromName(@Args('memberName', { type: () => String }) memberName: string) {
    console.log("kkk", memberName);
    const kkk = this.memberService.findFromName(memberName);
    console.log("kkk", kkk);

    return this.memberService.findFromName(memberName);
  }

  @Query(() => [Member], { name: 'memberFromCodes' })
  findFromCodes(@Args('memberCodes', { type: () => [String] }) memberCodes: String[]) {
    console.log("#123");
    const kkk = this.memberService.findFromCodes(memberCodes);
    
    return kkk;
  }

  @Query(() => [Member], { name: 'memberFromCodes2' })
  findFromCodes2(@Args('memberCodes', { type: () => [String] }) memberCodes: String[]) {
    console.log("#123");
    const kkk = this.memberService.findFromCodes(memberCodes);
    
    return kkk;
  }

  // @Mutation(() => Member)
  // updateMember(@Args('updateMemberInput') updateMemberInput: UpdateMemberInput) {
  //   return this.memberService.update(updateMemberInput.id, updateMemberInput);
  // }

  @Mutation(() => Member)
  removeMember(@Args('id', { type: () => Int }) id: number) {
    return this.memberService.remove(id);
  }

  @ResolveField()
  async mbos(@Parent() member: Member) {
    // console.log(`posts(user: ${JSON.stringify(member)})`);
    const { memberCode } = member;

    return this.mboService.batchAuthors.load(memberCode);

    // return this.mboService.findFromMemberCode(memberCode);
    // const userLoader = new DataLoader<number, Mbo>(
    //   async (memberCodes:readonly number[]) =>
    //     await this.mboService.findFromMemberCodes(memberCodes as number[])
    // );

    // userLoader.load(memberCode);

    // return null;
  }
}
