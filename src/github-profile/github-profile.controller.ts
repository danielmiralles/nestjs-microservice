import { Controller, Get, Param } from '@nestjs/common';
import { GithubProfileService } from './github-profile.service';

@Controller('github')
export class GithubProfileController {

  constructor(private githubProfileService: GithubProfileService) {
  }

  @Get(':username')
  async view(@Param() param) {
    const response = await this.githubProfileService.search(param.username);
    return response.data;
  }
}
