import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class GithubProfileService {
  constructor(private httpService: HttpService) {}

  async search(githubUsername: string) {
    return this.httpService.get(`https://api.github.com/users/${githubUsername}`).toPromise();
  }
}
