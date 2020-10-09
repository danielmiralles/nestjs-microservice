import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerminusModule } from '@nestjs/terminus/index';
import { HealthController } from './health/health.controller';
import { GithubProfileController } from './github-profile/github-profile.controller';
import { GithubProfileService } from './github-profile/github-profile.service';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [AppController, HealthController, GithubProfileController],
  providers: [AppService, GithubProfileService],
})
export class AppModule {}
