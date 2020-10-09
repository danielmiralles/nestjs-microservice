import { Test, TestingModule } from '@nestjs/testing';
import { GithubProfileController } from './github-profile.controller';

describe('GithubProfileController', () => {
  let controller: GithubProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubProfileController],
    }).compile();

    controller = module.get<GithubProfileController>(GithubProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
