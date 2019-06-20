import { SocialNetworkModule } from './social-network.module';

describe('SocialNetworkModule', () => {
  let socialNetworkModule: SocialNetworkModule;

  beforeEach(() => {
    socialNetworkModule = new SocialNetworkModule();
  });

  it('should create an instance', () => {
    expect(socialNetworkModule).toBeTruthy();
  });
});
